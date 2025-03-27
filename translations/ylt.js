// ylt.js - Texts from Young's Literal Translation (1887/1898)
// NEW STRUCTURE with group and number properties

const yltTranslationData = {
  "Jewish": {
    name: "Jewish (Talmudic Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I [am] Jehovah thy God, who hath brought thee out of the land of Egypt, out of a house of servants."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou hast no other Gods before Me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou dost not make to thyself a graven image, or any likeness which [is] in the heavens above, or which [is] in the earth beneath, or which [is] in the waters under the earth. Thou dost not bow thyself to them, nor serve them: for I, Jehovah thy God, [am] a zealous God, charging iniquity of fathers on sons, on the third [generation], and on the fourth, of those hating Me, and doing kindness to thousands, of those loving Me and keeping My commands." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou dost not take up the name of Jehovah thy God for a vain thing, for Jehovah acquitteth not him who taketh up His name for a vain thing." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the Sabbath-day to sanctify it; six days thou dost labour, and hast done all thy work, and the seventh day [is] a Sabbath to Jehovah thy God; thou dost not do any work, thou, and thy son, and thy daughter, thy man-servant, and thy handmaid, and thy cattle, and thy sojourner who is within thy gates, -- for six days Jehovah made the heavens and the earth, the sea, and all that [is] in them, and resteth in the seventh day; therefore Jehovah hath blessed the Sabbath-day, and doth sanctify it." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother, so that thy days are prolonged on the ground which Jehovah thy God is giving to thee." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou dost not murder." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou dost not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou dost not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou dost not answer against thy neighbour a false testimony." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a) Thou dost not desire the house of thy neighbour;" },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b) thou dost not desire the wife of thy neighbour, or his man-servant, or his handmaid, or his ox, or his ass, or anything which [is] thy neighbour's." }
    ]
  },
  "Catholic": {
    name: "Catholic (Augustinian Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I [am] Jehovah thy God... Thou hast no other Gods before Me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou dost not make to thyself a graven image... nor serve them..." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou dost not take up the name of Jehovah thy God for a vain thing..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the Sabbath-day to sanctify it..." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou dost not murder." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou dost not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou dost not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou dost not answer against thy neighbour a false testimony." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Thou dost not desire the wife of thy neighbour," }, // Wife first
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) Thou dost not desire the house of thy neighbour;... or his man-servant, or his handmaid, or his ox, or his ass, or anything which [is] thy neighbour's." }
    ]
  },
  "Protestant": {
    name: "Protestant (Philonic/Reformed Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I [am] Jehovah thy God, who hath brought thee out of the land of Egypt, out of a house of servants."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou hast no other Gods before Me." },
      { number: "2", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou dost not make to thyself a graven image, or any likeness..." },
      { number: "3", group: "NAME_VAIN", text: "(Exodus 20:7) Thou dost not take up the name of Jehovah thy God for a vain thing..." },
      { number: "4", group: "SABBATH", text: "(Exodus 20:8-11) Remember the Sabbath-day to sanctify it..." },
      { number: "5", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "6", group: "MURDER", text: "(Exodus 20:13) Thou dost not murder." },
      { number: "7", group: "ADULTERY", text: "(Exodus 20:14) Thou dost not commit adultery." },
      { number: "8", group: "STEALING", text: "(Exodus 20:15) Thou dost not steal." },
      { number: "9", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou dost not answer against thy neighbour a false testimony." },
      { number: "10", group: "COVETING", text: "(Exodus 20:17) Thou dost not desire the house of thy neighbour; thou dost not desire the wife of thy neighbour, or his man-servant, or his handmaid, or his ox, or his ass, or anything which [is] thy neighbour's." } // Coveting kept as one
    ]
  },
  "Lutheran": {
    name: "Lutheran (Catechism Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I [am] Jehovah thy God... Thou hast no other Gods before Me." }, // Often shortened
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou dost not make to thyself a graven image..." }, // Often omitted
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou dost not take up the name of Jehovah thy God for a vain thing..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the Sabbath-day to sanctify it." }, // Core text
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou dost not murder." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou dost not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou dost not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou dost not answer against thy neighbour a false testimony." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Thou dost not desire the house of thy neighbour;" }, // House first
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) thou dost not desire the wife of thy neighbour, or his man-servant, or his handmaid, or his ox, or his ass, or anything which [is] thy neighbour's." }
    ]
  }
  // Add other denominations if needed, applying the YLT text and NEW STRUCTURE.
};