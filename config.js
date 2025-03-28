// config.js - Application Constants

export const TRANSLATIONS = {
    "ASV": "American Standard Version (ASV)",
    "DARBY": "Darby Translation (DARBY)",
    "DRA": "Douay-Rheims 1899 (DRA)",
    "KJV": "King James Version (KJV)",
    "WEB": "World English Bible (WEB)",
    "YLT": "Young's Literal Translation (YLT)",
    "RVA": "Reina-Valera Antigua (RVA)",
    "VULGATE": "Biblia Sacra Vulgata (VULGATE)",
    "NLT": "New Living Translation (NLT)"
};

export const DEFAULT_TRANSLATION_KEY = 'WEB';

// --- Data Access ---
// These rely on global variables created by verses.js and mappings.js
// We access them here ONCE and export references to them.
// Add checks to ensure they loaded correctly.

const VERSE_DB = typeof verseDatabase !== 'undefined' ? verseDatabase : null;
const DENOMINATION_MAPS = typeof denominationMappings !== 'undefined' ? denominationMappings : null;
const AVAILABLE_DENOMS = typeof availableDenominations !== 'undefined' ? availableDenominations : [];

// Export references to the data
export const VERSE_DATABASE = VERSE_DB;
export const MAPPINGS = DENOMINATION_MAPS;
export const DENOMINATIONS_LIST = AVAILABLE_DENOMS;

// --- Conceptual Groups & Section Titles (11 total) ---
// Used by app.js to iterate and find mapping data
export const COMMANDMENT_GROUPS = [
    "PREAMBLE_ID", "IDENTITY_WORSHIP", "IDOLATRY", "NAME_VAIN", "SABBATH", "PARENTS", "MURDER",
    "ADULTERY", "STEALING", "FALSE_WITNESS", "COVETING" // Simplified coveting group
    // If Catholic split needs distinct rows, use: "COVETING_WIFE", "COVETING_GOODS"
];

// Displayed titles for the 11 sections
export const SECTION_TITLES = [
    "Preamble", "Command 1", "Command 2", "Command 3", "Command 4", "Command 5",
    "Command 6", "Command 7", "Command 8", "Command 9", "Command 10"
    // If using 11 distinct groups above, adjust titles: "Command 9", "Command 10 (Wife/House)", "Command 10 (Goods/Etc)"
];


// --- Error checking for essential data ---
// Run checks when this module loads
if (!VERSE_DB) {
    console.error("CONFIG FATAL ERROR: verseDatabase not found globally. Check verses.js loading and variable name.");
    // Optionally throw an error to halt execution if critical
    // throw new Error("verseDatabase not loaded");
}
if (!DENOMINATION_MAPS) {
    console.error("CONFIG FATAL ERROR: denominationMappings not found globally. Check mappings.js loading and variable name.");
    // throw new Error("denominationMappings not loaded");
}
if (AVAILABLE_DENOMS.length === 0) {
     console.warn("CONFIG WARNING: availableDenominations list is empty. Check mappings.js definition.");
}
if (COMMANDMENT_GROUPS.length !== SECTION_TITLES.length) {
    console.error(`CONFIG ERROR: COMMANDMENT_GROUPS length (${COMMANDMENT_GROUPS.length}) does not match SECTION_TITLES length (${SECTION_TITLES.length}). Check definitions.`);
}

console.log("config.js loaded successfully."); // Confirmation log