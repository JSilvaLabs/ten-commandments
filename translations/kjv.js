// kjv.js - Texts from the King James Version (KJV)
// NEW STRUCTURE with group and number properties

const kjvTranslationData = {
  "Jewish": {
    name: "Jewish (Talmudic Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou shalt have no other gods before me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: Thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; And shewing mercy unto thousands of them that love me, and keep my commandments." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work: But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates: For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a) Thou shalt not covet thy neighbour's house," },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b) thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's." }
    ]
  },
  "Catholic": {
    name: "Catholic (Augustinian Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am the LORD thy God... Thou shalt have no other gods before me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make unto thee any graven image... nor serve them..." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of the LORD thy God in vain..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day, to keep it holy..." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Thou shalt not covet thy neighbour's wife," },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) Thou shalt not covet thy neighbour's house,... nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's." }
    ]
  },
  "Protestant": {
    name: "Protestant (Philonic/Reformed Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou shalt have no other gods before me." },
      { number: "2", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make unto thee any graven image, or any likeness..." },
      { number: "3", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of the LORD thy God in vain..." },
      { number: "4", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day, to keep it holy..." },
      { number: "5", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "6", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "7", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "8", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "9", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      { number: "10", group: "COVETING", text: "(Exodus 20:17) Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's." }
    ]
  },
  "Lutheran": {
    name: "Lutheran (Catechism Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am the LORD thy God... Thou shalt have no other gods before me." }, // Often shortened
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make unto thee any graven image..." }, // Often omitted
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of the LORD thy God in vain..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the sabbath day, to keep it holy." }, // Core text
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Thou shalt not covet thy neighbour's house," }, // House first
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's." }
    ]
  }
  // Add other denominations if needed, applying the KJV text and NEW STRUCTURE.
};