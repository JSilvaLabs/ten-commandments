// dra.js - Texts from the Douay-Rheims 1899 American Edition (DRA)

const draTranslationData = {
    "Jewish": {
      name: "Jewish (Talmudic Listing)",
      preamble: "(Exodus 20:2) I am the Lord thy God, who brought thee out of the land of Egypt, out of the house of bondage.",
      commandments: [
        "1. (Exodus 20:3-6) Thou shalt not have strange gods before me. Thou shalt not make to thyself a graven thing, nor the likeness of any thing that is in heaven above, or in the earth beneath, nor of those things that are in the waters under the earth. Thou shalt not adore them, nor serve them: I am the Lord thy God, mighty, jealous, visiting the iniquity of the fathers upon the children, unto the third and fourth generation of them that hate me: And showing mercy unto thousands to them that love me, and keep my commandments.", // Includes idol prohibition
        "2. (Exodus 20:7) Thou shalt not take the name of the Lord thy God in vain: for the Lord will not hold him guiltless that shall take the name of the Lord his God in vain.",
        "3. (Exodus 20:8-11) Remember that thou keep holy the sabbath day. Six days shalt thou labour, and shalt do all thy works. But on the seventh day is the sabbath of the Lord thy God: thou shalt do no work on it, thou nor thy son, nor thy daughter, nor thy manservant, nor thy maidservant, nor thy beast, nor the stranger that is within thy gates. For in six days the Lord made heaven and earth, and the sea, and all things that are in them, and rested on the seventh day: therefore the Lord blessed the seventh day, and sanctified it.",
        "4. (Exodus 20:12) Honour thy father and thy mother, that thou mayest be longlived upon the land which the Lord thy God will give thee.",
        "5. (Exodus 20:13) Thou shalt not kill.",
        "6. (Exodus 20:14) Thou shalt not commit adultery.",
        "7. (Exodus 20:15) Thou shalt not steal.",
        "8. (Exodus 20:16) Thou shalt not bear false witness against thy neighbour.",
        "9. (Exodus 20:17a) Thou shalt not covet thy neighbour's house:", // Split for Talmudic
        "10. (Exodus 20:17b) neither shalt thou desire his wife, nor his servant, nor his handmaid, nor his ox, nor his ass, nor any thing that is his."
      ]
    },
    "Catholic": {
      name: "Catholic (Augustinian Listing)", // DRA naturally follows this structure
      preamble: null,
      commandments: [
        "1. (Exodus 20:2-6) I am the Lord thy God, who brought thee out of the land of Egypt, out of the house of bondage. Thou shalt not have strange gods before me. Thou shalt not make to thyself a graven thing... [full text as in Jewish Cmd 1]", // Combines God's identity, no other gods, and idol prohibition
        "2. (Exodus 20:7) Thou shalt not take the name of the Lord thy God in vain...",
        "3. (Exodus 20:8-11) Remember that thou keep holy the sabbath day...",
        "4. (Exodus 20:12) Honour thy father and thy mother...",
        "5. (Exodus 20:13) Thou shalt not kill.",
        "6. (Exodus 20:14) Thou shalt not commit adultery.",
        "7. (Exodus 20:15) Thou shalt not steal.",
        "8. (Exodus 20:16) Thou shalt not bear false witness against thy neighbour.",
        "9. (Exodus 20:17a - partial) Thou shalt not covet thy neighbour's wife:", // DRA text: "neither shalt thou desire his wife" - adapted to fit the standard Catholic split phrasing convention.
        "10. (Exodus 20:17b - partial) Thou shalt not covet thy neighbour's house: ... nor his servant, nor his handmaid, nor his ox, nor his ass, nor any thing that is his." // DRA text: "Thou shalt not covet thy neighbour's house:..."
      ]
    },
    "Protestant": {
      name: "Protestant (Philonic/Reformed Listing)",
      preamble: "(Exodus 20:2) I am the Lord thy God, who brought thee out of the land of Egypt, out of the house of bondage.",
      commandments: [
        "1. (Exodus 20:3) Thou shalt not have strange gods before me.",
        "2. (Exodus 20:4-6) Thou shalt not make to thyself a graven thing, nor the likeness... [full text as in Jewish Cmd 1, part 2]", // Idol prohibition separate
        "3. (Exodus 20:7) Thou shalt not take the name of the Lord thy God in vain...",
        "4. (Exodus 20:8-11) Remember that thou keep holy the sabbath day...",
        "5. (Exodus 20:12) Honour thy father and thy mother...",
        "6. (Exodus 20:13) Thou shalt not kill.",
        "7. (Exodus 20:14) Thou shalt not commit adultery.",
        "8. (Exodus 20:15) Thou shalt not steal.",
        "9. (Exodus 20:16) Thou shalt not bear false witness against thy neighbour.",
        "10. (Exodus 20:17) Thou shalt not covet thy neighbour's house: neither shalt thou desire his wife, nor his servant, nor his handmaid, nor his ox, nor his ass, nor any thing that is his." // Coveting kept as one
      ]
    },
    "Lutheran": {
      name: "Lutheran (Catechism Listing)",
      preamble: null,
      commandments: [
        // Using base DRA text corresponding to the number. Catechisms might shorten.
        "1. (Exodus 20:3) Thou shalt not have strange gods before me.", // Core text
        "2. (Exodus 20:7) Thou shalt not take the name of the Lord thy God in vain...",
        "3. (Exodus 20:8) Remember that thou keep holy the sabbath day.", // Core text
        "4. (Exodus 20:12) Honour thy father and thy mother...",
        "5. (Exodus 20:13) Thou shalt not kill.",
        "6. (Exodus 20:14) Thou shalt not commit adultery.",
        "7. (Exodus 20:15) Thou shalt not steal.",
        "8. (Exodus 20:16) Thou shalt not bear false witness against thy neighbour.",
        "9. (Exodus 20:17a - partial) Thou shalt not covet thy neighbour's house:", // Split for Lutheran (House first)
        "10. (Exodus 20:17b - partial) neither shalt thou desire his wife, nor his servant, nor his handmaid, nor his ox, nor his ass, nor any thing that is his."
      ]
    }
    // Add other denominations if needed, applying the DRA text to their structure.
  };