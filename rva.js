// rva.js - Texts from the Reina-Valera Antigua (e.g., 1909 revision)

const rvaTranslationData = {
    "Jewish": {
      name: "Jewish (Talmudic Listing)",
      preamble: "(Éxodo 20:2) Yo soy JEHOVÁ tu Dios, que te saqué de la tierra de Egipto, de casa de siervos.",
      commandments: [
        "1. (Éxodo 20:3-6) No tendrás dioses ajenos delante de mí. No te harás imagen, ni ninguna semejanza de cosa que esté arriba en el cielo, ni abajo en la tierra, ni en las aguas debajo de la tierra: No te inclinarás á ellas, ni las honrarás; porque yo soy Jehová tu Dios, fuerte, celoso, que visito la maldad de los padres sobre los hijos, sobre los terceros y sobre los cuartos, á los que me aborrecen, Y que hago misericordia en millares á los que me aman, y guardan mis mandamientos.",
        "2. (Éxodo 20:7) No tomarás el nombre de Jehová tu Dios en vano; porque no dará por inocente Jehová al que tomare su nombre en vano.",
        "3. (Éxodo 20:8-11) Acordarte has del día del reposo, para santificarlo. Seis días trabajarás, y harás toda tu obra; Mas el séptimo día será reposo para Jehová tu Dios: no hagas en él obra alguna, tú, ni tu hijo, ni tu hija, ni tu siervo, ni tu criada, ni tu bestia, ni tu extranjero que está dentro de tus puertas: Porque en seis días hizo Jehová los cielos y la tierra, la mar y todas las cosas que en ellos hay, y reposó en el séptimo día: por tanto Jehová bendijo el día del reposo y lo santificó.",
        "4. (Éxodo 20:12) Honra á tu padre y á tu madre, porque tus días se alarguen en la tierra que Jehová tu Dios te da.",
        "5. (Éxodo 20:13) No matarás.",
        "6. (Éxodo 20:14) No cometerás adulterio.",
        "7. (Éxodo 20:15) No hurtarás.",
        "8. (Éxodo 20:16) No hablarás contra tu prójimo falso testimonio.",
        "9. (Éxodo 20:17a) No codiciarás la casa de tu prójimo,", // Split for Talmudic
        "10. (Éxodo 20:17b) no codiciarás la mujer de tu prójimo, ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo."
      ]
    },
    "Catholic": {
      name: "Catholic (Augustinian Listing)",
      preamble: null,
      commandments: [
        "1. (Éxodo 20:2-6) Yo soy JEHOVÁ tu Dios... No tendrás dioses ajenos delante de mí. No te harás imagen... [texto completo como en Mandamiento Judío 1]",
        "2. (Éxodo 20:7) No tomarás el nombre de Jehová tu Dios en vano...",
        "3. (Éxodo 20:8-11) Acordarte has del día del reposo, para santificarlo...",
        "4. (Éxodo 20:12) Honra á tu padre y á tu madre...",
        "5. (Éxodo 20:13) No matarás.",
        "6. (Éxodo 20:14) No cometerás adulterio.",
        "7. (Éxodo 20:15) No hurtarás.",
        "8. (Éxodo 20:16) No hablarás contra tu prójimo falso testimonio.",
        "9. (Éxodo 20:17a - parcial) No codiciarás la mujer de tu prójimo,", // Split for Augustinian
        "10. (Éxodo 20:17b - parcial) No codiciarás la casa de tu prójimo,... ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo."
      ]
    },
    "Protestant": {
      name: "Protestant (Philonic/Reformed Listing)",
      preamble: "(Éxodo 20:2) Yo soy JEHOVÁ tu Dios, que te saqué de la tierra de Egipto, de casa de siervos.",
      commandments: [
        "1. (Éxodo 20:3) No tendrás dioses ajenos delante de mí.",
        "2. (Éxodo 20:4-6) No te harás imagen, ni ninguna semejanza... [texto completo como en Mandamiento Judío 1, parte 2]",
        "3. (Éxodo 20:7) No tomarás el nombre de Jehová tu Dios en vano...",
        "4. (Éxodo 20:8-11) Acordarte has del día del reposo, para santificarlo...",
        "5. (Éxodo 20:12) Honra á tu padre y á tu madre...",
        "6. (Éxodo 20:13) No matarás.",
        "7. (Éxodo 20:14) No cometerás adulterio.",
        "8. (Éxodo 20:15) No hurtarás.",
        "9. (Éxodo 20:16) No hablarás contra tu prójimo falso testimonio.",
        "10. (Éxodo 20:17) No codiciarás la casa de tu prójimo, no codiciarás la mujer de tu prójimo, ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo." // Coveting kept as one
      ]
    },
    "Lutheran": {
      name: "Lutheran (Catechism Listing)",
      preamble: null,
      commandments: [
        // Using base RVA text corresponding to the number. Catechisms might shorten.
        "1. (Éxodo 20:3) No tendrás dioses ajenos delante de mí.", // Core text
        "2. (Éxodo 20:7) No tomarás el nombre de Jehová tu Dios en vano...",
        "3. (Éxodo 20:8) Acordarte has del día del reposo, para santificarlo.", // Core text
        "4. (Éxodo 20:12) Honra á tu padre y á tu madre...",
        "5. (Éxodo 20:13) No matarás.",
        "6. (Éxodo 20:14) No cometerás adulterio.",
        "7. (Éxodo 20:15) No hurtarás.",
        "8. (Éxodo 20:16) No hablarás contra tu prójimo falso testimonio.",
        "9. (Éxodo 20:17a - parcial) No codiciarás la casa de tu prójimo,", // Split for Lutheran (House first)
        "10. (Éxodo 20:17b - parcial) no codiciarás la mujer de tu prójimo, ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo."
      ]
    }
    // Add other denominations if needed, applying the RVA text to their structure.
  };