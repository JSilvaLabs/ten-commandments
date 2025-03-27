// vulgate.js - Texts from the Biblia Sacra Vulgata (Latin - Clementine edition)
// NEW STRUCTURE with group and number properties

const vulgateTranslationData = {
  "Jewish": {
    name: "Jewish (Talmudic Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) Ego sum Dominus Deus tuus, qui eduxi te de terra Ægypti, de domo servitutis."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Non habebis deos alienos coram me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Non facies tibi sculptile, neque omnem similitudinem quæ est in cælo desuper, et quæ in terra deorsum, nec eorum quæ sunt in aquis sub terra. Non adorabis ea, neque coles: ego sum Dominus Deus tuus fortis, zelotes, visitans iniquitatem patrum in filios, in tertiam et quartam generationem eorum qui oderunt me: et faciens misericordiam in millia his qui diligunt me, et custodiunt præcepta mea." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Non assumes nomen Domini Dei tui in vanum: nec enim habebit insontem Dominus eum qui assumpserit nomen Domini Dei sui frustra." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Memento ut diem sabbati sanctifices. Sex diebus operaberis, et facies omnia opera tua. Septimo autem die sabbatum Domini Dei tui est: non facies omne opus in eo, tu, et filius tuus, et filia tua, servus tuus, et ancilla tua, jumentum tuum, et advena qui est intra portas tuas. Sex enim diebus fecit Dominus cælum et terram, et mare, et omnia quæ in eis sunt, et requievit in die septimo: idcirco benedixit Dominus diei sabbati, et sanctificavit eum." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honora patrem tuum et matrem tuam, ut sis longævus super terram, quam Dominus Deus tuus dabit tibi." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Non occides." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Non mœchaberis." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Non furtum facies." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Non loqueris contra proximum tuum falsum testimonium." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a) Non concupisces domum proximi tui:" },
      { number: "10", group: "COVETING", text: "(Exodus 20:17b) nec desiderabis uxorem ejus, non servum, non ancillam, non bovem, non asinum, nec omnia quæ illius sunt." }
    ]
  },
  "Catholic": {
    name: "Catholic (Augustinian Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) Ego sum Dominus Deus tuus... Non habebis deos alienos coram me." },
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Non facies tibi sculptile... neque coles..." },
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Non assumes nomen Domini Dei tui in vanum..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Memento ut diem sabbati sanctifices..." },
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honora patrem tuum et matrem tuam..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Non occides." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Non mœchaberis." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Non furtum facies." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Non loqueris contra proximum tuum falsum testimonium." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) nec desiderabis uxorem proximi tui." }, // Wife first
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) Non concupisces domum proximi tui:... non servum, non ancillam, non bovem, non asinum, nec omnia quæ illius sunt." }
    ]
  },
  "Protestant": {
    name: "Protestant (Philonic/Reformed Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Exodus 20:2) Ego sum Dominus Deus tuus, qui eduxi te de terra Ægypti, de domo servitutis."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:3) Non habebis deos alienos coram me." },
      { number: "2", group: "IDOLATRY", text: "(Exodus 20:4-6) Non facies tibi sculptile, neque omnem similitudinem..." },
      { number: "3", group: "NAME_VAIN", text: "(Exodus 20:7) Non assumes nomen Domini Dei tui in vanum..." },
      { number: "4", group: "SABBATH", text: "(Exodus 20:8-11) Memento ut diem sabbati sanctifices..." },
      { number: "5", group: "PARENTS", text: "(Exodus 20:12) Honora patrem tuum et matrem tuam..." },
      { number: "6", group: "MURDER", text: "(Exodus 20:13) Non occides." },
      { number: "7", group: "ADULTERY", text: "(Exodus 20:14) Non mœchaberis." },
      { number: "8", group: "STEALING", text: "(Exodus 20:15) Non furtum facies." },
      { number: "9", group: "FALSE_WITNESS", text: "(Exodus 20:16) Non loqueris contra proximum tuum falsum testimonium." },
      { number: "10", group: "COVETING", text: "(Exodus 20:17) Non concupisces domum proximi tui: nec desiderabis uxorem ejus, non servum, non ancillam, non bovem, non asinum, nec omnia quæ illius sunt." } // Coveting kept as one
    ]
  },
  "Lutheran": {
    name: "Lutheran (Catechism Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Exodus 20:2-3) Ego sum Dominus Deus tuus... Non habebis deos alienos coram me." }, // Often shortened
      { number: "1", group: "IDOLATRY", text: "(Exodus 20:4-6) Non facies tibi sculptile..." }, // Often omitted
      { number: "2", group: "NAME_VAIN", text: "(Exodus 20:7) Non assumes nomen Domini Dei tui in vanum..." },
      { number: "3", group: "SABBATH", text: "(Exodus 20:8-11) Memento ut diem sabbati sanctifices." }, // Core text
      { number: "4", group: "PARENTS", text: "(Exodus 20:12) Honora patrem tuum et matrem tuam..." },
      { number: "5", group: "MURDER", text: "(Exodus 20:13) Non occides." },
      { number: "6", group: "ADULTERY", text: "(Exodus 20:14) Non mœchaberis." },
      { number: "7", group: "STEALING", text: "(Exodus 20:15) Non furtum facies." },
      { number: "8", group: "FALSE_WITNESS", text: "(Exodus 20:16) Non loqueris contra proximum tuum falsum testimonium." },
      { number: "9", group: "COVETING", text: "(Exodus 20:17a - partial) Non concupisces domum proximi tui:" }, // House first
      { number: "10", group: "COVETING", text: "(Exodus 20:17b - partial) nec desiderabis uxorem ejus, non servum, non ancillam, non bovem, non asinum, nec omnia quæ illius sunt." }
    ]
  }
  // Add other denominations if needed, applying the Vulgate text and NEW STRUCTURE.
};