// rva.js - Texts from the Reina-Valera Antigua (e.g., 1909 revision)
// NEW STRUCTURE with group and number properties

const rvaTranslationData = {
  "Jewish": {
    name: "Jewish (Talmudic Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Éxodo 20:2) Yo soy JEHOVÁ tu Dios, que te saqué de la tierra de Egipto, de casa de siervos."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Éxodo 20:3) No tendrás dioses ajenos delante de mí." },
      { number: "1", group: "IDOLATRY", text: "(Éxodo 20:4-6) No te harás imagen, ni ninguna semejanza de cosa que esté arriba en el cielo, ni abajo en la tierra, ni en las aguas debajo de la tierra: No te inclinarás á ellas, ni las honrarás; porque yo soy Jehová tu Dios, fuerte, celoso, que visito la maldad de los padres sobre los hijos, sobre los terceros y sobre los cuartos, á los que me aborrecen, Y que hago misericordia en millares á los que me aman, y guardan mis mandamientos." },
      { number: "2", group: "NAME_VAIN", text: "(Éxodo 20:7) No tomarás el nombre de Jehová tu Dios en vano; porque no dará por inocente Jehová al que tomare su nombre en vano." },
      { number: "3", group: "SABBATH", text: "(Éxodo 20:8-11) Acordarte has del día del reposo, para santificarlo. Seis días trabajarás, y harás toda tu obra; Mas el séptimo día será reposo para Jehová tu Dios: no hagas en él obra alguna, tú, ni tu hijo, ni tu hija, ni tu siervo, ni tu criada, ni tu bestia, ni tu extranjero que está dentro de tus puertas: Porque en seis días hizo Jehová los cielos y la tierra, la mar y todas las cosas que en ellos hay, y reposó en el séptimo día: por tanto Jehová bendijo el día del reposo y lo santificó." },
      { number: "4", group: "PARENTS", text: "(Éxodo 20:12) Honra á tu padre y á tu madre, porque tus días se alarguen en la tierra que Jehová tu Dios te da." },
      { number: "5", group: "MURDER", text: "(Éxodo 20:13) No matarás." },
      { number: "6", group: "ADULTERY", text: "(Éxodo 20:14) No cometerás adulterio." },
      { number: "7", group: "STEALING", text: "(Éxodo 20:15) No hurtarás." },
      { number: "8", group: "FALSE_WITNESS", text: "(Éxodo 20:16) No hablarás contra tu prójimo falso testimonio." },
      { number: "9", group: "COVETING", text: "(Éxodo 20:17a) No codiciarás la casa de tu prójimo," },
      { number: "10", group: "COVETING", text: "(Éxodo 20:17b) no codiciarás la mujer de tu prójimo, ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo." }
    ]
  },
  "Catholic": {
    name: "Catholic (Augustinian Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Éxodo 20:2-3) Yo soy JEHOVÁ tu Dios... No tendrás dioses ajenos delante de mí." },
      { number: "1", group: "IDOLATRY", text: "(Éxodo 20:4-6) No te harás imagen... ni las honrarás..." },
      { number: "2", group: "NAME_VAIN", text: "(Éxodo 20:7) No tomarás el nombre de Jehová tu Dios en vano..." },
      { number: "3", group: "SABBATH", text: "(Éxodo 20:8-11) Acordarte has del día del reposo, para santificarlo..." },
      { number: "4", group: "PARENTS", text: "(Éxodo 20:12) Honra á tu padre y á tu madre..." },
      { number: "5", group: "MURDER", text: "(Éxodo 20:13) No matarás." },
      { number: "6", group: "ADULTERY", text: "(Éxodo 20:14) No cometerás adulterio." },
      { number: "7", group: "STEALING", text: "(Éxodo 20:15) No hurtarás." },
      { number: "8", group: "FALSE_WITNESS", text: "(Éxodo 20:16) No hablarás contra tu prójimo falso testimonio." },
      { number: "9", group: "COVETING", text: "(Éxodo 20:17a - parcial) No codiciarás la mujer de tu prójimo," },
      { number: "10", group: "COVETING", text: "(Éxodo 20:17b - parcial) No codiciarás la casa de tu prójimo,... ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo." }
    ]
  },
  "Protestant": {
    name: "Protestant (Philonic/Reformed Listing)",
    preamble: {
      group: "PREAMBLE",
      text: "(Éxodo 20:2) Yo soy JEHOVÁ tu Dios, que te saqué de la tierra de Egipto, de casa de siervos."
    },
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Éxodo 20:3) No tendrás dioses ajenos delante de mí." },
      { number: "2", group: "IDOLATRY", text: "(Éxodo 20:4-6) No te harás imagen, ni ninguna semejanza..." },
      { number: "3", group: "NAME_VAIN", text: "(Éxodo 20:7) No tomarás el nombre de Jehová tu Dios en vano..." },
      { number: "4", group: "SABBATH", text: "(Éxodo 20:8-11) Acordarte has del día del reposo, para santificarlo..." },
      { number: "5", group: "PARENTS", text: "(Éxodo 20:12) Honra á tu padre y á tu madre..." },
      { number: "6", group: "MURDER", text: "(Éxodo 20:13) No matarás." },
      { number: "7", group: "ADULTERY", text: "(Éxodo 20:14) No cometerás adulterio." },
      { number: "8", group: "STEALING", text: "(Éxodo 20:15) No hurtarás." },
      { number: "9", group: "FALSE_WITNESS", text: "(Éxodo 20:16) No hablarás contra tu prójimo falso testimonio." },
      { number: "10", group: "COVETING", text: "(Éxodo 20:17) No codiciarás la casa de tu prójimo, no codiciarás la mujer de tu prójimo, ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo." }
    ]
  },
  "Lutheran": {
    name: "Lutheran (Catechism Listing)",
    preamble: null, // No preamble object
    commandments: [
      { number: "1", group: "IDENTITY_WORSHIP", text: "(Éxodo 20:2-3) Yo soy JEHOVÁ tu Dios... No tendrás dioses ajenos delante de mí." }, // Often shortened
      { number: "1", group: "IDOLATRY", text: "(Éxodo 20:4-6) No te harás imagen..." }, // Often omitted
      { number: "2", group: "NAME_VAIN", text: "(Éxodo 20:7) No tomarás el nombre de Jehová tu Dios en vano..." },
      { number: "3", group: "SABBATH", text: "(Éxodo 20:8-11) Acordarte has del día del reposo, para santificarlo." }, // Core text
      { number: "4", group: "PARENTS", text: "(Éxodo 20:12) Honra á tu padre y á tu madre..." },
      { number: "5", group: "MURDER", text: "(Éxodo 20:13) No matarás." },
      { number: "6", group: "ADULTERY", text: "(Éxodo 20:14) No cometerás adulterio." },
      { number: "7", group: "STEALING", text: "(Éxodo 20:15) No hurtarás." },
      { number: "8", group: "FALSE_WITNESS", text: "(Éxodo 20:16) No hablarás contra tu prójimo falso testimonio." },
      { number: "9", group: "COVETING", text: "(Éxodo 20:17a - parcial) No codiciarás la casa de tu prójimo," }, // House first
      { number: "10", group: "COVETING", text: "(Éxodo 20:17b - parcial) no codiciarás la mujer de tu prójimo, ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo." }
    ]
  }
  // Add other denominations if needed, applying the RVA text and NEW STRUCTURE.
};