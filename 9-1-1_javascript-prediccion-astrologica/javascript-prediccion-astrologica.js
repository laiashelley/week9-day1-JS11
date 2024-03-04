// Bienvenid@ a la pitonisa Astro-Loca! Dime tu signo del zodiaco y te diré como irá tu semana :-)

// - Pedir mediante un input en pantalla tu horóscopo.

// - Enviarlo mediante pulsar un botón, imagen o texto

// - que ejecute una función dentro de la cual debe hallarse un switch/case

// - El switch case debe mostrar en un espacio destinado a tal fin, un texto con la predicción, y una imagen. La imagen no hace falta que sea diferente en cada caso, pero sí al menos una general y otra para el caso en el que no se entre correctamente el signo del zodiaco.

function descubreHoroscopo() {
  let tuHoroscopo = document.querySelector("#horoscopo").value.toLowerCase();
  console.log(tuHoroscopo);
  let imagenHoroscopo = document.querySelector(".imagenHoroscopo");
  let textoHoroscopo = document.querySelector("#textoHoroscopo");

  let textImage = document.querySelector(".image-text");

  switch (tuHoroscopo) {
    case "aries":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/aries.png')";
      textoHoroscopo.innerHTML =
        "Para Aries, hoy es un día para tomar decisiones importantes en el trabajo o en temas financieros. Confía en tu intuición y actúa con determinación para alcanzar tus metas.";
      break;
    case "tauro":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/taurus.png')";
      textoHoroscopo.innerHTML =
        "Hoy, Tauro, es un buen momento para dedicarte a actividades creativas o pasatiempos que te apasionen. Mantén la calma en situaciones desafiantes y busca el equilibrio en tus relaciones personales.";
      break;
    case "geminis":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/gemini.png')";
      textoHoroscopo.innerHTML =
        "Hoy, Géminis, es probable que te encuentres con oportunidades emocionantes para expandir tus horizontes. Mantén una mente abierta y aprovecha las nuevas experiencias que se presenten en tu camino.";
      break;
    case "cancer":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/cancer.PNG')";
      textoHoroscopo.innerHTML =
        "Hoy, Cáncer, es importante que te enfoques en cuidar tu bienestar emocional. Dedica tiempo a ti mismo para recargar energías y enfrentar cualquier desafío con renovada fuerza y determinación.";
      break;
    case "leo":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/leo.png')";
      textoHoroscopo.innerHTML =
        "Hoy, Leo, es probable que te encuentres en el centro de atención, pero recuerda mantener la humildad. Confía en tu intuición para tomar decisiones importantes y busca equilibrar tus responsabilidades personales y profesionales.";
      break;
    case "virgo":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/virgo.PNG')";
      textoHoroscopo.innerHTML =
        "Hoy, Virgo, es un buen momento para enfocarte en la organización y la planificación. Aprovecha tu habilidad para analizar situaciones y encontrar soluciones prácticas. Mantén la calma ante los desafíos y confía en tu capacidad para superarlos.";
      break;
    case "libra":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/libra.jpg')";
      textoHoroscopo.innerHTML =
        "Hoy, Libra, es un día para cultivar relaciones cercanas y armonía en tu entorno. Busca el equilibrio entre tus responsabilidades y tu bienestar personal. Confía en tu intuición para tomar decisiones importantes en el ámbito laboral y emocional.";
      break;
    case "escorpio":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/scorpio.PNG')";
      textoHoroscopo.innerHTML =
        "Hoy, Escorpio, es posible que te encuentres en un período de transformación personal. Aprovecha la oportunidad para dejar atrás lo que ya no te sirve y enfócate en tus metas a largo plazo. Confía en tu instinto y sé valiente en la búsqueda de tu felicidad.";
      break;
    case "sagitario":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/sagitarius.PNG')";
      textoHoroscopo.innerHTML =
        "Hoy, Sagitario, es un día para explorar nuevas ideas y aventuras. Mantén una mente abierta y sé receptivo a las oportunidades que se presenten en tu camino. Confía en tu intuición y sigue tu pasión para alcanzar tus metas.";
      break;
    case "capricornio":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/capricorn.PNG')";
      textoHoroscopo.innerHTML =
        "Hoy, Capricornio, es un buen momento para enfocarte en tus metas profesionales y financieras. Mantén la disciplina y la determinación para alcanzar el éxito. Aprovecha tu habilidad para planificar a largo plazo y toma decisiones prudentes para asegurar tu futuro";
      break;
    case "acuario":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/aquarius.PNG')";
      textoHoroscopo.innerHTML =
        "Hoy, Acuario, es posible que te sientas impulsado por tu creatividad y originalidad. Aprovecha este momento para expresar tus ideas de manera innovadora y buscar soluciones únicas a los desafíos que enfrentas. Mantén una mente abierta y sé flexible en tus enfoques";
      break;
    case "piscis":
      textImage.style.display = "block";
      imagenHoroscopo.style.backgroundImage = "url('/img/pisces.jpg')";
      textoHoroscopo.innerHTML =
        "Hoy, Piscis, es importante que escuches tu intuición y te conectes con tu mundo interior. Dedica tiempo a la reflexión y la meditación para encontrar claridad en tus pensamientos y emociones. Confía en tu intuición para tomar decisiones importantes y nutre tus relaciones cercanas con amor y comprensión.";
      break;
    default:
        textImage.style.display = "block";
        imagenHoroscopo.style.backgroundImage = "url('/img/error.jpg')";
        imagenHoroscopo.style.backgroundPosition = "center";
        textoHoroscopo.innerHTML =
        "Debes introducir alguno de los horoscopos.";
  }
}

function restablecer(){
    location.reload();
}