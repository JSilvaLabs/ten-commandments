// asv.js - Texts from the American Standard Version (1901)

const asvTranslationData = {
    "Jewish": {
      name: "Jewish (Talmudic Listing)",
      preamble: "(Exodus 20:2) I am Jehovah thy God, who brought thee out of the land of Egypt, out of the house of bondage.",
      commandments: [
        "1. (Exodus 20:3-6) Thou shalt have no other gods before me. Thou shalt not make unto thee a graven image, nor any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: thou shalt not bow down thyself unto them, nor serve them; for I Jehovah thy God am a jealous God, visiting the iniquity of the fathers upon the children, upon the third and upon the fourth generation of them that hate me, and showing lovingkindness unto thousands of them that love me and keep my commandments.",
        "2. (Exodus 20:7) Thou shalt not take the name of Jehovah thy God in vain; for Jehovah will not hold him guiltless that taketh his name in vain.",
        "3. (Exodus 20:8-11) Remember the sabbath day, to keep it holy. Six days shalt thou labor, and do all thy work; but the seventh day is a sabbath unto Jehovah thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy man-servant, nor thy maid-servant, nor thy cattle, nor thy stranger that is within thy gates: for in six days Jehovah made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore Jehovah blessed the sabbath day, and hallowed it.",
        "4. (Exodus 20:12) Honor thy father and thy mother, that thy days may be long in the land which Jehovah thy God giveth thee.",
        "5. (Exodus 20:13) Thou shalt not kill.", // Often interpreted as "murder"
        "6. (Exodus 20:14) Thou shalt not commit adultery.",
        "7. (Exodus 20:15) Thou shalt not steal.",
        "8. (Exodus 20:16) Thou shalt not bear false witness against thy neighbor.",
        "9. (Exodus 20:17a) Thou shalt not covet thy neighbor's house,", // Split based on Talmudic tradition
        "10. (Exodus 20:17b) thou shalt not covet thy neighbor's wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbor's."
      ]
    },
    "Catholic": {
      name: "Catholic (Augustinian Listing)",
      preamble: null,
      commandments: [
        "1. (Exodus 20:2-6) I am Jehovah thy God, who brought thee out of the land of Egypt, out of the house of bondage. Thou shalt have no other gods before me. Thou shalt not make unto thee a graven image, nor any likeness... [full text as in Jewish Cmd 1]", // Combines God's identity, no other gods, and idol prohibition
        "2. (Exodus 20:7) Thou shalt not take the name of Jehovah thy God in vain...",
        "3. (Exodus 20:8-11) Remember the sabbath day, to keep it holy...",
        "4. (Exodus 20:12) Honor thy father and thy mother...",
        "5. (Exodus 20:13) Thou shalt not kill.",
        "6. (Exodus 20:14) Thou shalt not commit adultery.",
        "7. (Exodus 20:15) Thou shalt not steal.",
        "8. (Exodus 20:16) Thou shalt not bear false witness against thy neighbor.",
        "9. (Exodus 20:17a - partial) Thou shalt not covet thy neighbor's wife,", // Split based on Augustinian tradition
        "10. (Exodus 20:17b - partial) thou shalt not covet thy neighbor's house,... nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbor's."
      ]
    },
    "Protestant": {
      name: "Protestant (Philonic/Reformed Listing)",
      preamble: "(Exodus 20:2) I am Jehovah thy God, who brought thee out of the land of Egypt, out of the house of bondage.",
      commandments: [
        "1. (Exodus 20:3) Thou shalt have no other gods before me.",
        "2. (Exodus 20:4-6) Thou shalt not make unto thee a graven image, nor any likeness... [full text as in Jewish Cmd 1, part 2]", // Idol prohibition separate
        "3. (Exodus 20:7) Thou shalt not take the name of Jehovah thy God in vain...",
        "4. (Exodus 20:8-11) Remember the sabbath day, to keep it holy...",
        "5. (Exodus 20:12) Honor thy father and thy mother...",
        "6. (Exodus 20:13) Thou shalt not kill.",
        "7. (Exodus 20:14) Thou shalt not commit adultery.",
        "8. (Exodus 20:15) Thou shalt not steal.",
        "9. (Exodus 20:16) Thou shalt not bear false witness against thy neighbor.",
        "10. (Exodus 20:17) Thou shalt not covet thy neighbor's house, thou shalt not covet thy neighbor's wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbor's." // Coveting kept as one commandment
      ]
    },
    "Lutheran": {
      name: "Lutheran (Catechism Listing)",
      preamble: null, // Similar structure to Catholic but different split for 9/10
      commandments: [
        // Note: Catechisms often use shortened forms, but here we use the base ASV text corresponding to the number.
        "1. (Exodus 20:3) Thou shalt have no other gods before me.", // Core text, though Catechism often shortens to "Thou shalt have no other gods."
        "2. (Exodus 20:7) Thou shalt not take the name of Jehovah thy God in vain...",
        "3. (Exodus 20:8) Remember the sabbath day, to keep it holy.", // Core text
        "4. (Exodus 20:12) Honor thy father and thy mother...",
        "5. (Exodus 20:13) Thou shalt not kill.",
        "6. (Exodus 20:14) Thou shalt not commit adultery.",
        "7. (Exodus 20:15) Thou shalt not steal.",
        "8. (Exodus 20:16) Thou shalt not bear false witness against thy neighbor.",
        "9. (Exodus 20:17a - partial) Thou shalt not covet thy neighbor's house,", // Split based on Lutheran tradition (House first)
        "10. (Exodus 20:17b - partial) thou shalt not covet thy neighbor's wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor anything that is thy neighbor's."
      ]
    }
    // Add other denominations if needed, applying the ASV text to their specific structure.
  };
  
  // Note: Minor variations in punctuation or exact verse citations might exist depending on the specific ASV edition referenced.
  // The core text should be accurate to the 1901 ASV.