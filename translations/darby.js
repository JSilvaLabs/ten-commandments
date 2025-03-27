// darby.js - Texts from the Darby Translation (1890)

const darbyTranslationData = {
    "Jewish": {
      name: "Jewish (Talmudic Listing)",
      preamble: "(Exodus 20:2) I am Jehovah thy God, who have brought thee out of the land of Egypt, out of the house of bondage.",
      commandments: [
        "1. (Exodus 20:3-6) Thou shalt have no other gods before me. Thou shalt not make thyself any graven image, or any likeness of anything that is in the heavens above, or that is in the earth beneath, or that is in the water under the earth. Thou shalt not bow down thyself to them, nor serve them; for I, Jehovah thy God, am a jealous God, visiting the iniquity of the fathers upon the children upon the third and upon the fourth [generation] of them that hate me, and shewing mercy unto thousands of them that love me and keep my commandments.",
        "2. (Exodus 20:7) Thou shalt not idly utter the name of Jehovah thy God; for Jehovah will not hold him guiltless that idly uttereth his name.", // Darby phrasing "idly utter"
        "3. (Exodus 20:8-11) Remember the sabbath day to hallow it. Six days shalt thou labour, and do all thy work; but the seventh day is the sabbath of Jehovah thy God: thou shalt not do any work, thou, nor thy son, nor thy daughter, thy bondman, nor thy handmaid, nor thy cattle, nor thy stranger that is within thy gates. For in six days Jehovah made the heavens and the earth, the sea, and all that is in them, and rested on the seventh day; therefore Jehovah blessed the sabbath day, and hallowed it.",
        "4. (Exodus 20:12) Honour thy father and thy mother, that thy days may be prolonged in the land that Jehovah thy God giveth thee.",
        "5. (Exodus 20:13) Thou shalt not kill.",
        "6. (Exodus 20:14) Thou shalt not commit adultery.",
        "7. (Exodus 20:15) Thou shalt not steal.",
        "8. (Exodus 20:16) Thou shalt not bear false witness against thy neighbour.",
        "9. (Exodus 20:17a) Thou shalt not covet thy neighbour's house;", // Split for Talmudic
        "10. (Exodus 20:17b) thou shalt not covet thy neighbour's wife, nor his bondman, nor his handmaid, nor his ox, nor his ass, nor anything that is thy neighbour's."
      ]
    },
    "Catholic": {
      name: "Catholic (Augustinian Listing)",
      preamble: null,
      commandments: [
        "1. (Exodus 20:2-6) I am Jehovah thy God... Thou shalt have no other gods before me. Thou shalt not make thyself any graven image... [full text, similar to Jewish Cmd 1]",
        "2. (Exodus 20:7) Thou shalt not idly utter the name of Jehovah thy God...",
        "3. (Exodus 20:8-11) Remember the sabbath day to hallow it...",
        "4. (Exodus 20:12) Honour thy father and thy mother...",
        "5. (Exodus 20:13) Thou shalt not kill.",
        "6. (Exodus 20:14) Thou shalt not commit adultery.",
        "7. (Exodus 20:15) Thou shalt not steal.",
        "8. (Exodus 20:16) Thou shalt not bear false witness against thy neighbour.",
        "9. (Exodus 20:17a - partial) Thou shalt not covet thy neighbour's wife,", // Split for Augustinian
        "10. (Exodus 20:17b - partial) thou shalt not covet thy neighbour's house,... nor his bondman, nor his handmaid, nor his ox, nor his ass, nor anything that is thy neighbour's."
      ]
    },
    "Protestant": {
      name: "Protestant (Philonic/Reformed Listing)",
      preamble: "(Exodus 20:2) I am Jehovah thy God, who have brought thee out of the land of Egypt, out of the house of bondage.",
      commandments: [
        "1. (Exodus 20:3) Thou shalt have no other gods before me.",
        "2. (Exodus 20:4-6) Thou shalt not make thyself any graven image, or any likeness... [full text, similar to Jewish Cmd 1, part 2]",
        "3. (Exodus 20:7) Thou shalt not idly utter the name of Jehovah thy God...",
        "4. (Exodus 20:8-11) Remember the sabbath day to hallow it...",
        "5. (Exodus 20:12) Honour thy father and thy mother...",
        "6. (Exodus 20:13) Thou shalt not kill.",
        "7. (Exodus 20:14) Thou shalt not commit adultery.",
        "8. (Exodus 20:15) Thou shalt not steal.",
        "9. (Exodus 20:16) Thou shalt not bear false witness against thy neighbour.",
        "10. (Exodus 20:17) Thou shalt not covet thy neighbour's house; thou shalt not covet thy neighbour's wife, nor his bondman, nor his handmaid, nor his ox, nor his ass, nor anything that is thy neighbour's." // Coveting kept as one
      ]
    },
    "Lutheran": {
      name: "Lutheran (Catechism Listing)",
      preamble: null,
      commandments: [
        // Using base Darby text corresponding to the number. Catechisms might shorten.
        "1. (Exodus 20:3) Thou shalt have no other gods before me.", // Core text
        "2. (Exodus 20:7) Thou shalt not idly utter the name of Jehovah thy God...",
        "3. (Exodus 20:8) Remember the sabbath day to hallow it.", // Core text
        "4. (Exodus 20:12) Honour thy father and thy mother...",
        "5. (Exodus 20:13) Thou shalt not kill.",
        "6. (Exodus 20:14) Thou shalt not commit adultery.",
        "7. (Exodus 20:15) Thou shalt not steal.",
        "8. (Exodus 20:16) Thou shalt not bear false witness against thy neighbour.",
        "9. (Exodus 20:17a - partial) Thou shalt not covet thy neighbour's house;", // Split for Lutheran (House first)
        "10. (Exodus 20:17b - partial) thou shalt not covet thy neighbour's wife, nor his bondman, nor his handmaid, nor his ox, nor his ass, nor anything that is thy neighbour's."
      ]
    }
    // Add other denominations if needed, applying the Darby text to their structure.
  };