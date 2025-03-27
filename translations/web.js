// web.js - Texts from the World English Bible (WEB)
// NEW STRUCTURE with group and number properties

const webTranslationData = {
  "Jewish": {
    name: "Jewish (Talmudic Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) I am Yahweh your God, who brought you out of the land of Egypt, out of the house of bondage."
      // Talmudic #1 Word
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) You shall have no other gods before me." }, // Talmudic #2 Word (part 1)
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) You shall not make for yourselves an idol, nor any image of anything that is in the heavens above, or that is in the earth beneath, or that is in the water under the earth: you shall not bow yourself down to them, nor serve them, for I, Yahweh your God, am a jealous God, visiting the iniquity of the fathers on the children, on the third and on the fourth generation of those who hate me, and showing loving kindness to thousands of those who love me and keep my commandments." }, // Talmudic #2 Word (part 2)
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) You shall not take the name of Yahweh your God in vain; for Yahweh will not hold him guiltless who takes his name in vain." }, // Talmudic #3
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the Sabbath day, to keep it holy. You shall labor six days, and do all your work, but the seventh day is a Sabbath to Yahweh your God. You shall not do any work in it, you, nor your son, nor your daughter, your male servant, nor your female servant, nor your livestock, nor your stranger who is within your gates; for in six days Yahweh made heaven and earth, the sea, and all that is in them, and rested the seventh day; therefore Yahweh blessed the Sabbath day, and made it holy." }, // Talmudic #4
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honor your father and your mother, that your days may be long in the land which Yahweh your God gives you." }, // Talmudic #5
      { number: "5", group: "MURDER", text: "(Exodus 20:13) You shall not murder." }, // Talmudic #6
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) You shall not commit adultery." }, // Talmudic #7
      { number: "7", group: "STEALING", text: "(Exodus 20:15) You shall not steal." }, // Talmudic #8
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) You shall not give false testimony against your neighbor." }, // Talmudic #9
      { number: "9", group: "COVETING", text: "(Exodus 20:17a) You shall not covet your neighbor’s house." }, // Talmudic #10 (part 1)
      { number: "10", group: "COVETING", text: "(Exodus 20:17b) You shall not covet your neighbor’s wife, nor his male servant, nor his female servant, nor his ox, nor his donkey, nor anything that is your neighbor’s." } // Talmudic #10 (part 2)
    ]
  },
  "Catholic": {
    name: "Catholic (Augustinian Listing)",
    preamble: null, // No preamble object
    commandments: [
      // Catholic Commandment 1 combines Identity/Worship and Idolatry
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am the LORD your God, who brought you out of the land of Egypt... You shall have no other gods before me." }, // Using LORD for Catholic context
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) You shall not make for yourself an idol... You shall not bow down to them or worship them..." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) You shall not take the name of the LORD your God in vain..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Remember the Sabbath day, and keep it holy..." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honor your father and your mother..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) You shall not murder." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) You shall not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) You shall not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) You shall not bear false witness against your neighbor." },
      // Catholic splits coveting into Wife (#9) and Goods (#10)
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) You shall not covet your neighbor’s wife," },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) You shall not covet your neighbor’s house,... or anything that belongs to your neighbor." }
    ]
  },
  "Protestant": {
    name: "Protestant (Philonic/Reformed Listing)",
    preamble: {
      group: "PREAMBLE", // Has preamble
      text: "(Exodus 20:2) I am Yahweh your God, who brought you out of the land of Egypt, out of the house of bondage."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) You shall have no other gods before me." },
      { number: "2", group: "IDOLATRY", text: "(Exodus 20:4-6) You shall not make for yourselves an idol, nor any image of anything that is in the heavens above, or that is in the earth beneath, or that is in the water under the earth: you shall not bow yourself down to them, nor serve them, for I, Yahweh your God, am a jealous God..." }, // Idolatry is #2
      { number: "3", group: "NAME_VAIN", text: "(Exodus 20:7) You shall not take the name of Yahweh your God in vain; for Yahweh will not hold him guiltless who takes his name in vain." },
      { number: "4", group: "SABBATH", text: "(Exodus 20:8-11) Remember the Sabbath day, to keep it holy. You shall labor six days... and rested the seventh day..." },
      { number: "5", group: "PARENTS", text: "(Exodus 20:12) Honor your father and your mother, that your days may be long in the land which Yahweh your God gives you." },
      { number: "6", group: "MURDER", text: "(Exodus 20:13) You shall not murder." },
      { number: "7", group: "ADULTERY", text: "(Exodus 20:14) You shall not commit adultery." },
      { number: "8", group: "STEALING", text: "(Exodus 20:15) You shall not steal." },
      { number: "9", group: "FALSE_WITNESS", text: "(Exodus 20:16) You shall not give false testimony against your neighbor." },
      // Protestant keeps coveting as single #10
      { number: "10", group: "COVETING", text: "(Exodus 20:17) You shall not covet your neighbor’s house. You shall not covet your neighbor’s wife, nor his male servant, nor his female servant, nor his ox, nor his donkey, nor anything that is your neighbor’s." }
    ]
  },
  "Lutheran": {
    name: "Lutheran (Catechism Listing)",
    preamble: null, // No preamble object
    commandments: [
       // Lutheran Commandment 1 combines Identity/Worship and Idolatry
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) I am the LORD your God... You shall have no other gods." }, // WEB phrasing, often shortened
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) You shall not make for yourselves an idol..." }, // Often omitted in short form
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) You shall not misuse the name of the Lord your God." }, // WEB phrasing reflecting Catechism
      { number: "3", group: "SABBATH", text: "(Exodus 20:8) Remember the Sabbath day by keeping it holy." }, // Core text, interpretation emphasized
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honor your father and your mother." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) You shall not murder." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) You shall not commit adultery." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) You shall not steal." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) You shall not give false testimony against your neighbor." },
      // Lutheran splits coveting into House (#9) and Wife/Others (#10)
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) You shall not covet your neighbor’s house." },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) You shall not covet your neighbor’s wife, or his manservant or maidservant, his ox or donkey, or anything that belongs to your neighbor." } // Using WEB phrasing of KJV structure
    ]
  }
  // Add other denominations if needed, applying the WEB text and NEW STRUCTURE.
};