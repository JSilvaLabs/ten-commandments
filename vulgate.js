// vulgate.js - Texts from the Biblia Sacra Vulgata (Latin - Clementine edition)

const vulgateTranslationData = {
    "Jewish": {
      name: "Jewish (Talmudic Listing)",
      preamble: "(Exodus 20:2) Ego sum Dominus Deus tuus, qui eduxi te de terra Ægypti, de domo servitutis.",
      commandments: [
        "1. (Exodus 20:3-6) Non habebis deos alienos coram me. Non facies tibi sculptile, neque omnem similitudinem quæ est in cælo desuper, et quæ in terra deorsum, nec eorum quæ sunt in aquis sub terra. Non adorabis ea, neque coles: ego sum Dominus Deus tuus fortis, zelotes, visitans iniquitatem patrum in filios, in tertiam et quartam generationem eorum qui oderunt me: et faciens misericordiam in millia his qui diligunt me, et custodiunt præcepta mea.",
        "2. (Exodus 20:7) Non assumes nomen Domini Dei tui in vanum: nec enim habebit insontem Dominus eum qui assumpserit nomen Domini Dei sui frustra.",
        "3. (Exodus 20:8-11) Memento ut diem sabbati sanctifices. Sex diebus operaberis, et facies omnia opera tua. Septimo autem die sabbatum Domini Dei tui est: non facies omne opus in eo, tu, et filius tuus, et filia tua, servus tuus, et ancilla tua, jumentum tuum, et advena qui est intra portas tuas. Sex enim diebus fecit Dominus cælum et terram, et mare, et omnia quæ in eis sunt, et requievit in die septimo: idcirco benedixit Dominus diei sabbati, et sanctificavit eum.",
        "4. (Exodus 20:12) Honora patrem tuum et matrem tuam, ut sis longævus super terram, quam Dominus Deus tuus dabit tibi.",
        "5. (Exodus 20:13) Non occides.",
        "6. (Exodus 20:14) Non mœchaberis.",
        "7. (Exodus 20:15) Non furtum facies.", // Literally "You shall not make theft"
        "8. (Exodus 20:16) Non loqueris contra proximum tuum falsum testimonium.",
        "9. (Exodus 20:17a) Non concupisces domum proximi tui:", // Split for Talmudic
        "10. (Exodus 20:17b) nec desiderabis uxorem ejus, non servum, non ancillam, non bovem, non asinum, nec omnia quæ illius sunt."
      ]
    },
    "Catholic": {
      name: "Catholic (Augustinian Listing)", // Vulgate naturally aligns with this
      preamble: null,
      commandments: [
        "1. (Exodus 20:2-6) Ego sum Dominus Deus tuus... Non habebis deos alienos coram me. Non facies tibi sculptile... [textus completus sicut in Mandato Judaico 1]",
        "2. (Exodus 20:7) Non assumes nomen Domini Dei tui in vanum...",
        "3. (Exodus 20:8-11) Memento ut diem sabbati sanctifices...",
        "4. (Exodus 20:12) Honora patrem tuum et matrem tuam...",
        "5. (Exodus 20:13) Non occides.",
        "6. (Exodus 20:14) Non mœchaberis.",
        "7. (Exodus 20:15) Non furtum facies.",
        "8. (Exodus 20:16) Non loqueris contra proximum tuum falsum testimonium.",
        "9. (Exodus 20:17a - partial) Nec desiderabis uxorem proximi tui.", // Split for Augustinian (Wife first)
        "10. (Exodus 20:17b - partial) Non concupisces domum proximi tui:... non servum, non ancillam, non bovem, non asinum, nec omnia quæ illius sunt."
      ]
    },
    "Protestant": {
      name: "Protestant (Philonic/Reformed Listing)",
      preamble: "(Exodus 20:2) Ego sum Dominus Deus tuus, qui eduxi te de terra Ægypti, de domo servitutis.",
      commandments: [
        "1. (Exodus 20:3) Non habebis deos alienos coram me.",
        "2. (Exodus 20:4-6) Non facies tibi sculptile, neque omnem similitudinem... [textus completus sicut in Mandato Judaico 1, pars 2]",
        "3. (Exodus 20:7) Non assumes nomen Domini Dei tui in vanum...",
        "4. (Exodus 20:8-11) Memento ut diem sabbati sanctifices...",
        "5. (Exodus 20:12) Honora patrem tuum et matrem tuam...",
        "6. (Exodus 20:13) Non occides.",
        "7. (Exodus 20:14) Non mœchaberis.",
        "8. (Exodus 20:15) Non furtum facies.",
        "9. (Exodus 20:16) Non loqueris contra proximum tuum falsum testimonium.",
        "10. (Exodus 20:17) Non concupisces domum proximi tui: nec desiderabis uxorem ejus, non servum, non ancillam, non bovem, non asinum, nec omnia quæ illius sunt." // Coveting kept as one
      ]
    },
    "Lutheran": {
      name: "Lutheran (Catechism Listing)",
      preamble: null,
      commandments: [
        // Using base Vulgate text corresponding to the number. Catechisms might shorten/paraphrase.
        "1. (Exodus 20:3) Non habebis deos alienos coram me.", // Core text
        "2. (Exodus 20:7) Non assumes nomen Domini Dei tui in vanum...",
        "3. (Exodus 20:8) Memento ut diem sabbati sanctifices.", // Core text
        "4. (Exodus 20:12) Honora patrem tuum et matrem tuam...",
        "5. (Exodus 20:13) Non occides.",
        "6. (Exodus 20:14) Non mœchaberis.",
        "7. (Exodus 20:15) Non furtum facies.",
        "8. (Exodus 20:16) Non loqueris contra proximum tuum falsum testimonium.",
        "9. (Exodus 20:17a - partial) Non concupisces domum proximi tui:", // Split for Lutheran (House first)
        "10. (Exodus 20:17b - partial) nec desiderabis uxorem ejus, non servum, non ancillam, non bovem, non asinum, nec omnia quæ illius sunt."
      ]
    }
    // Add other denominations if needed, applying the Vulgate text to their structure.
  };