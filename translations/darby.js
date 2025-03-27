// darby.js - Texts from the Darby Translation (1890)
// NEW STRUCTURE with group and number properties

const darbyTranslationData = {
  "Jewish": {
    name: "Jewish (Talmudic Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I am Jehovah thy God, who have brought thee out of the land of Egypt, out of the house of bondage."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou shalt have no other gods before me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make thyself any graven image, or any likeness of anything that is in the heavens above, or that is in the earth beneath, or that is in the water under the earth. Thou shalt not bow down thyself to them, nor serve them; for I, Jehovah thy God, am a jealous God, visiting the iniquity of the fathers upon the children upon the third and upon the fourth [generation] of them that hate me, and shewing mercy unto thousands of them that love me and keep my commandments." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not idly utter the name of Jehovah thy God; for Jehovah will not hold him guiltless that idly uttereth his name." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day to hallow it. Six days shalt thou labour, and do all thy work; but the seventh day is the sabbath of Jehovah thy God: thou shalt not do any work, thou, nor thy son, nor thy daughter, thy bondman, nor thy handmaid, nor thy cattle, nor thy stranger that is within thy gates. For in six days Jehovah made the heavens and the earth, the sea, and all that is in them, and rested on the seventh day; therefore Jehovah blessed the sabbath day, and hallowed it." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother, that thy days may be prolonged in the land that Jehovah thy God giveth thee." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a) Thou shalt not covet thy neighbour's house;" },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b) thou shalt not covet thy neighbour's wife, nor his bondman, nor his handmaid, nor his ox, nor his ass, nor anything that is thy neighbour's." }
    ]
  },
  "Catholic": {
    name: "Catholic (Augustinian Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am Jehovah thy God... Thou shalt have no other gods before me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make thyself any graven image... nor serve them..." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not idly utter the name of Jehovah thy God..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day to hallow it..." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Thou shalt not covet thy neighbour's wife," },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) thou shalt not covet thy neighbour's house,... nor his bondman, nor his handmaid, nor his ox, nor his ass, nor anything that is thy neighbour's." }
    ]
  },
  "Protestant": {
    name: "Protestant (Philonic/Reformed Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I am Jehovah thy God, who have brought thee out of the land of Egypt, out of the house of bondage."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou shalt have no other gods before me." },
      { number: "2", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make thyself any graven image, or any likeness..." },
      { number: "3", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not idly utter the name of Jehovah thy God..." },
      { number: "4", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day to hallow it..." },
      { number: "5", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "6", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "7", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "8", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "9", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      { number: "10", group: "COVETING", text: "(Exodus 20:17) Thou shalt not covet thy neighbour's house; thou shalt not covet thy neighbour's wife, nor his bondman, nor his handmaid, nor his ox, nor his ass, nor anything that is thy neighbour's." }
    ]
  },
  "Lutheran": {
    name: "Lutheran (Catechism Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am Jehovah thy God... Thou shalt have no other gods before me." }, // Often shortened
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make thyself any graven image..." }, // Often omitted
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not idly utter the name of Jehovah thy God..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day to hallow it." }, // Core text
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Thou shalt not covet thy neighbour's house;" }, // House first
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) thou shalt not covet thy neighbour's wife, nor his bondman, nor his handmaid, nor his ox, nor his ass, nor anything that is thy neighbour's." }
    ]
  }
  // Add other denominations if needed, applying the Darby text and NEW STRUCTURE.
};