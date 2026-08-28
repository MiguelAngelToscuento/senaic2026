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

/* Funcionalidad para la Galería de Fotos (Subir y Eliminar) */
document.addEventListener('DOMContentLoaded', () => {
  const uploadInput = document.getElementById('foto-upload');
  const galleryGrid = document.getElementById('gallery-grid');

  if(uploadInput && galleryGrid) {
    uploadInput.addEventListener('change', function(e) {
      const files = e.target.files;
      if(files.length === 0) return;

      Array.from(files).forEach(file => {
        // Validar que sea imagen
        if(!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = function(evt) {
          const imgSrc = evt.target.result;

          // Crear contenedor de la imagen individual
          const divItem = document.createElement('div');
          divItem.className = 'gallery-item';

          // Crear la imagen
          const imgEl = document.createElement('img');
          imgEl.src = imgSrc;
          imgEl.alt = "Foto de Galería";

          // Crear botón eliminar
          const delBtn = document.createElement('button');
          delBtn.className = 'delete-photo-btn';
          delBtn.innerHTML = '×';
          delBtn.title = "Eliminar foto";
          delBtn.onclick = function(e) {
            e.stopPropagation(); // Evitar comportamientos no deseados
            divItem.remove();
          };

          divItem.appendChild(imgEl);
          divItem.appendChild(delBtn);

          // Insertar foto después de la tarjeta de "Agregar"
          const addCard = galleryGrid.querySelector('.add-photo-card');
          if(addCard) {
            addCard.insertAdjacentElement('afterend', divItem);
          } else {
            galleryGrid.appendChild(divItem);
          }
        }
        reader.readAsDataURL(file);
      });

      // Limpiar input para permitir subir la misma foto después si se borra
      uploadInput.value = '';
    });
  }
});

/* json ponentes */
const ponentesDB = {
  "Dr. Eduardo Morales Manzanares": {
    isDual: false,
    grado: "Doctor en Ciencias de la Computación",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/eduardomorales.png',
    semblanza: `Egresado de Ingeniería Física de la Universidad Autónoma Metropolitana, con Maestría en Inteligencia Artificial por la Universidad de Edimburgo y Doctorado en Computación por el Turing Institute–Universidad de Strathclyde, en Escocia.<br><br>Es Investigador Titular C del INAOE, miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel 3, y de la Academia Mexicana de Ciencias. Es también egresado distinguido de la UAM.<br><br>Actualmente es Presidente de la Academia Mexicana de Computación, de la cual fue miembro fundador. Cuenta con más de 250 publicaciones en congresos, revistas y capítulos de libros.<br><br>Su trabajo de investigación se enfoca en aprendizaje computacional y robótica.`,
    cita: ""
  },
  "Dr. Miguel González Mendoza": {
    isDual: false,
    grado: "Doctor en Inteligencia Artificial",
    institucion_corta: "ITESM",
    facultad: "Campus Edo. Mex.",
    institucion_larga: "Tecnológico de Monterrey",
    foto: 'img/miguelgonzalez.png',
    semblanza: `Doctor en Inteligencia Artificial por el Instituto Nacional de Ciencias Aplicadas de Toulouse, Francia, es profesor investigador del Tecnológico de Monterrey, especializado en Machine Learning, Data Management y Visión por Computadora.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel II, de la Academia Mexicana de Ciencias y de la Academia Mexicana de Computación. Fue Presidente de la Sociedad Mexicana de Inteligencia Artificial.<br><br>Cuenta con más de 160 publicaciones científicas y ha dirigido 17 tesis doctorales y 34 de maestría. Ha coordinado proyectos de investigación nacionales, a través de SECIHTI, y europeos, con la Comisión Europea.<br><br>Su trayectoria en IA ha sido reconocida internacionalmente, incluyendo su participación como Joven Científico en el Foro Económico Mundial y como Editor Asociado de revistas científicas de Springer Nature y Frontiers in Artificial Intelligence. Actualmente también se desempeña como consultor en transformación digital e Inteligencia Artificial.`,
    cita: ""
  },
  "Dr. Raúl Monroy Borja": {
    isDual: false,
    grado: "Doctor en Inteligencia Artificial",
    institucion_corta: "ITESM",
    facultad: "Campus Edo. Mex.",
    institucion_larga: "Tecnológico de Monterrey",
    foto: 'img/raulmonroy.png',
    semblanza: `Doctor en Inteligencia Artificial por la Universidad de Edimburgo (1998), ha desarrollado gran parte de su trayectoria académica en el Tecnológico de Monterrey, donde es Profesor Investigador Titular desde 2010.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel III, de la Academia Mexicana de Ciencias y miembro constituyente de la Academia Mexicana de Computación.<br><br>Su investigación se enfoca en la invención de mecanismos de Inteligencia Artificial y su aplicación en ciberseguridad, identificación biométrica y automatización del aprendizaje máquina (Machine Learning). Sus proyectos han recibido financiamiento de organismos nacionales e internacionales, así como de la industria.<br><br>Fue Presidente de la Sociedad Mexicana de Inteligencia Artificial, exCoordinador de la Red Temática en Tecnologías de Información y Comunicaciones del CONACYT y exSecretario Electo de la Academia Mexicana de Computación.`,
    cita: ""
  },
  "Dr. Alejandro Antonio Torres García": {
    isDual: false,
    grado: "Doctor en Ciencias Computacionales",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/alejandrotorres.png',
    semblanza: `Es Investigador Titular A del INAOE y miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel I, así como de la Academia Mexicana de Computación (AMEXCOMP).<br><br>Doctor y Maestro en Ciencias Computacionales por el INAOE, es Ingeniero en Sistemas Computacionales por el Instituto Tecnológico de Tuxtla Gutiérrez. Miembro de las redes temáticas sobre inteligencia computacional aplicada y tecnologías del lenguaje. Realizó una estancia posdoctoral del consorcio Europeo de Investigación en Informática y Matemáticas (ERCIM) en la Universidad Noruega de Ciencia y Tecnología, en Trondheim, Noruega.<br><br>Su investigación abarca el procesamiento y análisis de bioseñales, interfaces cerebro-computadora (BCI), interfaces de voz silente, Machine Learning, Inteligencia Computacional y detección temprana de enfermedades neurodegenerativas y el pensamiento computacional.<br><br>Es autor de 2 libros, 7 capítulos y alrededor de 40 artículos científicos, además de haber dirigido 7 tesis de maestría y 1 de doctorado. Ha realizado estancias de investigación en instituciones de Alemania, Italia, España y Francia.<br><br>Ha sido reconocido con el Premio Joven Talento en Computación AMEXCOMP 2025 y el Premio Estatal de la Juventud de Chiapas 2014 en actividades académicas. Fue asesor líder en las Delegaciones de Chiapas para las XXVII y XXVI Olimpiadas Mexicanas de Informática.`,
    cita: ""
  },
  "Dra. María Lucía Barrón Estrada": {
    isDual: false,
    grado: "Doctora en Filosofía en Ciencias de la Computación",
    institucion_corta: "TecNM",
    facultad: "IT Culiacán",
    institucion_larga: "Tecnológico Nacional de México",
    foto: 'img/marialuisa.png',
    semblanza: `Doctora en Filosofía en Ciencias de la Computación por el Florida Institute of Technology, Florida, EUA; Maestra en Ciencias de la Computación por el Instituto Tecnológico de Toluca y Licenciada en Informática por el Instituto Tecnológico de Culiacán.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores (SNII) desde 1990 y actualmente Investigadora Nacional Nivel III, en el Área IV: Ciencias de la Conducta y la Educación, así como Investigadora Honorífica del SSIT. Desde 1985 labora en el TecNM-Instituto Tecnológico de Culiacán, donde desarrolla investigación en la línea “Tecnologías Inteligentes Aplicadas a la Educación”, orientada al diseño y desarrollo de tecnologías computacionales para el aprendizaje, particularmente Sistemas Afectivos, Tutores Inteligentes y Ambientes Inteligentes de Aprendizaje adaptables a las necesidades cognitivas y afectivas de los estudiantes.<br><br>Cuenta con una amplia producción científica en revistas y congresos nacionales e internacionales, donde ha obtenido en 4 ocasiones el premio al mejor artículo. Es columnista permanente de Komputer Sapiens, revista de divulgación científica de la Sociedad Mexicana de Inteligencia Artificial, y participa activamente en actividades de divulgación.<br><br>Ha contribuido a la formación de investigadores mediante la dirección de tesis y la participación en programas de licenciatura, maestría y doctorado. Entre sus principales reconocimientos destacan el Sol al Mérito en Ciencia y Tecnología (2009), el Premio Sinaloa de Ciencia, Tecnología e Innovación por su trayectoria (2018) y el Premio Eustaquio Buelna (2021), como asesora de la mejor tesis de posgrado.<br><br>Fue presidenta de la Sociedad Mexicana de Ciencia de la Computación (2019-2021) y es vicepresidenta de la Academia Mexicana de Computación (2023-2026).`,
    cita: ""
  },
  "Dr. Ramón Zatarain Cabada": {
    isDual: false,
    grado: "Doctor en Filosofía en Ciencias de la Computación",
    institucion_corta: "TecNM",
    facultad: "IT Culiacán",
    institucion_larga: "Tecnológico Nacional de México",
    foto: 'img/ramonzatarain.png',
    semblanza: `Doctor en Filosofía y Maestro en Ciencias de la Computación por el Florida Institute of Technology, FL, USA, y Licenciado en Informática por el Instituto Tecnológico de Culiacán.<br><br>Miembro del Sistema Nacional de Investigadores desde 1987, actualmente Investigador Nacional Nivel II e investigador honorífico del Sistema Sinaloense de Investigadores y Tecnólogos. Labora en el Tecnológico Nacional de México - Instituto Tecnológico de Culiacán desde 1984 y su trabajo se centra en la línea de investigación “Inteligencia Artificial Aplicada a la Educación” que estudia los modelos educativos para desarrollar tecnologías inteligentes para el aprendizaje, como son los Ambientes Inteligentes y Afectivos de Aprendizaje, utilizando técnicas de inteligencia artificial como el aprendizaje máquina en diferentes tecnologías como la realidad extendida y la IA Generativa.<br><br>Ha participado en la formación de recursos humanos (docencia y dirección de tesis) en programas de licenciatura, maestría y doctorado en el área de Ciencias de la Computación.<br><br>Obtuvo el premio Sinaloa de Ciencia, Tecnología e Innovación en 2017 y participa en diversas asociaciones como SMCC, REDICA, AMEXCOMP, SMIA, entre otras.`,
    cita: ""
  },
  "Dr. Carlos Artemio Coello Coello": {
    isDual: false,
    grado: "Doctor en Ciencias de la Computación",
    institucion_corta: "CINVESTAV",
    facultad: "Departamento de Computación",
    institucion_larga: "Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional",
    foto: 'img/carlosartemio.png',
    semblanza: `Obtuvo un doctorado en ciencias de la computación de la Universidad Tulane (Estados Unidos), en 1996 y desde 2001 es Investigador Titular en el Departamento de Computación del Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV-IPN).<br><br>Ha recibido diversos premios, de entre los que destacan el Premio Nacional de Investigación 2007 en “ciencias exactas” de la Academia Mexicana de Ciencias, el IEEE Kiyo Tomiyasu Award en 2013, el Premio Nacional de Ciencias y Artes 2012, en el área de Ciencias Físico-Matemáticas y Naturales, el 2016 The World Academy of Sciences (TWAS) Award en “Engineering Sciences”, el Premio Luis Elizondo 2019 en la Categoría Científica y Tecnológica y el 2021 IEEE Computational Intelligence Society Evolutionary Computation Pioneer Award por sus “contribuciones a la optimización evolutiva multi-objetivo y a las técnicas de manejo de restricciones”. Es Fellow del IEEE desde 2011.<br><br>Ingresó a El Colegio Nacional el 5 de mayo de 2023.<br><br>Su investigación se centra principalmente en el desarrollo de nuevos algoritmos metaheurísticos bio-inspirados para optimización mono-objetivo y multi-objetivo no lineal.`,
    cita: ""
  },
  "Dr. Hugo Terashima Marín": {
    isDual: false,
    grado: "Doctor en Informática",
    institucion_corta: "ITESM",
    facultad: "Campus Monterrey",
    institucion_larga: "Tecnológico de Monterrey, Campus Monterrey",
    foto: 'img/hugoterashima.png',
    semblanza: `Obtuvo el Doctorado en Informática en el Tecnológico de Monterrey, Campus Monterrey, en 1998. Actualmente se desempeña como Profesor Investigador Titular en la Escuela de Ingeniería y Ciencias y es Miembro del Grupo de Investigación en Inteligencia Artificial Avanzada.<br><br>Sus áreas de investigación abarcan la inteligencia computacional, los modelos heurísticos, metaheurísticos e híperheurísticos para problemas de optimización, la generación automática de algoritmos, así como las aplicaciones de inteligencia artificial y aprendizaje automático. Ha fungido como Investigador Principal en múltiples proyectos financiados por el CONACyT, la industria y diversos entornos, colaborando activamente con investigadores de instituciones nacionales e internacionales.<br><br>Cuenta con un reconocido prestigio académico respaldado por sus membresías en organismos de alto nivel:<br>• Sistema Nacional de Investigadoras e Investigadores (SNII): Nivel II.<br>• Academia Mexicana de Ciencias.<br>• Academia Mexicana de Computación.<br>• Institute of Electrical and Electronics Engineers (IEEE): Miembro Senior.<br><br>Posee una prolífica trayectoria científica con más de 145 artículos publicados en conferencias y revistas indizadas. En el ámbito de la mentoría y formación de recursos humanos de alto nivel, ha supervisado a: 11 Investigadores Posdoctorales, 8 Tesistas Doctorales y 38 Tesistas de Maestría.<br><br>En el Tecnológico de Monterrey, Campus Monterrey, ha desempeñado una destacada labor directiva y de diseño académico, ocupando los siguientes cargos: Líder del Grupo de Investigación en Sistemas Inteligentes. Diseñador y Director del Programa de Posgrado en Ciencias Computacionales. Director del Doctorado en Tecnologías de Información y Comunicaciones. Director de la Maestría en Sistemas Inteligentes. Director del Doctorado en Inteligencia Artificial. Director de Doctorados y Director de Posgrados.`,
    cita: ""
  },
  "Dr. Victor Alejandro González Huitrón": {
    isDual: false,
    grado: "Doctor en Comunicaciones y Electrónica",
    institucion_corta: "TecNM",
    facultad: "IT Querétaro",
    institucion_larga: "Tecnológico Nacional de México",
    foto: 'img/victoralejandro.png',
    semblanza: `Obtuvo el grado de Licenciatura en Ingeniería en Comunicaciones y Electrónica en 2009 con especialidad en Automatización y Control, posteriormente cursó la Maestría en Ciencias de la Ingeniería en Microelectrónica en 2013 y obtuvo el grado de Doctor en Comunicaciones y Electrónica en 2017, por parte del Instituto Politécnico Nacional en la Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME) unidad Culhuacán.<br><br>Desde 2017 a la fecha ha fungido como docente en las áreas de Ingeniería Electrónica, Eléctrica, Biomédica, Mecatrónica y Computación en diversas universidades públicas y privadas. Actualmente se desempeña como profesor e investigador en el Instituto Tecnológico de Querétaro y forma parte del Sistema Nacional de Investigadoras e Investigadores (SNII).<br><br>En el sector profesional e industrial ha destacado en diversos roles técnicos y de investigación: Ingeniero de capacitación y diseño electrónico. Analista de datos para la Comisión Nacional de Seguros y Fianzas. Investigador del programa Cátedras CONACYT. Desarrollador de algoritmos para la industria automotriz.<br><br>Sus áreas de interés científico y tecnológico se centran en: Procesamiento Digital de Imágenes. Visión e Inteligencia Artificial. Análisis de datos. Procesamiento Digital de Señales.`,
    cita: ""
  },
  "Dra. Alicia Morales Reyes": {
    isDual: false,
    grado: "Doctora en Ciencias e Ingeniería",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/aliciamorales.png',
    semblanza: `Obtuvo el grado de Doctorado por el Colegio de Ciencias e Ingeniería de la Universidad de Edimburgo en el Reino Unido en 2011. Su investigación doctoral la desarrolló con el grupo de investigación System Level Integration del Nano and Micro Systems Institute de la Facultad de Ingeniería en la Universidad de Edimburgo.<br><br>En 2006, obtuvo el grado de Maestría en Ciencias en el área de Ciencias Computacionales por el Instituto Nacional de Astrofísica, Óptica y Electrónica en Puebla, México. Concluyó la Licenciatura en Ingeniería Eléctrica y Electrónica en la Facultad de Ingeniería de la Universidad Nacional Autónoma de México en el 2002.<br><br>Actualmente es Investigadora Titular “B” en la Coordinación de Ciencias Computacionales del Instituto Nacional de Astrofísica, Óptica y Electrónica en donde colabora en el Laboratorio de Cómputo Reconfigurable y de Alto Rendimiento. Reconocida desde el 2014 por el Sistema Nacional de Investigadores con el Nivel I.<br><br>Entre sus intereses en investigación están las técnicas del cómputo evolutivo en particular los esquemas descentralizados de estas, así como el diseño de arquitecturas hardware inspiradas en principios biológicos; todo esto aplicado a distintos contextos como optimización, procesamiento de señales e imágenes, automatización en el diseño de modelos y arquitecturas “suaves”, entre otros.`,
    cita: ""
  },
  "Dra. Claudia Feregrino Uribe": {
    isDual: false,
    grado: "Doctora en Ingeniería en Sistemas Digitales",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/claudiaferegrino.png',
    semblanza: `Obtuvo su Doctorado en Ingeniería en Sistemas Digitales en la Universidad de Loughborough, Reino Unido; su Maestría en Ciencias en Ingeniería Eléctrica (especialidad en Telecomunicaciones) por el CINVESTAV-Guadalajara; su Licenciatura en Ingeniería en Sistemas Computacionales por el Tecnológico Nacional de México, Campus Querétaro.<br><br>Es Investigadora Titular en la Coordinación de Ciencias Computacionales del Instituto Nacional de Astrofísica, Óptica y Electrónica (INAOE) en Puebla, donde se desempeña como Directora de Investigación y Encargada del Despacho de los Asuntos de la Dirección de Desarrollo Tecnológico. En esta institución fue fundadora y primera Coordinadora del Programa de Maestría en Ciencias y Tecnologías de Seguridad, además de fungir como responsable del Laboratorio de Ciberseguridad.<br><br>Su línea principal de trabajo es la seguridad informática, enfocándose en Criptografía, Esteganografía, Marcas de agua digitales, y Aplicaciones de seguridad en entornos IoT y sistemas embebidos.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores (SNII) Nivel II. Su trayectoria académica e industrial abarca más de 150 publicaciones en revistas indexadas, congresos internacionales y artículos de divulgación. Ha dirigido 50 tesis en los niveles de doctorado, maestría y licenciatura. Obtención de 3 patentes en marcas de agua digitales. Ha impartido más de 23 cursos a nivel posgrado en el INAOE y otras instituciones.<br><br>Responsable técnica de 9 proyectos de investigación y desarrollo tecnológico financiados por la Secretaría de Marina (SEMAR), Secretaría de la Defensa Nacional (SEDENA), CONACyT y Fondos de Innovación. Ha sido editora de revistas internacionales y fundadora del Capítulo Puebla de la Sociedad de Computación del IEEE, del cual fue presidenta durante dos años. Ha participado activamente en la organización de congresos y talleres académicos como ReConFig, CCIM y tres ediciones de las Reuniones de Ciberseguridad para la Industria 4.0.`,
    cita: ""
  },
  "Dr. Juan Humberto Sossa Azuela": {
    isDual: false,
    grado: "Doctor en Informática",
    institucion_corta: "CIC - IPN",
    facultad: "Centro de Investigación en Computación",
    institucion_larga: "Instituto Politécnico Nacional",
    foto: 'img/juanhumberto.png',
    semblanza: `Obtuvo el grado de Doctor en Informática por el Instituto Nacional Politécnico de Grenoble, Francia. Es profesor de tiempo completo del Instituto Politécnico Nacional y Director del Centro de Investigación en Computación. Es miembro Emérito del Sistema Nacional de Investigadores.<br><br>Es miembro de la Academia Mexicana de Ciencias, miembro de la Academia de Ingeniería y miembro de la Academia Mexicana de Ciencias de la Computación. Es también miembro Senior del Instituto de Ingenieros Eléctricos y Electrónicos (IEEE), de la Sociedad Internacional de Redes Neuronales (INNS) y de la Academia de Maquinaria Computacional (ACM). Es miembro de la Asociación para el Avance de la Inteligencia Artificial (AAII) y Fellow de la Sociedad Mexicana de Inteligencia Artificial (SMIA). Fue presidente de esta Sociedad del 2002 a 2004.<br><br>En 2021 fue galardonado con el Premio Nacional de Computación por parte de la Academia Mexicana de la Computación (AMEXCOMP). En 2023 fue galardonado con el Premio a la Investigación en Instituto Politécnico Nacional en el área de investigación básica. En 2024 recibió por parte del Tecnológico de Estudios Superiores de Ecatepec un Doctorado Honoris Causa. En enero de 2026 fue elevado a la categoría de Académico de Honor por parte de la Academia de Ingeniería México. Finalmente, en mayo de 2026, recibió por parte de la IEEE, Región 9, el reconocimiento de Ingeniero Eminente.<br><br>Es autor de 5 libros de texto, 9 patentes, 36 derechos de autor y más de 550 trabajos de congreso y revista. Ha impartido más de 645 pláticas por invitación. Sus áreas de investigación son en Inteligencia Artificial, Aprendizaje para Máquinas, Redes Neuronales Artificiales, Análisis de Imágenes, Reconocimiento de Patrones, Robótica y Cómputo Neuromórfico.`,
    cita: ""
  },
  "Dr. Aldo Márquez Grajales": {
    isDual: false,
    grado: "Doctor en Inteligencia Artificial",
    institucion_corta: "UAEH",
    facultad: "Área Académica de Computación y Electrónica",
    institucion_larga: "Universidad Autónoma del Estado de Hidalgo",
    foto: 'img/aldomarquez.png',
    semblanza: `Es Licenciado en Informática por parte de la Universidad Veracruzana, tiene la Maestría en Computación Aplicada por parte del Laboratorio Nacional de Informática Avanzada, y posee el Doctorado en Inteligencia Artificial por la Universidad Veracruzana. Sus áreas de interés son: minería de datos en series temporales, visión artificial, cómputo evolutivo y modelos subrogados.<br><br>Ha trabajado como desarrollador de sistemas de 2006 a 2011 en el sector privado, y a partir del 2013 al 2014 en el sector público. Como docente, ha impartido diversas materias en Instituciones de Educación Superior privadas y públicas desde el 2016 a la fecha. Durante el periodo que comprende del 2021 al 2024, realizó dos estancias postdoctorales en el Instituto de Investigaciones en Inteligencia Artificial de la Universidad Veracruzana, México.<br><br>Adicionalmente, ha publicado en revistas cientificas pertenecientes al Journal Citation Reports (JCR) y en congresos nacionales e internacionales. Posee la distinción de Investigador Nacional Nivel I del Sistema Nacional de Investigadoras e Investigadores preteneciente a la Secretaría de Ciencia, Humanidades, Tecnología e Innovación de México.<br><br>Actualmente, se encuentra laborando en la Universidad Autónoma del Estado de Hidalgo dentro del Área Académica de Computación y Electrónica como Profesor Investigador de Tiempo Completo.`,
    cita: ""
  },
  "Dra. Karina Mariela Figueroa Mora": {
    isDual: false,
    grado: "Doctora en Ciencias de la Computación",
    institucion_corta: "UMSNH",
    facultad: "Facultad de Ingeniería Eléctrica",
    institucion_larga: "Universidad Michoacana de San Nicolás de Hidalgo",
    foto: 'img/karinamariela.png',
    semblanza: `Doctora en Ciencias, mención Computación, por la Universidad de Chile, es profesora e investigadora de la Facultad de Ciencias Físico-Matemáticas de la Universidad Michoacana de San Nicolás de Hidalgo.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel I, y sus principales líneas de investigación se enfocan en el diseño y análisis de algoritmos, problemas de búsqueda y Recuperación de Información, áreas en las que cuenta con diversas publicaciones científicas.<br><br>Es miembro regular y Secretaria del Consejo Directivo de la Academia Mexicana de Computación, además de fundadora del Grupo de Mujeres en la Computación. Fue Presidenta de la Sociedad Mexicana de Ciencia de la Computación (2021–2023), contribuyendo activamente al fortalecimiento de la computación en México.<br><br>Actualmente es Editora en Jefe de Komputer Sapiens, revista de divulgación especializada en Inteligencia Artificial, y colabora con Amphora Health en proyectos de ciencia de datos aplicada al ámbito médico.<br><br>Participa en la organización de iniciativas académicas como el Seminario Iberoamericano de Pensamiento Computacional (SIPECO) y la Escuela Nacional de Aprendizaje de Inteligencia Computacional (SENAIC).<br><br>Convencida de que la educación es el motor de transformación de una sociedad, combina la investigación, la divulgación y la formación de nuevas generaciones en computación.`,
    cita: `"La educación es la principal vía de transformación de un país."`
  },
  "Dra. Yasmín Hernández Pérez": {
    isDual: false,
    grado: "Doctora en Ciencias Computacionales",
    institucion_corta: "Cenidet",
    facultad: "Campus Centro Nacional de Investigación y Desarrollo Tecnológico",
    institucion_larga: "Tecnológico Nacional de México",
    foto: 'img/yasminhernandez.png',
    semblanza: `Doctora en Ciencias Computacionales por el Tecnológico de Monterrey, Maestra en Ciencias Computacionales por Cenidet e Ingeniera en Sistemas Computacionales por el Instituto Tecnológico de Ciudad Madero.<br><br>Durante su formación doctoral realizó una estancia de investigación en la Universidad de la Columbia Británica (UBC), en Vancouver, Canadá.<br><br>Es profesora investigadora del Departamento de Ciencias Computacionales de Cenidet y cuenta con experiencia como investigadora en el Instituto Nacional de Electricidad y Energías Limpias.<br><br>Su investigación se centra en la Inteligencia Artificial, particularmente en sistemas tutores inteligentes, minería de datos educativos, computación afectiva y procesamiento de lenguaje natural.<br><br>Es autora de más de 150 publicaciones científicas en revistas, libros y memorias de congresos internacionales, además de haber dirigido tesis de licenciatura, maestría y doctorado. Es columnista de la revista Komputer Sapiens.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores, la Academia Mexicana de Computación, la Sociedad Mexicana de Ciencia de la Computación, la Sociedad Mexicana de Inteligencia Artificial y la Asociación Mexicana de Procesamiento de Lenguaje Natural.<br><br>También participa en la Red Temática en Inteligencia Computacional Aplicada (RedICA) del CONACYT.`,
    cita: ""
  },
  "Dr. Efrén Mezura Montes": {
    isDual: false,
    grado: "Doctor en Ciencias",
    institucion_corta: "UV",
    facultad: "Instituto de Investigaciones en Inteligencia Artificial",
    institucion_larga: "Universidad Veracruzana",
    foto: 'img/efrenmezura.png',
    semblanza: `Director del Instituto de Investigaciones en Inteligencia Artificial de la Universidad Veracruzana. Se interesa por el diseño y el estudio de algoritmos inspirados en la naturaleza para el aprendizaje computacional y la optimización, con aplicaciones en los ámbitos médico y de la ingeniería. Ha publicado más de 200 artículos y cuatro libros, que suman más de 12,600 citas en Google Scholar.<br><br>Es miembro Nivel III del SNII, presidente de la Sociedad Mexicana de Ciencia de la Computación, miembro regular de la Academia Mexicana de Ciencias y de su Comisión de Premios, miembro regular de la Academia Mexicana de Computación y miembro del Comité Técnico Asesor de la Red Nacional de Inteligencia Computacional Aplicada.<br><br>Es editor asociado de ocho revistas JCR y miembro de comités técnicos internacionales de la IEEE en inteligencia artificial. Recibió el Premio Estatal de Ciencia y Tecnología 2023 en Veracruz y la Medalla al Mérito de la Universidad Veracruzana en 2024.<br><br>Actualmente realiza investigaciones sobre la inteligencia artificial explicable y verde y, además, es un entusiasta divulgador de la ciencia que busca socializar, desmitificar y fomentar el uso ético de la inteligencia artificial.`,
    cita: ""
  },
  "Dr. Leopoldo Altamirano Robles": {
    isDual: false,
    grado: "Doctor en Informática",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/leopoldoaltamirano.png',
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  },
  "Dr. Salvador Elías Venegas Andraca": {
    isDual: false,
    grado: "Doctor en Física",
    institucion_corta: "ITESM",
    facultad: "Campus Edo. Mex",
    institucion_larga: "Tecnológico de Monterrey",
    foto: 'img/salvadorelias.png',
    semblanza: `Científico, emprendedor y consultor mexicano. Es Doctor en Física y Maestro en Ciencias por la Universidad de Oxford, Maestro en Administración e Ingeniero en Sistemas Electrónicos por el Tecnológico de Monterrey. Realizó una estancia postdoctoral como profesor visitante en Harvard University.<br><br>Es profesor del Tecnológico de Monterrey y de la Facultad de Ciencias de la UNAM, además de fundador e investigador principal de The Unconventional Computing Lab. Es reconocido como pionero de la computación cuántica en México y referente internacional en el área.<br><br>Su investigación abarca algoritmos cuánticos, Quantum Machine Learning, Inteligencia Artificial, caminatas cuánticas, procesamiento cuántico de imágenes, biología cuántica y ciberseguridad cuántica.<br><br>Cuenta con más de 60 publicaciones científicas, dos libros y más de 3,100 citas en Web of Science. Es coautor de 13 white papers sobre tecnología cuántica y ciberseguridad del Foro Económico Mundial y ha impartido más de 300 conferencias y cursos en 16 países.<br><br>Es miembro de la Academia Mexicana de Ciencias, investigador Nivel III del Sistema Nacional de Investigadoras e Investigadores, Senior Member y Distinguished Speaker de ACM, y miembro del Quantum Economy Network del Foro Económico Mundial. Desde 2020 forma parte del 2 % de los científicos más citados del mundo en su área de especialidad.`,
    cita: ""
  },
  "Dra. Daniela Alejandra Moctezuma Ochoa": {
    isDual: false,
    grado: "Doctora en Tecnologías de la Información y Sistemas Informáticos",
    institucion_corta: "CentroGEO",
    facultad: "Centro de Investigación en Ciencias de Información Geoespacial",
    institucion_larga: "Centro de Investigación en Ciencias de Información Geoespacial",
    foto: 'img/danielaalejandra.png',
    semblanza: `Doctora en Tecnologías de la Información y Sistemas Informáticos por la Universidad Rey Juan Carlos, España. Actualmente es profesora-investigadora del Centro de Investigación en Ciencias de Información Geoespacial (CentroGEO), en su sede de Aguascalientes, donde se desempeña como Coordinadora Académica.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel I y fue reconocida en 2024 con el Premio Talento Joven en Computación, otorgado por la Academia Mexicana de Computación.<br><br>Sus principales líneas de investigación incluyen Visión Artificial, Aprendizaje Automático, clasificación de texto, percepción remota, Visión y Lenguaje y sistemas inteligentes de videovigilancia.<br><br>Ha dirigido y colaborado en proyectos de investigación básica y aplicada, desarrollando soluciones orientadas a instituciones públicas y de gobierno, con énfasis en la aplicación de tecnologías de Inteligencia Artificial para resolver problemas de impacto social.`,
    cita: ""
  },
  "Dra. Delia Irazú Hernández Farías": {
    isDual: false,
    grado: "Investigadora",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/delia.png',
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  },
  "Dr. Humberto Pérez Espinosa": {
    isDual: false,
    grado: "Doctor en Ciencias Computacionales",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/humbertoperez.png',
    semblanza: `Doctor y Maestro en Ciencias Computacionales por el INAOE, y Licenciado en Ciencias Computacionales por la Benemérita Universidad Autónoma de Puebla. Su trayectoria combina la investigación científica, el desarrollo tecnológico y la transferencia de conocimiento.<br><br>Actualmente es Investigador de la Coordinación de Ciencias Computacionales del INAOE y miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel II. Previamente se desempeñó como investigador en la Unidad de Transferencia Tecnológica Tepic del CICESE.<br><br>Cuenta con experiencia en la industria tecnológica y es fundador de Prointbis SAPI de C.V., empresa dedicada al desarrollo de tecnologías para el reconocimiento de emociones en la voz.<br><br>Sus líneas de investigación incluyen paralingüística computacional, análisis inteligente de audio, computación afectiva y procesamiento de bioseñales.<br><br>Es autor de más de 60 publicaciones científicas y ha contribuido a la formación de recursos humanos mediante la dirección de tesis de licenciatura, maestría y doctorado. Su trabajo en desarrollo tecnológico ha sido reconocido por la Comisión Transversal de Tecnología del SNII por la creación de productos innovadores.`,
    cita: ""
  },
  "Dr. Iván Alejandro Gutierrez Giles": {
    isDual: false,
    grado: "Doctor en Ingeniería",
    institucion_corta: "INAOE",
    facultad: "Ciencias Computacionales",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/ivanalejandro.png',
    semblanza: `Es Investigador Titular A de la Coordinación de Ciencias Computacionales del INAOE. Doctor en Ingeniería por la Universidad Nacional Autónoma de México (UNAM), realizó estancias de investigación postdoctoral en instituciones de Italia y México, entre ellas la Università degli Studi di Napoli Federico II, CINVESTAV y el Instituto de Ciencias Aplicadas y Tecnología de la UNAM.<br><br>Es miembro del Sistema Nacional de Investigadoras e Investigadores, Nivel I, y Miembro Senior de IEEE desde 2025. Actualmente se desempeña como Coordinador de Actividades Educativas de la Sección Puebla de IEEE y participa en diversas asociaciones científicas nacionales.<br><br>Cuenta con una amplia producción académica, que incluye un libro de texto, 18 artículos en revistas internacionales, 28 artículos en congresos y 4 capítulos de libro.<br><br>Sus líneas de investigación se centran en robótica, manipulación y teleoperación, robótica de servicio, aplicaciones biomédicas, vehículos aéreos no tripulados (UAV), control automático, estimación de señales y sistemas electromecánicos.`,
    cita: ""
  },
  "Dr. Carlos Alberto Reyes García": {
    isDual: false,
    grado: "Investigador",
    institucion_corta: "INAOE",
    facultad: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    institucion_larga: "Instituto Nacional de Astrofísica, Óptica y Electrónica, INAOE",
    foto: 'img/carlosalberto.png',
    semblanza: `La semblanza de este ponente estará disponible pronto.`,
    cita: ""
  },

  // CONFIGURACIÓN PONENTES DUALES
  "Dra. Nancy Pérez Castro y Dra. Adriana Laura López Lobato": {
    isDual: true,
    grado: "Investigadoras",
    nombre1: "Dra. Nancy Pérez Castro",
    fac1: "Universidad de Papaloapan",
    inst1: "Universidad de Papaloapan",
    foto1: 'img/iav1.png',
    nombre2: "Dra. Adriana Laura López Lobato",
    fac2: "IIIA - UV",
    inst2: "Universidad Veracruzana",
    foto2: 'img/iav2.png',
    semblanza: `La Inteligencia Artificial (IA) transforma la ciencia, la industria y la sociedad, pero su creciente complejidad plantea un reto clave: la sostenibilidad ambiental.<br><br>Este tutorial ofrece una introducción a los conceptos de IA Verde (Green AI), distinguiendo entre green-by-AI (usar IA para fines ambientales) y green-in-AI (reducir el impacto de la propia IA), con énfasis en este último aterrizado a algoritmos evolutivos.<br><br>De forma práctica, se mostrará un ejemplo variando operadores de un algoritmo, midiendo su huella de carbono con CodeCarbon, herramienta que permite registrar el consumo energético y las emisiones de carbono estimadas durante la ejecución.`,
    cita: ""
  },
  "Dr. José Luis Morales Reyes y Dr. Héctor Gabriel Acosta Mesa": {
    isDual: true,
    grado: "Investigadores",
    nombre1: "Dr. José Luis Morales Reyes",
    fac1: "Instituto de Investigaciones en Inteligencia Artificial",
    inst1: "Universidad Veracruzana",
    foto1: 'img/iag1.png',
    nombre2: "Dr. Héctor Gabriel Acosta Mesa",
    fac2: "Instituto de Investigaciones en Inteligencia Artificial",
    inst2: "Universidad Veracruzana",
    foto2: 'img/iag2.png',
    semblanza: `La semblanza de estos ponentes estará disponible pronto.`,
    cita: ""
  },
  "Dr. Leopoldo Altamirano Robles y Dr. José de Jesús Velázquez Arreola": {
    isDual: true,
    grado: "Investigadores",
    nombre1: "Dr. Leopoldo Altamirano Robles",
    fac1: "Ciencias Computacionales",
    inst1: "INAOE",
    foto1: 'img/leopoldoaltamirano.png',
    nombre2: "Dr. José de Jesús Velázquez Arreola",
    fac2: "Ciencias Computacionales",
    inst2: "INAOE",
    foto2: 'img/josejesus.png',
    semblanza: `La semblanza de estos ponentes estará disponible pronto.`,
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
    isDual: false,
    grado: "Información próximamente",
    institucion_corta: "Institución no especificada",
    facultad: "",
    institucion_larga: "Institución no especificada",
    foto: 'img/ponente.png',
    semblanza: "La semblanza de este ponente estará disponible pronto.",
    cita: ""
  };

  document.getElementById('mod-type').innerText = type;
  document.getElementById('mod-title').innerText = title;
  document.getElementById('mod-date').innerText = date;
  document.getElementById('mod-time').innerText = time;

  // RUTEO DUAL VS INDIVIDUAL
  if (data.isDual) {
    document.getElementById('single-speaker-info').style.display = 'none';
    document.getElementById('dual-speaker-info').style.display = 'flex';
    document.getElementById('mod-photo-container').classList.add('dual');
    document.getElementById('mod-photo2').style.display = 'inline-block';

    document.getElementById('mod-photo').src = data.foto1;
    document.getElementById('mod-photo2').src = data.foto2;

    document.getElementById('mod-name1').innerText = data.nombre1;
    document.getElementById('mod-facultad1').innerText = data.fac1;
    document.getElementById('mod-facultad1').style.display = data.fac1 ? 'block' : 'none';
    document.getElementById('mod-inst1').innerText = data.inst1;

    document.getElementById('mod-name2').innerText = data.nombre2;
    document.getElementById('mod-facultad2').innerText = data.fac2;
    document.getElementById('mod-facultad2').style.display = data.fac2 ? 'block' : 'none';
    document.getElementById('mod-inst2').innerText = data.inst2;

    document.getElementById('mod-sem-name').innerText = data.nombre1 + " & " + data.nombre2;
  } else {
    document.getElementById('single-speaker-info').style.display = 'block';
    document.getElementById('dual-speaker-info').style.display = 'none';
    document.getElementById('mod-photo-container').classList.remove('dual');
    document.getElementById('mod-photo2').style.display = 'none';

    document.getElementById('mod-photo').src = data.foto;
    document.getElementById('mod-name').innerText = name;

    const facultadElem = document.getElementById('mod-facultad');
    if (data.facultad && data.facultad.trim() !== "") {
      facultadElem.innerText = data.facultad;
      facultadElem.style.display = "block";
    } else {
      facultadElem.style.display = "none";
    }

    document.getElementById('mod-institution-larga').innerText = data.institucion_larga || data.institucion_corta;
    document.getElementById('mod-sem-name').innerText = name;
  }

  document.getElementById('mod-sem-title').innerText = title;
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
