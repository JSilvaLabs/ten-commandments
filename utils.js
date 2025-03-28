// utils.js - Utility Functions

export function getShortName(fullName) {
    if (!fullName) return '';
    // Remove space, parenthesis, content, parenthesis at the end (allow trailing space removal by trim)
    return fullName.replace(/\s*\(.*\)$/, '').trim();
}

export function formatTextLines(textLines, isPreamble) {
    if (!textLines || textLines.length === 0) return '';
    // Ensure textLines is always treated as an array
    const linesArray = Array.isArray(textLines) ? textLines : [textLines];
    return linesArray.map(line => {
        const className = isPreamble ? "preamble-text" : "commandment-text";
        // Added check for null/undefined line safety
        return `<p class="${className}">${line || "[Text missing]"}</p>`;
    }).join('');
}

export function filterVerse17(fullText, filterType) {
    if (!fullText) return null;
    // Basic filtering - might need refinement
    const wifeRegex = /(covet thy neighbour's wife|desire his wife)(.*?)(?:, nor|$|\.)/i;
    const houseRegex = /(covet thy neighbour's house)(.*?)(?:thy neighbour's wife|$)/i;

    if (filterType === "wife") {
        const wifeMatch = fullText.match(wifeRegex);
         if (wifeMatch && wifeMatch[2] && wifeMatch[2].trim().length > 5) { return `... ${wifeMatch[2].trim().replace(/^,?\s*/, '')}`; }
         else if (wifeMatch) { return `... ${wifeMatch[0]}`; }
         const sentences = fullText.split(/[\.\?\!]\s+/); return sentences.length > 1 ? sentences[1] : fullText; // Crude fallback
    } else if (filterType === "goods") {
        const houseMatch = fullText.match(houseRegex);
          if (houseMatch) { return houseMatch[0].replace(/,?\s*neither shalt thou desire his wife.*$/i, ''); }
         const sentences = fullText.split(/[\.\?\!]\s+/); return sentences[0] ? sentences[0] + '.' : fullText; // Crude fallback
    }
    return fullText;
}