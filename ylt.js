// ylt.js - Texts from Young's Literal Translation (1887/1898)

const yltTranslationData = {
    "Jewish": {
      name: "Jewish (Talmudic Listing)",
      preamble: "(Exodus 20:2) I [am] Jehovah thy God, who hath brought thee out of the land of Egypt, out of a house of servants.",
      commandments: [
        "1. (Exodus 20:3-6) Thou hast no other Gods before Me. Thou dost not make to thyself a graven image, or any likeness which [is] in the heavens above, or which [is] in the earth beneath, or which [is] in the waters under the earth. Thou dost not bow thyself to them, nor serve them: for I, Jehovah thy God, [am] a zealous God, charging iniquity of fathers on sons, on the third [generation], and on the fourth, of those hating Me, and doing kindness to thousands, of those loving Me and keeping My commands.",
        "2. (Exodus 20:7) Thou dost not take up the name of Jehovah thy God for a vain thing, for Jehovah acquitteth not him who taketh up His name for a vain thing.",
        "3. (Exodus 20:8-11) Remember the Sabbath-day to sanctify it; six days thou dost labour, and hast done all thy work, and the seventh day [is] a Sabbath to Jehovah thy God; thou dost not do any work, thou, and thy son, and thy daughter, thy man-servant, and thy handmaid, and thy cattle, and thy sojourner who is within thy gates, -- for six days Jehovah made the heavens and the earth, the sea, and all that [is] in them, and resteth in the seventh day; therefore Jehovah hath blessed the Sabbath-day, and doth sanctify it.",
        "4. (Exodus 20:12) Honour thy father and thy mother, so that thy days are prolonged on the ground which Jehovah thy God is giving to thee.",
        "5. (Exodus 20:13) Thou dost not murder.", // YLT uses "murder"
        "6. (Exodus 20:14) Thou dost not commit adultery.",
        "7. (Exodus 20:15) Thou dost not steal.",
        "8. (Exodus 20:16) Thou dost not answer against thy neighbour a false testimony.",
        "9. (Exodus 20:17a) Thou dost not desire the house of thy neighbour;", // Split for Talmudic
        "10. (Exodus 20:17b) thou dost not desire the wife of thy neighbour, or his man-servant, or his handmaid, or his ox, or his ass, or anything which [is] thy neighbour's."
      ]
    },
    "Catholic": {
      name: "Catholic (Augustinian Listing)",
      preamble: null,
      commandments: [
        "1. (Exodus 20:2-6) I [am] Jehovah thy God... Thou hast no other Gods before Me. Thou dost not make to thyself a graven image... [full text as in Jewish Cmd 1]",
        "2. (Exodus 20:7) Thou dost not take up the name of Jehovah thy God for a vain thing...",
        "3. (Exodus 20:8-11) Remember the Sabbath-day to sanctify it...",
        "4. (Exodus 20:12) Honour thy father and thy mother...",
        "5. (Exodus 20:13) Thou dost not murder.",
        "6. (Exodus 20:14) Thou dost not commit adultery.",
        "7. (Exodus 20:15) Thou dost not steal.",
        "8. (Exodus 20:16) Thou dost not answer against thy neighbour a false testimony.",
        "9. (Exodus 20:17a - partial) Thou dost not desire the wife of thy neighbour,", // Split for Augustinian (Wife first)
        "10. (Exodus 20:17b - partial) Thou dost not desire the house of thy neighbour; ... or his man-servant, or his handmaid, or his ox, or his ass, or anything which [is] thy neighbour's."
      ]
    },
    "Protestant": {
      name: "Protestant (Philonic/Reformed Listing)",
      preamble: "(Exodus 20:2) I [am] Jehovah thy God, who hath brought thee out of the land of Egypt, out of a house of servants.",
      commandments: [
        "1. (Exodus 20:3) Thou hast no other Gods before Me.",
        "2. (Exodus 20:4-6) Thou dost not make to thyself a graven image, or any likeness... [full text as in Jewish Cmd 1, part 2]",
        "3. (Exodus 20:7) Thou dost not take up the name of Jehovah thy God for a vain thing...",
        "4. (Exodus 20:8-11) Remember the Sabbath-day to sanctify it...",
        "5. (Exodus 20:12) Honour thy father and thy mother...",
        "6. (Exodus 20:13) Thou dost not murder.",
        "7. (Exodus 20:14) Thou dost not commit adultery.",
        "8. (Exodus 20:15) Thou dost not steal.",
        "9. (Exodus 20:16) Thou dost not answer against thy neighbour a false testimony.",
        "10. (Exodus 20:17) Thou dost not desire the house of thy neighbour; thou dost not desire the wife of thy neighbour, or his man-servant, or his handmaid, or his ox, or his ass, or anything which [is] thy neighbour's." // Coveting kept as one
      ]
    },
    "Lutheran": {
      name: "Lutheran (Catechism Listing)",
      preamble: null,
      commandments: [
        // Using base YLT text corresponding to the number. Catechisms might shorten.
        "1. (Exodus 20:3) Thou hast no other Gods before Me.", // Core text
        "2. (Exodus 20:7) Thou dost not take up the name of Jehovah thy God for a vain thing...",
        "3. (Exodus 20:8) Remember the Sabbath-day to sanctify it.", // Core text
        "4. (Exodus 20:12) Honour thy father and thy mother...",
        "5. (Exodus 20:13) Thou dost not murder.",
        "6. (Exodus 20:14) Thou dost not commit adultery.",
        "7. (Exodus 20:15) Thou dost not steal.",
        "8. (Exodus 20:16) Thou dost not answer against thy neighbour a false testimony.",
        "9. (Exodus 20:17a - partial) Thou dost not desire the house of thy neighbour;", // Split for Lutheran (House first)
        "10. (Exodus 20:17b - partial) thou dost not desire the wife of thy neighbour, or his man-servant, or his handmaid, or his ox, or his ass, or anything which [is] thy neighbour's."
      ]
    }
    // Add other denominations if needed, applying the YLT text to their structure.
  };