// translations/mappings.js
// Defines how individual verses map to the 11 display sections for each denomination

const denominationMappings = {
    "Jewish": {
        name: "Jewish (Talmudic Listing)",
        sections: [
            // Section Title: "Preamble" -> Jewish has no separate Preamble display, Cmd 1 is v2
            { title: "Preamble", verses: [], isPreamble: false }, // KEEP THIS ROW BLANK (JS will show "None")
            // Section Title: "Command 1" -> Jewish Commandment 1 uses v2
            { title: "Command 1", verses: ["20:2"], isPreamble: false }, // PUT v2 HERE
            // Section Title: "Command 2" -> Jewish Commandment 2 uses v3, v4, v5, v6
            { title: "Command 2", verses: ["20:3", "20:4", "20:5", "20:6"], isPreamble: false },
            // Section Title: "Command 3" -> Jewish Commandment 3 uses v7
            { title: "Command 3", verses: ["20:7"], isPreamble: false },
            // Section Title: "Command 4" -> Jewish Commandment 4 uses v8, v9, v10, v11
            { title: "Command 4", verses: ["20:8", "20:9", "20:10", "20:11"], isPreamble: false },
             // Section Title: "Command 5" -> Jewish Commandment 5 uses v12
            { title: "Command 5", verses: ["20:12"], isPreamble: false },
            // Section Title: "Command 6" -> Jewish Commandment 6 uses v13
            { title: "Command 6", verses: ["20:13"], isPreamble: false },
            // Section Title: "Command 7" -> Jewish Commandment 7 uses v14
            { title: "Command 7", verses: ["20:14"], isPreamble: false },
            // Section Title: "Command 8" -> Jewish Commandment 8 uses v15
            { title: "Command 8", verses: ["20:15"], isPreamble: false },
            // Section Title: "Command 9" -> Jewish Commandment 9 uses v16
            { title: "Command 9", verses: ["20:16"], isPreamble: false },
            // Section Title: "Command 10" -> Jewish Commandment 10 uses v17
            { title: "Command 10", verses: ["20:17"], isPreamble: false }
        ]
    },
    "Catholic": {
        name: "Catholic (Augustinian Listing)",
        sections: [
             // Section Title: "Preamble" -> Catholic has no separate preamble
            { title: "Preamble", verses: [], isPreamble: false }, // KEEP BLANK (JS will show "None")
             // Section Title: "Command 1" -> Catholic Commandment 1 uses v2, v3, v4, v5, v6
            { title: "Command 1", verses: ["20:2", "20:3", "20:4", "20:5", "20:6"], isPreamble: false },
             // Section Title: "Command 2" -> Catholic Commandment 2 uses v7
            { title: "Command 2", verses: ["20:7"], isPreamble: false },
             // Section Title: "Command 3" -> Catholic Commandment 3 uses v8, v9, v10, v11
            { title: "Command 3", verses: ["20:8", "20:9", "20:10", "20:11"], isPreamble: false },
            // Section Title: "Command 4" -> Catholic Commandment 4 uses v12
            { title: "Command 4", verses: ["20:12"], isPreamble: false },
            // Section Title: "Command 5" -> Catholic Commandment 5 uses v13
            { title: "Command 5", verses: ["20:13"], isPreamble: false },
            // Section Title: "Command 6" -> Catholic Commandment 6 uses v14
            { title: "Command 6", verses: ["20:14"], isPreamble: false },
            // Section Title: "Command 7" -> Catholic Commandment 7 uses v15
            { title: "Command 7", verses: ["20:15"], isPreamble: false },
            // Section Title: "Command 8" -> Catholic Commandment 8 uses v16
            { title: "Command 8", verses: ["20:16"], isPreamble: false },
            // Section Title: "Command 9" -> Catholic Commandment 9 uses v17a
            // Use full v17 reference, filtering happens in JS
            { title: "Command 9", verses: ["20:17"], isPreamble: false, filter: "wife" },
            // Section Title: "Command 10" -> Catholic Commandment 10 uses v17b
            // Use full v17 reference, filtering happens in JS
            { title: "Command 10", verses: ["20:17"], isPreamble: false, filter: "goods" }
        ]
    },
    "Protestant": {
        name: "Protestant (Philonic/Reformed Listing)",
        sections: [
             // Section Title: "Preamble" -> Protestant Preamble uses v2
            { title: "Preamble", verses: ["20:2"], isPreamble: true }, // Mark as true preamble
             // Section Title: "Command 1" -> Protestant Commandment 1 uses v3
            { title: "Command 1", verses: ["20:3"], isPreamble: false },
            // Section Title: "Command 2" -> Protestant Commandment 2 uses v4, v5, v6
            { title: "Command 2", verses: ["20:4", "20:5", "20:6"], isPreamble: false },
            // Section Title: "Command 3" -> Protestant Commandment 3 uses v7
            { title: "Command 3", verses: ["20:7"], isPreamble: false },
            // Section Title: "Command 4" -> Protestant Commandment 4 uses v8, v9, v10, v11
            { title: "Command 4", verses: ["20:8", "20:9", "20:10", "20:11"], isPreamble: false },
            // Section Title: "Command 5" -> Protestant Commandment 5 uses v12
            { title: "Command 5", verses: ["20:12"], isPreamble: false },
            // Section Title: "Command 6" -> Protestant Commandment 6 uses v13
            { title: "Command 6", verses: ["20:13"], isPreamble: false },
            // Section Title: "Command 7" -> Protestant Commandment 7 uses v14
            { title: "Command 7", verses: ["20:14"], isPreamble: false },
            // Section Title: "Command 8" -> Protestant Commandment 8 uses v15
            { title: "Command 8", verses: ["20:15"], isPreamble: false },
            // Section Title: "Command 9" -> Protestant Commandment 9 uses v16
            { title: "Command 9", verses: ["20:16"], isPreamble: false },
            // Section Title: "Command 10" -> Protestant Commandment 10 uses v17
            { title: "Command 10", verses: ["20:17"], isPreamble: false }
        ]
    }
    // Lutheran removed
};

// List of available denominations based on the mappings keys
// This is used by app.js to populate the chooser pills
const availableDenominations = Object.keys(denominationMappings);