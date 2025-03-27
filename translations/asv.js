// asv.js - Texts from the American Standard Version (1901)
// NEW STRUCTURE with group and number properties

const asvTranslationData = {
  "Jewish": {
    name: "Jewish (Talmudic Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I am Jehovah thy God, who brought thee out of the land of Egypt, out of the house of bondage."
      // Note: In Talmudic numbering, this is often considered the 1st "Word", but we group it as PREAMBLE for conceptual alignment.
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou shalt have no other gods before me." },
      // Combines Idolatry text for conceptual grouping, though part of #1 in Talmudic numbering.
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make unto thee a graven image, nor any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: thou shalt not bow down thyself unto them, nor serve them; for I Jehovah thy God am a jealous God, visiting the iniquity of the fathers upon the children, upon the third and upon the fourth generation of them that hate me, and showing lovingkindness unto thousands of them that love me and keep my commandments." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of Jehovah thy God in vain; for Jehovah will not hold him guiltless that taketh his name in vain." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day, to keep it holy. Six days shalt thou labor, and do all thy work; but the seventh day is a sabbath unto Jehovah thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy man-servant, nor thy maid-servant, nor thy cattle, nor thy stranger that is within thy gates: for in six days Jehovah made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore Jehovah blessed the sabbath day, and hallowed it." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honor thy father and thy mother, that thy days may be long in the land which Jehovah thy God giveth thee." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbor." },
      // Talmudic numbering splits coveting of house vs wife/others.
      { number: "9", group: "COVETING", text: "(Exodus 20:17a) Thou shalt not covet thy neighbor's house," },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b) thou shalt not covet thy neighbor's wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbor's." }
    ]
  },
  "Catholic": {
    name: "Catholic (Augustinian Listing)",
    preamble: null, // No preamble object
    commandments: [
      // Catholic Commandment 1 combines Identity/Worship and Idolatry
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am Jehovah thy God, who brought thee out of the land of Egypt... Thou shalt have no other gods before me." }, // Includes Ex 20:2 text conceptually here
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make unto thee a graven image... nor serve them..." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of Jehovah thy God in vain..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day, to keep it holy..." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honor thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbor." },
      // Catholic splits coveting into Wife (#9) and Goods (#10)
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Thou shalt not covet thy neighbor's wife," },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) thou shalt not covet thy neighbor's house,... nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbor's." }
    ]
  },
  "Protestant": {
    name: "Protestant (Philonic/Reformed Listing)",
    preamble: {
      group: "PREAMBLE", // Has preamble
      text: "(Exodus 20:2) I am Jehovah thy God, who brought thee out of the land of Egypt, out of the house of bondage."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou shalt have no other gods before me." },
      { number: "2", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make unto thee a graven image, nor any likeness..." }, // Idolatry is #2
      { number: "3", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of Jehovah thy God in vain..." },
      { number: "4", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day, to keep it holy..." },
      { number: "5", group: "PARENTS", text: "(Exodus 20:12) Honor thy father and thy mother..." },
      { number: "6", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "7", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "8", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "9", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbor." },
      // Protestant keeps coveting as single #10
      { number: "10", group: "COVETING", text: "(Exodus 20:17) Thou shalt not covet thy neighbor's house, thou shalt not covet thy neighbor's wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbor's." }
    ]
  },
  "Lutheran": {
    name: "Lutheran (Catechism Listing)",
    preamble: null, // No preamble object
    commandments: [
       // Lutheran Commandment 1 combines Identity/Worship and Idolatry (like Catholic)
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am Jehovah thy God... Thou shalt have no other gods before me." }, // Catechism often shortens this, but base includes Ex 20:2
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make unto thee a graven image... nor serve them..." }, // Often omitted in short Catechism form
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of Jehovah thy God in vain..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day, to keep it holy." }, // Catechism often focuses on interpretation "hallow the holy day"
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honor thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbor." },
      // Lutheran splits coveting into House (#9) and Wife/Others (#10)
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Thou shalt not covet thy neighbor's house," },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) thou shalt not covet thy neighbor's wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbor's." }
    ]
  }
  // Add other denominations if needed, applying the ASV text and NEW STRUCTURE.
};