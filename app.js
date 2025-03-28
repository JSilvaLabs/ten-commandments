// app.js - Refactored Logic for Normalized Data v2 with Click Handler Logging

// --- Import Utilities ---
import { getShortName, formatTextLines, filterVerse17 } from './utils.js';
// --- Import Constants ---
import {
    TRANSLATIONS,
    DEFAULT_TRANSLATION_KEY,
    MAPPINGS, // The global denominationMappings object
    DENOMINATIONS_LIST, // The global availableDenominations array
    COMMANDMENT_GROUPS,
    SECTION_TITLES,
    VERSE_DATABASE // Import VERSE_DATABASE reference from config
} from './config.js';

document.addEventListener('DOMContentLoaded', () => {

    // --- Constants are now imported ---

    // --- State Variables ---
    let selectedDenominationKey1 = null; let selectedDenominationKey2 = null;
    let selectedTranslationKey1 = DEFAULT_TRANSLATION_KEY;
    let selectedTranslationKey2 = DEFAULT_TRANSLATION_KEY;

    // --- DOM References ---
    const chooserCol1 = document.getElementById('chooser-col1');
    const chooserCol2 = document.getElementById('chooser-col2');
    const translationSelectCol1 = document.getElementById('translation-select-col1');
    const translationSelectCol2 = document.getElementById('translation-select-col2');
    const comparisonSectionsContainer = document.getElementById('comparison-sections');
    const titleCol1 = document.getElementById('title-col1');
    const titleCol2 = document.getElementById('title-col2');

    // --- Helper Function Definitions ---

    // getDenominationMapping retrieves the mapping structure
    function getDenominationMapping(denominationKey) {
        if (!MAPPINGS) return { mappingData: null, error: `Missing MAPPINGS data structure.` };
        if (!denominationKey || !MAPPINGS[denominationKey]) {
            const fallbackKey = DENOMINATIONS_LIST.length > 0 ? DENOMINATIONS_LIST[0] : null;
            const fallbackMapping = fallbackKey ? MAPPINGS[fallbackKey] : null;
             if(!fallbackMapping){ return { mappingData: null, error: `Missing denomination mapping (${denominationKey || 'None selected'}) AND no fallback mapping available.` }; }
             console.warn(`Denomination mapping ${denominationKey} missing, using fallback structure from ${fallbackKey}.`);
             return { mappingData: fallbackMapping, error: null }; // Return fallback mapping
        }
        return { mappingData: MAPPINGS[denominationKey], error: null };
    }

    // getVerseData retrieves the verse text object for a translation
    function getVerseData(translationKey) {
        const verseData = VERSE_DATABASE?.[translationKey] || VERSE_DATABASE?.[DEFAULT_TRANSLATION_KEY];
        const actualKeyUsed = VERSE_DATABASE?.[translationKey] ? translationKey : DEFAULT_TRANSLATION_KEY;
        if (!verseData) return { verseData: null, translationKeyUsed: null, error: `Missing verse data for default translation (${DEFAULT_TRANSLATION_KEY})` };
        return { verseData: verseData, translationKeyUsed: actualKeyUsed, error: null };
    }


    // updateDisplay uses the two helpers above
    function updateDisplay() {
        comparisonSectionsContainer.innerHTML = ''; // Clear sections

        // Get Mappings
        const mapResult1 = getDenominationMapping(selectedDenominationKey1);
        const mapResult2 = getDenominationMapping(selectedDenominationKey2);

        // Get Verse Texts
        const verseResult1 = getVerseData(selectedTranslationKey1);
        const verseResult2 = getVerseData(selectedTranslationKey2);

        // Update Titles
        titleCol1.textContent = selectedDenominationKey1 ? getShortName(mapResult1.mappingData?.name || selectedDenominationKey1) : 'Version 1';
        titleCol2.textContent = selectedDenominationKey2 ? getShortName(mapResult2.mappingData?.name || selectedDenominationKey2) : 'Version 2';

        // Error handling (check core data loaded via imported constants)
        if (!VERSE_DATABASE || !MAPPINGS) {
             comparisonSectionsContainer.innerHTML = `<div class="error-message">Fatal Error: Core data files missing.</div>`;
             chooserCol1.innerHTML = '<span class="placeholder error-message">Error</span>';
             chooserCol2.innerHTML = '<span class="placeholder error-message">Error</span>';
             return;
        }
        // Handle initial state or failed lookups
        if (!selectedDenominationKey1 && !selectedDenominationKey2) { comparisonSectionsContainer.innerHTML = `<div class="placeholder">Select versions above to compare.</div>`; return; }
        if (verseResult1.error || verseResult2.error) { comparisonSectionsContainer.innerHTML = `<div class="error-message">${verseResult1.error || verseResult2.error}</div>`; return;}
        // Specific error if a mapping failed
        if (mapResult1.error || mapResult2.error) { comparisonSectionsContainer.innerHTML = `<div class="error-message">${mapResult1.error || mapResult2.error}</div>`; return;}


        // --- Iterate through Sections ---
        SECTION_TITLES.forEach((sectionTitleText, sectionIndex) => {
            const isEvenRow = sectionIndex % 2 === 1;

            // --- Function to get formatted HTML for one column ---
             // Takes mapping object, verse object, denom key, translation key
            const getSectionColumnHTML = (mappingData, verseData, denominationKey, translationKeyUsed) => {
                let textBlockHTML = ''; let foundContent = false;

                // Handle states
                if (!denominationKey) return '<div class="section-column"><p class="placeholder">Select Version</p></div>';
                if (!mappingData) return `<div class="section-column"><p class="placeholder">Mapping Error</p></div>`;
                if (!verseData) return `<div class="section-column"><p class="placeholder">Verse Data Error</p></div>`;

                const currentSectionMap = mappingData.sections?.[sectionIndex];
                if (!currentSectionMap) return '<div class="section-column"> </div>';

                // --- Preamble Row Logic (index 0) ---
                 if (sectionIndex === 0) {
                     if (currentSectionMap.isPreamble && currentSectionMap.verses.length > 0) {
                         const verseText = verseData[currentSectionMap.verses[0]];
                         if (verseText) { textBlockHTML = formatTextLines([verseText], true); foundContent = true; }
                         else { textBlockHTML = `<p class="commandment-text">[Text missing for ${currentSectionMap.verses[0]}]</p>`; foundContent = true;}
                     } else { textBlockHTML = '<p class="placeholder">None</p>'; foundContent = true; }
                 }
                 // --- Commandment Row Logic (index > 0) ---
                 else if (currentSectionMap.verses && currentSectionMap.verses.length > 0) {
                    let lines = [];
                    currentSectionMap.verses.forEach(verseRef => {
                        const verseText = verseData[verseRef];
                        if (verseText) {
                             if (denominationKey === "Catholic" && verseRef === "20:17" && currentSectionMap.filter) {
                                 const filteredText = filterVerse17(verseText, currentSectionMap.filter); lines.push(filteredText);
                             } else { lines.push(verseText); }
                             foundContent = true;
                        } else { lines.push(`[Text missing for ${verseRef}]`); foundContent = true; }
                    });
                    textBlockHTML = formatTextLines(lines, false);
                 }

                // Construct final column HTML
                let finalHTML;
                if (foundContent) {
                    finalHTML = `<div class="commandment-text-block">${textBlockHTML || ' '}</div>` +
                                `<span class="translation-note">(${translationKeyUsed || 'N/A'})</span>`;
                } else { finalHTML = `<div class="commandment-text-block"> </div>`; }
                return `<div class="section-column">${finalHTML}</div>`;
            }; // End getSectionColumnHTML


            // --- Create Section Elements ---
            const sectionDiv = document.createElement('div'); sectionDiv.className = `comparison-section ${isEvenRow ? 'bg-even' : 'bg-odd'}`;
            const titleH3 = document.createElement('h3'); titleH3.className = 'section-title'; titleH3.textContent = sectionTitleText; sectionDiv.appendChild(titleH3);
            const contentDiv = document.createElement('div'); contentDiv.className = 'section-content';

            // Pass mapping data (mapResultX.mappingData) and verse data (verseResultX.verseData)
            contentDiv.innerHTML = getSectionColumnHTML(mapResult1.mappingData, verseResult1.verseData, selectedDenominationKey1, verseResult1.translationKeyUsed) +
                                   getSectionColumnHTML(mapResult2.mappingData, verseResult2.verseData, selectedDenominationKey2, verseResult2.translationKeyUsed);

            sectionDiv.appendChild(contentDiv);
            comparisonSectionsContainer.appendChild(sectionDiv);

        }); // End forEach section

        // Call updateChooserSelection AFTER the sections are rendered
        updateChooserSelection(chooserCol1, selectedDenominationKey1);
        updateChooserSelection(chooserCol2, selectedDenominationKey2);
    } // End updateDisplay


    // --- Event Handlers and other Helpers ---

     // Define handleDenominationClick before initializeApp
     function handleDenominationClick(event, columnNumber) {
        console.log(`handleDenominationClick called for column ${columnNumber}. Event:`, event); // Log entry and event object

        const target = event.target;
        console.log("Clicked target element:", target); // Log the actual element clicked

        // Check if the click was on a SPAN with a data-key attribute
        if (target.tagName === 'SPAN' && target.dataset.key) {
            console.log("Clicked element is a valid SPAN with data-key."); // Log success

            const key = target.dataset.key;
            console.log(`Selected key: ${key}`); // Log the key found

            // Prevent re-rendering if the same key is clicked again
            if (columnNumber === 1 && key === selectedDenominationKey1) {
                console.log("Key for column 1 hasn't changed. No update needed.");
                return;
            }
            if (columnNumber === 2 && key === selectedDenominationKey2) {
                console.log("Key for column 2 hasn't changed. No update needed.");
                return;
            }

            // Update state
            if (columnNumber === 1) {
                 selectedDenominationKey1 = key;
                 console.log("Updated selectedDenominationKey1:", selectedDenominationKey1);
            } else {
                 selectedDenominationKey2 = key;
                 console.log("Updated selectedDenominationKey2:", selectedDenominationKey2);
            }

            // Trigger UI update
            console.log("Calling updateDisplay()...");
            updateDisplay();
            console.log("updateDisplay() finished.");

        } else {
            // Log why the condition failed
            console.log("Clicked element was not a valid SPAN or missing data-key.");
            console.log(` - tagName: ${target.tagName}`);
            console.log(` - dataset.key: ${target.dataset?.key}`); // Use optional chaining for safety
        }
     } // End handleDenominationClick

     // Define handleTranslationChange before initializeApp
     function handleTranslationChange(event, columnNumber) {
         console.log(`handleTranslationChange called for column ${columnNumber}. New value: ${event.target.value}`); // Log entry
         const selectedValue = event.target.value;
         if (columnNumber === 1) selectedTranslationKey1 = selectedValue; else selectedTranslationKey2 = selectedValue;
         updateDisplay();
     }

     // Define updateChooserSelection before initializeApp
     function updateChooserSelection(chooserElement, selectedKey) {
         if (!chooserElement) {
             console.error("updateChooserSelection called with invalid chooserElement");
             return;
         }
         console.log(`Updating chooser selection for key: ${selectedKey}`, chooserElement); // Log update attempt
         chooserElement.querySelectorAll('span[data-key]').forEach(span => {
             span.classList.toggle('selected', span.dataset.key === selectedKey);
         });
     }

     // Define populateTranslationSelect before initializeApp
     function populateTranslationSelect(selectElement) {
         // Use imported TRANSLATIONS and DEFAULT_TRANSLATION_KEY
         Object.entries(TRANSLATIONS).forEach(([key, name]) => {
             const option = document.createElement('option'); option.value = key; option.textContent = name;
             if (key === DEFAULT_TRANSLATION_KEY) option.selected = true;
             selectElement.appendChild(option);
         });
     }


    // --- Initialization Function (Includes Logging) ---
    function initializeApp() {
         console.log("initializeApp started.");

         // Use imported constants for check
         if (!VERSE_DATABASE || !MAPPINGS || DENOMINATIONS_LIST.length === 0) {
             console.error("Fatal Error: Mappings, Verse DB, or Denominations List missing!");
             comparisonSectionsContainer.innerHTML = `<div class="error-message">Fatal Error: Core data files missing.</div>`;
             chooserCol1.innerHTML = '<span class="placeholder error-message">Error</span>';
             chooserCol2.innerHTML = '<span class="placeholder error-message">Error</span>';
             return;
         }
         console.log("Data check passed.");

        // Populate Translation Selectors
        populateTranslationSelect(translationSelectCol1);
        populateTranslationSelect(translationSelectCol2);
        console.log("Translation selects populated.");

        // Clear loading placeholders
        // Ensure chooserCol1/2 are valid DOM elements before clearing
        if (chooserCol1) chooserCol1.innerHTML = ''; else console.error("chooserCol1 not found");
        if (chooserCol2) chooserCol2.innerHTML = ''; else console.error("chooserCol2 not found");
        console.log("Placeholders cleared (if elements exist).");
        console.log("Available Denominations:", DENOMINATIONS_LIST);

        // Use keys from imported DENOMINATIONS_LIST
        const denominationKeys = DENOMINATIONS_LIST.filter(key => key !== 'Lutheran');
        console.log("Filtered Denomination Keys:", denominationKeys);

        // Sort Keys using imported MAPPINGS
        denominationKeys.sort((a, b) => {
            const nameA = MAPPINGS[a]?.name || a;
            const nameB = MAPPINGS[b]?.name || b;
            return nameA.localeCompare(nameB);
        });
        console.log("Sorted Keys:", denominationKeys);

        // Populate Denomination Choosers using imported MAPPINGS
        if (denominationKeys.length === 0) {
            console.warn("No denomination keys to process after filtering!");
             if (chooserCol1) chooserCol1.innerHTML = '<span class="placeholder">No versions available</span>';
             if (chooserCol2) chooserCol2.innerHTML = '<span class="placeholder">No versions available</span>';
        } else {
            denominationKeys.forEach((key, index) => {
                console.log(`Processing key ${index}: ${key}`);
                const fullName = MAPPINGS[key]?.name || key;
                const shortName = getShortName(fullName); // Use imported util
                // Ensure chooserCol1/2 exist before appending
                if (chooserCol1) {
                    const span1 = document.createElement('span'); span1.textContent = shortName; span1.dataset.key = key; chooserCol1.appendChild(span1);
                }
                if (chooserCol2) {
                    const span2 = document.createElement('span'); span2.textContent = shortName; span2.dataset.key = key; chooserCol2.appendChild(span2);
                }
            });
            console.log("Denomination pills created (if elements exist).");
        }


        // Add Event Listeners - Check if elements exist first
        if (chooserCol1) chooserCol1.addEventListener('click', (event) => handleDenominationClick(event, 1)); else console.error("Cannot add listener: chooserCol1 not found");
        if (chooserCol2) chooserCol2.addEventListener('click', (event) => handleDenominationClick(event, 2)); else console.error("Cannot add listener: chooserCol2 not found");
        if (translationSelectCol1) translationSelectCol1.addEventListener('change', (event) => handleTranslationChange(event, 1)); else console.error("Cannot add listener: translationSelectCol1 not found");
        if (translationSelectCol2) translationSelectCol2.addEventListener('change', (event) => handleTranslationChange(event, 2)); else console.error("Cannot add listener: translationSelectCol2 not found");
        console.log("Event listeners added (if elements exist).");

        // Read initial translation selections
        if (translationSelectCol1) selectedTranslationKey1 = translationSelectCol1.value;
        if (translationSelectCol2) selectedTranslationKey2 = translationSelectCol2.value;
        console.log("Initial translations set.");

        // No initial updateDisplay call - shows placeholder from HTML
        console.log("initializeApp finished.");

    } // End initializeApp


    // --- Run Initialization ---
    initializeApp(); // Call initializeApp

}); // End DOMContentLoaded