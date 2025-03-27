// dra.js - Texts from the Douay-Rheims 1899 American Edition (DRA)
// NEW STRUCTURE with group and number properties

const draTranslationData = {
  "Jewish": {
    name: "Jewish (Talmudic Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I am the Lord thy God, who brought thee out of the land of Egypt, out of the house of bondage."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou shalt not have strange gods before me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make to thyself a graven thing, nor the likeness of any thing that is in heaven above, or in the earth beneath, nor of those things that are in the waters under the earth. Thou shalt not adore them, nor serve them: I am the Lord thy God, mighty, jealous, visiting the iniquity of the fathers upon the children, unto the third and fourth generation of them that hate me: And showing mercy unto thousands to them that love me, and keep my commandments." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of the Lord thy God in vain: for the Lord will not hold him guiltless that shall take the name of the Lord his God in vain." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember that thou keep holy the sabbath day. Six days shalt thou labour, and shalt do all thy works. But on the seventh day is the sabbath of the Lord thy God: thou shalt do no work on it, thou nor thy son, nor thy daughter, nor thy manservant, nor thy maidservant, nor thy beast, nor the stranger that is within thy gates. For in six days the Lord made heaven and earth, and the sea, and all things that are in them, and rested on the seventh day: therefore the Lord blessed the seventh day, and sanctified it." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother, that thou mayest be longlived upon the land which the Lord thy God will give thee." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a) Thou shalt not covet thy neighbour's house:" },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b) neither shalt thou desire his wife, nor his servant, nor his handmaid, nor his ox, nor his ass, nor any thing that is his." }
    ]
  },
  "Catholic": {
    name: "Catholic (Augustinian Listing)",
    preamble: null, // No preamble object
    commandments: [
      // Catholic Commandment 1 combines Identity/Worship and Idolatry
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am the Lord thy God, who brought thee out of the land of Egypt... Thou shalt not have strange gods before me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make to thyself a graven thing... nor serve them..." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of the Lord thy God in vain..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember that thou keep holy the sabbath day..." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      // Catholic splits coveting into Wife (#9) and Goods (#10)
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) neither shalt thou desire his wife:" }, // Using DRA phrasing for wife part
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) Thou shalt not covet thy neighbour's house:... nor his servant, nor his handmaid, nor his ox, nor his ass, nor any thing that is his." }
    ]
  },
  "Protestant": {
    name: "Protestant (Philonic/Reformed Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I am the Lord thy God, who brought thee out of the land of Egypt, out of the house of bondage."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Thou shalt not have strange gods before me." },
      { number: "2", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make to thyself a graven thing, nor the likeness..." }, // Idolatry is #2
      { number: "3", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of the Lord thy God in vain..." },
      { number: "4", group: "SABBATH", text: "(Exodus 20:8-11) Remember that thou keep holy the sabbath day..." },
      { number: "5", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "6", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "7", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "8", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "9", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      // Protestant keeps coveting as single #10
      { number: "10", group: "COVETING", text: "(Exodus 20:17) Thou shalt not covet thy neighbour's house: neither shalt thou desire his wife, nor his servant, nor his handmaid, nor his ox, nor his ass, nor any thing that is his." }
    ]
  },
  "Lutheran": {
    name: "Lutheran (Catechism Listing)",
    preamble: null, // No preamble object
    commandments: [
      // Lutheran Commandment 1 combines Identity/Worship and Idolatry
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am the Lord thy God... Thou shalt not have strange gods before me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Thou shalt not make to thyself a graven thing... nor serve them..." }, // Often omitted in short form
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Thou shalt not take the name of the Lord thy God in vain..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember that thou keep holy the sabbath day." }, // Core text
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honour thy father and thy mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Thou shalt not kill." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Thou shalt not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Thou shalt not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Thou shalt not bear false witness against thy neighbour." },
      // Lutheran splits coveting into House (#9) and Wife/Others (#10)
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Thou shalt not covet thy neighbour's house:" },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) neither shalt thou desire his wife, nor his servant, nor his handmaid, nor his ox, nor his ass, nor any thing that is his." }
    ]
  }
  // Add other denominations if needed, applying the DRA text and NEW STRUCTURE.
};