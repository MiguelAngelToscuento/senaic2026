function cambiarPestana(evento, idPestana) {
  if(evento) evento.preventDefault();
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.top-nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(idPestana).classList.add('active');
  if (evento && evento.currentTarget.classList.contains('top-nav-btn')) evento.currentTarget.classList.add('active');
  else {
    const idMap = {
      'pestana-inicio': 'btn-inicio',
      'pestana-programa': 'btn-programa',
      'pestana-escuela': 'btn-escuela',
      'pestana-magistrales': 'btn-magistrales',
      'pestana-mesadialogo': 'btn-mesadialogo',
      'pestana-galeria': 'btn-galeria',
      'pestana-sedes': 'btn-sedes',
      'pestana-comite': 'btn-comite',
      'pestana-contacto': 'btn-contacto'
    };
    if (idMap[idPestana]) {
      document.getElementById(idMap[idPestana]).classList.add('active');
    }
  }
}

/* json ponentes */
const ponentesDB = {
  "Dr. Eduardo Morales Manzanares": {
    grado: "Doctor en Ciencias de la Computación",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/eduardomorales.png',
    semblanza: `Egresado de Ingeniería Física de la Universidad Autónoma Metropolitana, con Maestría en Inteligencia Artificial por la Universidad de Edimburgo y Doctorado en Computación por el Turing Institute–Universidad de Strathclyde, en Escocia.<br><br>Es Investigador Titular C del INAOE, miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel 3, y de la Academia Mexicana de Ciencias. Es también egresado distinguido de la UAM.<br><br>Actualmente es Presidente de la Academia Mexicana de Computación, de la cual fue miembro fundador. Cuenta con más de 250 publicaciones en congresos, revistas y capítulos de libros.<br><br>Su trabajo de investigación se enfoca en aprendizaje computacional y robótica.`,
    cita: ""
  },
  "Dr. Miguel González Mendoza": {
    grado: "Doctor en Inteligencia Artificial",
    institucion_corta: "ITESM",
    facultad: "Campus Edo. Mex.",
    institucion_larga: "Tecnológico de Monterrey",
    foto: 'img/miguelgonzalez.png',
    semblanza: `Doctor en Inteligencia Artificial por el Instituto Nacional de Ciencias Aplicadas de Toulouse, Francia, es profesor investigador del Tecnológico de Monterrey, especializado en Machine Learning, Data Management y Visión por Computadora.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel II, de la Academia Mexicana de Ciencias y de la Academia Mexicana de Computación. Fue Presidente de la Sociedad Mexicana de Inteligencia Artificial.<br><br>Cuenta con más de 160 publicaciones científicas y ha dirigido 17 tesis doctorales y 34 de maestría. Ha coordinado proyectos de investigación nacionales, a través de SECIHTI, y europeos, con la Comisión Europea.<br><br>Su trayectoria en IA ha sido reconocida internacionalmente, incluyendo su participación como Joven Científico en el Foro Económico Mundial y como Editor Asociado de revistas científicas de Springer Nature y Frontiers in Artificial Intelligence. Actualmente también se desempeña como consultor en transformación digital e Inteligencia Artificial.`,
    cita: ""
  },
  "Dr. Raúl Monroy Borja": {
    grado: "Doctor en Inteligencia Artificial",
    institucion_corta: "ITESM",
    facultad: "Campus Edo. Mex.",
    institucion_larga: "Tecnológico de Monterrey",
    foto: 'img/raulmonroy.png',
    semblanza: `Doctor en Inteligencia Artificial por la Universidad de Edimburgo (1998), ha desarrollado gran parte de su trayectoria académica en el Tecnológico de Monterrey, donde es Profesor Investigador Titular desde 2010.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel III, de la Academia Mexicana de Ciencias y miembro constituyente de la Academia Mexicana de Computación.<br><br>Su investigación se enfoca en la invención de mecanismos de Inteligencia Artificial y su aplicación en ciberseguridad, identificación biométrica y automatización del aprendizaje máquina (Machine Learning). Sus proyectos han recibido financiamiento de organismos nacionales e internacionales, así como de la industria.<br><br>Fue Presidente de la Sociedad Mexicana de Inteligencia Artificial, exCoordinador de la Red Temática en Tecnologías de Información y Comunicaciones del CONACYT y exSecretario Electo de la Academia Mexicana de Computación.`,
    cita: ""
  },
  "Dr. Alejandro Antonio Torres García": {
    grado: "Doctor en Ciencias Computacionales",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/alejandrotorres.png',
    semblanza: `Es Investigador Titular A del INAOE y miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel I, así como de la Academia Mexicana de Computación (AMEXCOMP).<br><br>Doctor y Maestro en Ciencias Computacionales por el INAOE, es Ingeniero en Sistemas Computacionales por el Instituto Tecnológico de Tuxtla Gutiérrez. Miembro de las redes temáticas sobre inteligencia computacional aplicada y tecnologías del lenguaje. Realizó una estancia posdoctoral del consorcio Europeo de Investigación en Informática y Matemáticas (ERCIM) en la Universidad Noruega de Ciencia y Tecnología, en Trondheim, Noruega.<br><br>Su investigación abarca el procesamiento y análisis de bioseñales, interfaces cerebro-computadora (BCI), interfaces de voz silente, Machine Learning, Inteligencia Computacional y detección temprana de enfermedades neurodegenerativas y el pensamiento computacional.<br><br>Es autor de 2 libros, 7 capítulos y alrededor de 40 artículos científicos, además de haber dirigido 7 tesis de maestría y 1 de doctorado. Ha realizado estancias de investigación en instituciones de Alemania, Italia, España y Francia.<br><br>Ha sido reconocido con el Premio Joven Talento en Computación AMEXCOMP 2025 y el Premio Estatal de la Juventud de Chiapas 2014 en actividades académicas. Fue asesor líder en las Delegaciones de Chiapas para las XXVII y XXVI Olimpiadas Mexicanas de Informática.`,
    cita: ""
  },
  "Dra. María Lucía Barrón Estrada": {
    grado: "Doctora en Filosofía en Ciencias de la Computación",
    institucion_corta: "TecNM",
    facultad: "IT Culiacán",
    institucion_larga: "Tecnológico Nacional de México",
    foto: 'img/marialuisa.png',
    semblanza: `Doctora en Filosofía en Ciencias de la Computación por el Florida Institute of Technology, Florida, EUA; Maestra en Ciencias de la Computación por el Instituto Tecnológico de Toluca y Licenciada en Informática por el Instituto Tecnológico de Culiacán.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores (SNII) desde 1990 y actualmente Investigadora Nacional Nivel III, en el Área IV: Ciencias de la Conducta y la Educación, así como Investigadora Honorífica del SSIT. Desde 1985 labora en el TecNM-Instituto Tecnológico de Culiacán, donde desarrolla investigación en la línea “Tecnologías Inteligentes Aplicadas a la Educación”, orientada al diseño y desarrollo de tecnologías computacionales para el aprendizaje, particularmente Sistemas Afectivos, Tutores Inteligentes y Ambientes Inteligentes de Aprendizaje adaptables a las necesidades cognitivas y afectivas de los estudiantes.<br><br>Cuenta con una amplia producción científica en revistas y congresos nacionales e internacionales, donde ha obtenido en 4 ocasiones el premio al mejor artículo. Es columnista permanente de Komputer Sapiens, revista de divulgación científica de la Sociedad Mexicana de Inteligencia Artificial, y participa activamente en actividades de divulgación.<br><br>Ha contribuido a la formación de investigadores mediante la dirección de tesis y la participación en programas de licenciatura, maestría y doctorado. Entre sus principales reconocimientos destacan el Sol al Mérito en Ciencia y Tecnología (2009), el Premio Sinaloa de Ciencia, Tecnología e Innovación por su trayectoria (2018) y el Premio Eustaquio Buelna (2021), como asesora de la mejor tesis de posgrado.<br><br>Fue presidenta de la Sociedad Mexicana de Ciencia de la Computación (2019-2021) y es vicepresidenta de la Academia Mexicana de Computación (2023-2026).`,
    cita: ""
  },
  "Dr. Ramón Zatarain Cabada": {
    grado: "Doctor en Filosofía en Ciencias de la Computación",
    institucion_corta: "TecNM",
    facultad: "IT Culiacán",
    institucion_larga: "Tecnológico Nacional de México",
    foto: 'img/ramonzatarain.png',
    semblanza: `Doctor en Filosofía y Maestro en Ciencias de la Computación por el Florida Institute of Technology, FL, USA, y Licenciado en Informática por el Instituto Tecnológico de Culiacán.<br><br>Miembro del Sistema Nacional de Investigadores desde 1987, actualmente Investigador Nacional Nivel II e investigador honorífico del Sistema Sinaloense de Investigadores y Tecnólogos. Labora en el Tecnológico Nacional de México - Instituto Tecnológico de Culiacán desde 1984 y su trabajo se centra en la línea de investigación “Inteligencia Artificial Aplicada a la Educación” que estudia los modelos educativos para desarrollar tecnologías inteligentes para el aprendizaje, como son los Ambientes Inteligentes y Afectivos de Aprendizaje, utilizando técnicas de inteligencia artificial como el aprendizaje máquina en diferentes tecnologías como la realidad extendida y la IA Generativa.<br><br>Ha participado en la formación de recursos humanos (docencia y dirección de tesis) en programas de licenciatura, maestría y doctorado en el área de Ciencias de la Computación.<br><br>Obtuvo el premio Sinaloa de Ciencia, Tecnología e Innovación en 2017 y participa en diversas asociaciones como SMCC, REDICA, AMEXCOMP, SMIA, entre otras.`,
    cita: ""
  },
  "Dr. Carlos Artemio Coello Coello": {
    grado: "Doctor en Ciencias de la Computación",
    institucion_corta: "CINVESTAV",
    facultad: "Departamento de Computación",
    institucion_larga: "Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional",
    foto: 'img/carlosartemio.png',
    semblanza: `Obtuvo un doctorado en ciencias de la computación de la Universidad Tulane (Estados Unidos), en 1996 y desde 2001 es Investigador Titular en el Departamento de Computación del Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV-IPN).<br><br>Ha recibido diversos premios, de entre los que destacan el Premio Nacional de Investigación 2007 en “ciencias exactas” de la Academia Mexicana de Ciencias, el IEEE Kiyo Tomiyasu Award en 2013, el Premio Nacional de Ciencias y Artes 2012, en el área de Ciencias Físico-Matemáticas y Naturales, el 2016 The World Academy of Sciences (TWAS) Award en “Engineering Sciences”, el Premio Luis Elizondo 2019 en la Categoría Científica y Tecnológica y el 2021 IEEE Computational Intelligence Society Evolutionary Computation Pioneer Award por sus “contribuciones a la optimización evolutiva multi-objetivo y a las técnicas de manejo de restricciones”. Es Fellow del IEEE desde 2011.<br><br>Ingresó a El Colegio Nacional el 5 de mayo de 2023.<br><br>Su investigación se centra principalmente en el desarrollo de nuevos algoritmos metaheurísticos bio-inspirados para optimización mono-objetivo y multi-objetivo no lineal.`,
    cita: ""
  },
  "Dr. Hugo Terashima Marín": {
    grado: "Doctor en Informática",
    institucion_corta: "ITESM",
    facultad: "Escuela de Ingeniería y Ciencias",
    institucion_larga: "Tecnológico de Monterrey, Campus Monterrey",
    foto: 'img/hugoterashima.png',
    semblanza: `Obtuvo el Doctorado en Informática en el Tecnológico de Monterrey, Campus Monterrey, en 1998. Actualmente se desempeña como Profesor Investigador Titular en la Escuela de Ingeniería y Ciencias y es Miembro del Grupo de Investigación en Inteligencia Artificial Avanzada.<br><br>Sus áreas de investigación abarcan la inteligencia computacional, los modelos heurísticos, metaheurísticos e híperheurísticos para problemas de optimización, la generación automática de algoritmos, así como las aplicaciones de inteligencia artificial y aprendizaje automático. Ha fungido como Investigador Principal en múltiples proyectos financiados por el CONACyT, la industria y diversos entornos, colaborando activamente con investigadores de instituciones nacionales e internacionales.<br><br>Cuenta con un reconocido prestigio académico respaldado por sus membresías en organismos de alto nivel:<br>• Sistema Nacional de Investigadoras e Investigadores (SNII): Nivel II.<br>• Academia Mexicana de Ciencias.<br>• Academia Mexicana de Computación.<br>• Institute of Electrical and Electronics Engineers (IEEE): Miembro Senior.<br><br>Posee una prolífica trayectoria científica con más de 145 artículos publicados en conferencias y revistas indizadas. En el ámbito de la mentoría y formación de recursos humanos de alto nivel, ha supervisado a: 11 Investigadores Posdoctorales, 8 Tesistas Doctorales y 38 Tesistas de Maestría.<br><br>En el Tecnológico de Monterrey, Campus Monterrey, ha desempeñado una destacada labor directiva y de diseño académico, ocupando los siguientes cargos: Líder del Grupo de Investigación en Sistemas Inteligentes. Diseñador y Director del Programa de Posgrado en Ciencias Computacionales. Director del Doctorado en Tecnologías de Información y Comunicaciones. Director de la Maestría en Sistemas Inteligentes. Director del Doctorado en Inteligencia Artificial. Director de Doctorados y Director de Posgrados.`,
    cita: ""
  },
  "Dr. Victor Alejandro González Huitrón": {
    grado: "Doctor en Comunicaciones y Electrónica",
    institucion_corta: "TecNM",
    facultad: "IT Querétaro",
    institucion_larga: "Tecnológico Nacional de México",
    foto: 'img/victoralejandro.png',
    semblanza: `Obtuvo el grado de Licenciatura en Ingeniería en Comunicaciones y Electrónica en 2009 con especialidad en Automatización y Control, posteriormente cursó la Maestría en Ciencias de la Ingeniería en Microelectrónica en 2013 y obtuvo el grado de Doctor en Comunicaciones y Electrónica en 2017, por parte del Instituto Politécnico Nacional en la Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME) unidad Culhuacán.<br><br>Desde 2017 a la fecha ha fungido como docente en las áreas de Ingeniería Electrónica, Eléctrica, Biomédica, Mecatrónica y Computación en diversas universidades públicas y privadas. Actualmente se desempeña como profesor e investigador en el Instituto Tecnológico de Querétaro y forma parte del Sistema Nacional de Investigadoras e Investigadores (SNII).<br><br>En el sector profesional e industrial ha destacado en diversos roles técnicos y de investigación: Ingeniero de capacitación y diseño electrónico. Analista de datos para la Comisión Nacional de Seguros y Fianzas. Investigador del programa Cátedras CONACYT. Desarrollador de algoritmos para la industria automotriz.<br><br>Sus áreas de interés científico y tecnológico se centran en: Procesamiento Digital de Imágenes. Visión e Inteligencia Artificial. Análisis de datos. Procesamiento Digital de Señales.`,
    cita: ""
  },
  "Dra. Alicia Morales Reyes": {
    grado: "Doctora en Ciencias e Ingeniería",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/aliciamorales.png',
    semblanza: `Obtuvo el grado de Doctorado por el Colegio de Ciencias e Ingeniería de la Universidad de Edimburgo en el Reino Unido en 2011. Su investigación doctoral la desarrolló con el grupo de investigación System Level Integration del Nano and Micro Systems Institute de la Facultad de Ingeniería en la Universidad de Edimburgo.<br><br>En 2006, obtuvo el grado de Maestría en Ciencias en el área de Ciencias Computacionales por el Instituto Nacional de Astrofísica, Óptica y Electrónica en Puebla, México. Concluyó la Licenciatura en Ingeniería Eléctrica y Electrónica en la Facultad de Ingeniería de la Universidad Nacional Autónoma de México en el 2002.<br><br>Actualmente es Investigadora Titular “B” en la Coordinación de Ciencias Computacionales del Instituto Nacional de Astrofísica, Óptica y Electrónica en donde colabora en el Laboratorio de Cómputo Reconfigurable y de Alto Rendimiento. Reconocida desde el 2014 por el Sistema Nacional de Investigadores con el Nivel I.<br><br>Entre sus intereses en investigación están las técnicas del cómputo evolutivo en particular los esquemas descentralizados de estas, así como el diseño de arquitecturas hardware inspiradas en principios biológicos; todo esto aplicado a distintos contextos como optimización, procesamiento de señales e imágenes, automatización en el diseño de modelos y arquitecturas “suaves”, entre otros.`,
    cita: ""
  },
  "Dra. Claudia Feregrino Uribe": {
    grado: "Doctora en Ingeniería en Sistemas Digitales",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/claudiaferegrino.png',
    semblanza: `Obtuvo su Doctorado en Ingeniería en Sistemas Digitales en la Universidad de Loughborough, Reino Unido; su Maestría en Ciencias en Ingeniería Eléctrica (especialidad en Telecomunicaciones) por el CINVESTAV-Guadalajara; su Licenciatura en Ingeniería en Sistemas Computacionales por el Tecnológico Nacional de México, Campus Querétaro.<br><br>Es Investigadora Titular en la Coordinación de Ciencias Computacionales del Instituto Nacional de Astrofísica, Óptica y Electrónica (INAOE) en Puebla, donde se desempeña como Directora de Investigación y Encargada del Despacho de los Asuntos de la Dirección de Desarrollo Tecnológico. En esta institución fue fundadora y primera Coordinadora del Programa de Maestría en Ciencias y Tecnologías de Seguridad, además de fungir como responsable del Laboratorio de Ciberseguridad.<br><br>Su línea principal de trabajo es la seguridad informática, enfocándose en Criptografía, Esteganografía, Marcas de agua digitales, y Aplicaciones de seguridad en entornos IoT y sistemas embebidos.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores (SNII) Nivel II. Su trayectoria académica e industrial abarca más de 150 publicaciones en revistas indexadas, congresos internacionales y artículos de divulgación. Ha dirigido 50 tesis en los niveles de doctorado, maestría y licenciatura. Obtención de 3 patentes en marcas de agua digitales. Ha impartido más de 23 cursos a nivel posgrado en el INAOE y otras instituciones.<br><br>Responsable técnica de 9 proyectos de investigación y desarrollo tecnológico financiados por la Secretaría de Marina (SEMAR), Secretaría de la Defensa Nacional (SEDENA), CONACyT y Fondos de Innovación. Ha sido editora de revistas internacionales y fundadora del Capítulo Puebla de la Sociedad de Computación del IEEE, del cual fue presidenta durante dos años. Ha participado activamente en la organización de congresos y talleres académicos como ReConFig, CCIM y tres ediciones de las Reuniones de Ciberseguridad para la Industria 4.0.`,
    cita: ""
  },
  "Dr. Juan Humberto Sossa Azuela": {
    grado: "Doctor en Informática",
    institucion_corta: "CIC - IPN",
    facultad: "Centro de Investigación en Computación",
    institucion_larga: "Instituto Politécnico Nacional",
    foto: 'img/juanhumberto.png',
    semblanza: `Obtuvo el grado de Doctor en Informática por el Instituto Nacional Politécnico de Grenoble, Francia. Es profesor de tiempo completo del Instituto Politécnico Nacional y Director del Centro de Investigación en Computación. Es miembro Emérito del Sistema Nacional de Investigadores.<br><br>Es miembro de la Academia Mexicana de Ciencias, miembro de la Academia de Ingeniería y miembro de la Academia Mexicana de Ciencias de la Computación. Es también miembro Senior del Instituto de Ingenieros Eléctricos y Electrónicos (IEEE), de la Sociedad Internacional de Redes Neuronales (INNS) y de la Academia de Maquinaria Computacional (ACM). Es miembro de la Asociación para el Avance de la Inteligencia Artificial (AAII) y Fellow de la Sociedad Mexicana de Inteligencia Artificial (SMIA). Fue presidente de esta Sociedad del 2002 a 2004.<br><br>En 2021 fue galardonado con el Premio Nacional de Computación por parte de la Academia Mexicana de la Computación (AMEXCOMP). En 2023 fue galardonado con el Premio a la Investigación en Instituto Politécnico Nacional en el área de investigación básica. En 2024 recibió por parte del Tecnológico de Estudios Superiores de Ecatepec un Doctorado Honoris Causa. En enero de 2026 fue elevado a la categoría de Académico de Honor por parte de la Academia de Ingeniería México. Finalmente, en mayo de 2026, recibió por parte de la IEEE, Región 9, el reconocimiento de Ingeniero Eminente.<br><br>Es autor de 5 libros de texto, 9 patentes, 36 derechos de autor y más de 550 trabajos de congreso y revista. Ha impartido más de 645 pláticas por invitación. Sus áreas de investigación son en Inteligencia Artificial, Aprendizaje para Máquinas, Redes Neuronales Artificiales, Análisis de Imágenes, Reconocimiento de Patrones, Robótica y Cómputo Neuromórfico.`,
    cita: ""
  },
  "Dr. Aldo Márquez Grajales": {
    grado: "Doctor en Inteligencia Artificial",
    institucion_corta: "UAEH",
    facultad: "Área Académica de Computación y Electrónica",
    institucion_larga: "Universidad Autónoma del Estado de Hidalgo",
    foto: 'img/aldomarquez.png',
    semblanza: `Es Licenciado en Informática por parte de la Universidad Veracruzana, tiene la Maestría en Computación Aplicada por parte del Laboratorio Nacional de Informática Avanzada, y posee el Doctorado en Inteligencia Artificial por la Universidad Veracruzana. Sus áreas de interés son: minería de datos en series temporales, visión artificial, cómputo evolutivo y modelos subrogados.<br><br>Ha trabajado como desarrollador de sistemas de 2006 a 2011 en el sector privado, y a partir del 2013 al 2014 en el sector público. Como docente, ha impartido diversas materias en Instituciones de Educación Superior privadas y públicas desde el 2016 a la fecha. Durante el periodo que comprende del 2021 al 2024, realizó dos estancias postdoctorales en el Instituto de Investigaciones en Inteligencia Artificial de la Universidad Veracruzana, México.<br><br>Adicionalmente, ha publicado en revistas cientificas pertenecientes al Journal Citation Reports (JCR) y en congresos nacionales e internacionales. Posee la distinción de Investigador Nacional Nivel I del Sistema Nacional de Investigadoras e Investigadores preteneciente a la Secretaría de Ciencia, Humanidades, Tecnología e Innovación de México.<br><br>Actualmente, se encuentra laborando en la Universidad Autónoma del Estado de Hidalgo dentro del Área Académica de Computación y Electrónica como Profesor Investigador de Tiempo Completo.`,
    cita: ""
  },
  "Dra. Karina Mariela Figueroa Mora": {
    grado: "Doctora en Ciencias de la Computación",
    institucion_corta: "UMSNH",
    facultad: "Facultad de Ciencias Físico Matemáticas",
    institucion_larga: "Universidad Michoacana de San Nicolás de Hidalgo",
    foto: 'img/karinamariela.png',
    semblanza: `Doctora en Ciencias de la Computación por la Universidad de Chile, Ingeniera Electricista y Maestra en Ingeniería Eléctrica, opción Sistemas Computacionales, por la Universidad Michoacana de San Nicolás de Hidalgo.<br><br>Es profesora e investigadora de la Facultad de Ciencias Físico Matemáticas y miembro del Sistema Nacional de Investigadoras e Investigadores (SNII). Su trabajo se centra en la recuperación de información y el desarrollo de software educativo.<br><br>Actualmente es Editora en Jefe de la revista Komputer Sapiens, reconocida por CONAHCyT y especializada en Inteligencia Artificial; colabora con AmphoraHealth en ciencia de datos aplicada a bases de datos médicas y lidera el Cuerpo Académico Algoritmos y Estructuras de Datos.`,
    cita: `"La educación es la principal vía de transformación de un país."`
  },
  "Dra. Yasmín Hernández Pérez": {
    grado: "Investigadora",
    institucion_corta: "TecNM",
    facultad: "Centro Nacional de Investigación y Desarrollo Tecnológico",
    institucion_larga: "Tecnológico Nacional de México",
    foto: "img/ponente.png",
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  },
  "Dr. Salvador Venegas Andraca": {
    grado: "Investigador",
    institucion_corta: "Tecnológico de Monterrey",
    facultad: "Escuela de Ingeniería y Ciencias",
    institucion_larga: "Tecnológico de Monterrey",
    foto: "img/ponente.png",
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  },
  "Dra. Daniela Moctezuma": {
    grado: "Investigadora",
    institucion_corta: "CentroGeo",
    facultad: "Ciencias de Información Geoespacial",
    institucion_larga: "Centro de Investigación en Ciencias de Información Geoespacial",
    foto: "img/ponente.png",
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  },
  "Dra. Delia Irazú Hernández Farías": {
    grado: "Investigadora",
    institucion_corta: "Institución no especificada",
    facultad: "Investigación",
    institucion_larga: "Institución no especificada",
    foto: "img/ponente.png",
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  },
  "Dr. José Luis Morales Reyes y Dr. Héctor Gabriel Acosta Mesa": {
    grado: "Investigadores",
    institucion_corta: "Institución no especificada",
    facultad: "Investigación",
    institucion_larga: "Institución no especificada",
    foto: "img/ponente.png",
    semblanza: `La semblanza de estos ponentes estará disponible pronto.`,
    cita: ""
  },
  "Dr. Humberto Pérez Espinosa": {
    grado: "Investigador",
    institucion_corta: "CICESE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Centro de Investigación Científica y de Educación Superior de Ensenada",
    foto: "img/ponente.png",
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  },
  "Dr. Leopoldo Altamirano Robles y Dr. José de Jesús Velázquez Arreola": {
    grado: "Investigadores",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica",
    foto: "img/ponente.png",
    semblanza: `La semblanza de estos ponentes estará disponible pronto.`,
    cita: ""
  },
  "Dr. Efrén Mezura Montes": {
    grado: "Investigador",
    institucion_corta: "Universidad Veracruzana",
    facultad: "Instituto de Investigaciones en Inteligencia Artificial",
    institucion_larga: "Universidad Veracruzana",
    foto: "img/ponente.png",
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  },
  "Dr. Leopoldo Altamirano Robles": {
    grado: "Investigador",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica",
    foto: "img/ponente.png",
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  }
};

/* modal apertura */
function abrirModal(btn) {
  const card = btn.closest('.speaker-card');
  const fullTitle = card.querySelector('.speaker-talk-title').innerText;
  let rawName = card.querySelector('.speaker-name') ? card.querySelector('.speaker-name').innerText : 'Ponente Invitado';

  const nameLines = rawName.split('\n');
  const name = nameLines[0].trim();

  const timeRows = card.querySelectorAll('.speaker-time-row span');
  const date = timeRows.length > 0 ? timeRows[0].innerText.replace('📅 ', '') : '';
  const time = timeRows.length > 1 ? timeRows[1].innerText.replace('🕒 ', '') : '';

  let type = "CONFERENCIA";
  let title = fullTitle;

  const indexDosPuntos = fullTitle.indexOf(':');
  if(indexDosPuntos !== -1) {
    type = fullTitle.substring(0, indexDosPuntos).trim().toUpperCase();
    title = fullTitle.substring(indexDosPuntos + 1).trim().replace(/"/g, '');
  }

  const data = ponentesDB[name] || {
    grado: "Información próximamente",
    institucion_corta: "Institución no especificada",
    facultad: "",
    institucion_larga: "",
    foto: "img/ponente.png",
    semblanza: "La semblanza de este ponente estará disponible pronto.",
    cita: ""
  };

  document.getElementById('mod-type').innerText = type;
  document.getElementById('mod-title').innerText = title;

  document.getElementById('mod-name').innerText = name;
  document.getElementById('mod-institution-abbr').innerText = data.institucion_corta;

  document.getElementById('mod-date').innerText = date;
  document.getElementById('mod-time').innerText = time;
  document.getElementById('mod-photo').src = data.foto;

  document.getElementById('mod-sem-title').innerText = title;
  document.getElementById('mod-sem-name').innerText = name;
  document.getElementById('mod-sem-degree').innerText = data.grado;

  const bioContainer = document.getElementById('mod-sem-bio-container');
  bioContainer.innerHTML = `<p class="sem-bio">${data.semblanza}</p>`;

  if(data.cita) {
    bioContainer.innerHTML += `<p class="sem-quote">${data.cita}</p>`;
  }

  document.getElementById('speaker-modal').classList.add('active');
  cambiarTabModal('presentacion');
}

/* modal cierre */
function cerrarModal() {
  document.getElementById('speaker-modal').classList.remove('active');
}

/* modal cambio vista */
function cambiarTabModal(tab) {
  document.getElementById('tab-presentacion').classList.remove('active');
  document.getElementById('tab-semblanza').classList.remove('active');
  document.querySelectorAll('.modal-body').forEach(b => b.classList.remove('active'));

  if(tab === 'presentacion') {
    document.getElementById('tab-presentacion').classList.add('active');
    document.getElementById('modal-presentacion').classList.add('active');
  } else {
    document.getElementById('tab-semblanza').classList.add('active');
    document.getElementById('modal-semblanza').classList.add('active');
  }
}

// exponer funciones de manera global para que el html las reconozca
window.cambiarPestana = cambiarPestana;
window.abrirModal = abrirModal;
window.cerrarModal = cerrarModal;
window.cambiarTabModal = cambiarTabModal;
