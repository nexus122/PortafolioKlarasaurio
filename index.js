let continer = document.querySelector(".principal");
let filter = document.querySelector(".title").textContent
let modal = document.querySelector(".modal");
let closeModal = document.querySelector("#close");

closeModal.addEventListener("click", function (){
    modal.style.display = "none";
})


async function readData() {
    let data = await fetch("[
        {
            "id": 0,
            "nombre": "Bad idea",
            "descripcion": "El cartel Bad Idea encuentra su origen en la inspiración que surgió al escuchar la canción Bad Idea de Girl in red. A través del uso de Photoshop, busqué transmitir una imagen que reflejara la rebeldía, destacando la idea de que aunque algo pueda parecer tentador y jugoso, podría ser una mala idea. Quise plasmar la noción de que la experiencia y las consecuencias se manifiestan posteriormente, y que, paradójicamente, una mala idea podría no ser tan negativa como parece si se disfruta plenamente y se asume la responsabilidad de las consecuencias que puedan surgir.",
            "img": "./img/Bad idea.jpg",
            "category":"Diseño grafico",
            "gird-row": "3",
            "col-span": "2"
        },
        {
            "id": 1,
            "nombre": "Oso",
            "descripcion": "El cartel Oso fue concebido después de mi visita a una reserva natural en Galicia, específicamente en Marselle. Allí, presencié cómo un oso en cautiverio jugaba de manera curiosa al estamparse contra el cristal para asustar a los niños que lo observaban. Utilizando Photoshop, me embarqué en un experimento visual con el objetivo de capturar la agresividad y el dinamismo fascinante de este animal. El diseño no solo busca transmitir la imponente presencia del oso, sino también resaltar su aspecto lúdico y la diversión que puede encontrar incluso en situaciones que podrían ser percibidas como amenazadoras.",
            "img": "./img/oso.png",
            "category":"Diseño grafico",
            "gird-row": "2",
            "col-span": "1"
        },
        {
            "id": 3,
            "nombre": "Fuck off",
            "descripcion": "El cartel representa mi homenaje personal a Vincent van Gogh, mediante la reinterpretación de su obra maestra que más me fascina. Utilizando habilidades en Photoshop, he llevado a cabo una transformación que fusiona elementos retro futuristas y neo punk, llevando la pieza de arte de un extremo a otro del espectro estilístico.",
            "img": "./img/Fuck off.jpg",
            "category":"Diseño grafico",
            "gird-row": "2",
            "col-span": "1"
        },
        {
            "id": 4,
            "nombre": "Doctor who",
            "descripcion": "El cartel de fan art se inspira en mi serie favorita de la infancia, Doctor Who. En este caso, he seleccionado a uno de los personajes que más me intrigó y que generó emociones intensas en mí: los Ángeles Llorosos. Mi objetivo ha sido captar la esencia única de la serie, buscando un equilibrio entre un diseño tenebroso y, al mismo tiempo, rindiendo homenaje a mi devoción como fan.",
            "img": "./img/Doctor who.png",
            "category":"Diseño grafico",
            "gird-row": "2",
            "col-span": "2"
        },
        {
            "id":5,
            "nombre": "Damned",
            "descripcion": "El cartel Damned tiene su origen en una experiencia personal de decepción amorosa que atravesé. Inspirado por la canción Damned de White Buffalo, este proyecto se convirtió en una poderosa vía para canalizar mi rabia y frustración. La creación del cartel me permitió confrontar la sensación de estar maldita y de carecer de suerte en el amor, temas que resonaban con la música que me inspiró.",
            "img": "./img/Damned.png",
            "category":"Diseño grafico",
            "gird-row": "2",
            "col-span": "1"
        },
        {
            "id":6,
            "nombre": "Medusa",
            "descripcion": "La reinterpretación futurista de Medusa no solo busca reflejar mi enfado, sino también transmitir una sensación de empoderamiento y transformación. La elección de Medusa, conocida por su mirada petrificante, simboliza mi determinación de enfrentar y desafiar las adversidades. Este proyecto artístico se convierte así en un medio para liberar y comunicar mis emociones, transformando la rabia en una forma de expresión creativa y empoderadora.",
            "img": "./img/medusa.jpg",
            "category":"Diseño grafico",
            "gird-row": "1",
            "col-span": "1"
        },
        {
            "id":7,
            "nombre": "Tomorrowland",
            "descripcion": "El cartel que presento es el resultado de un proyecto para clase centrado en los colores RGB, donde exploré la creación de un festival ficticio. Este trabajo me llevó a salir de mi zona de confort al adoptar el estilo vaporwave.",
            "img": "./img/tomorrrwland.png",
            "category":"Diseño grafico",
            "gird-row": "1",
            "col-span": "1"
    
        },
        {
            "id":8,
            "nombre": "¿Aburrido? Léeme",
            "descripcion": "¿Aburrido? Léeme marca mi incursión en el mundo de la escritura, siendo mi primer libro. Este proyecto surgió en el contexto de una tarea para la clase de tipografía, donde la intención principal era enseñar a los niños sobre las diferentes familias tipográficas mediante juegos y pasatiempos creativos. Trabajar en esta obra fue una experiencia colaborativa significativa, ya que la coautora, Anna Luna Siemontowitz, y yo compartimos ideas y esfuerzos para dar vida a esta propuesta educativa",
            "img": "./img/aburridouno.jpg",
            "category":"Diseño editorial",
            "gird-row": "3",
            "col-span": "1"
        },
        {
            "id":9,
            "nombre": "¿Aburrido? Léeme",
            "descripcion": "El libro no solo busca introducir conceptos tipográficos de manera lúdica, sino que también refleja mi capacidad para aplicar conocimientos académicos en un formato accesible y atractivo para un público infantil. A través de esta obra, Anna Luna y yo hemos creado un recurso educativo divertido que aspira a despertar el interés de los niños por el fascinante mundo de la tipografía.",
            "img": "./img/aburridodos.jpg",
            "category":"Diseño editorial",
            "gird-row": "2",
            "col-span": "1"
        },
        {
            "id":10,
            "nombre": "¿Aburrido? Léeme",
            "descripcion": "¿Aburrido? Léeme marca mi incursión en el mundo de la escritura, siendo mi primer libro. Este proyecto surgió en el contexto de una tarea para la clase de tipografía, donde la intención principal era enseñar a los niños sobre las diferentes familias tipográficas mediante juegos y pasatiempos creativos. Trabajar en esta obra fue una experiencia colaborativa significativa, ya que la coautora, Anna Luna Siemontowitz, y yo compartimos ideas y esfuerzos para dar vida a esta propuesta educativa",
            "img": "./img/aburridotres.jpg",
            "category":"Diseño editorial",
            "gird-row": "1",
            "col-span": "1"
        },
        {
            "id":11,
            "nombre": "Klaramente",
            "descripcion": "Klaramente marca mi segunda incursión en la escritura y edición de libros, llevándome a explorar una narrativa única y provocadora. Este libro narra una fascinante aventura a través de un personaje femenino, explorando cómo, desde su infancia hasta la vejez, va perdiendo puntos de inocencia debido a los desencuentros machistas que encuentra en su camino.",
            "img": "./img/2.png",
            "category":"Diseño editorial",
            "gird-row": "2",
            "col-span": "1"
        },
        {
            "id":12,
            "nombre": "Klaramente",
            "descripcion": "La historia se presenta como una sátira irónica del mundo actual, cuestionando las normas sociales anticuadas y los roles de género arraigados en la sociedad. A través de esta obra, busco desafiar las percepciones convencionales y generar reflexión sobre las estructuras y expectativas impuestas a las mujeres. Klaramente se convierte así en una expresión artística que pretende desafiar, entretener y provocar una profunda reflexión sobre las complejidades del mundo contemporáneo y las luchas contra las desigualdades de género.",
            "img": "./img/3.png",
            "category":"Diseño editorial",
            "gird-row": "1",
            "col-span": "1"
        },
        {
            "id":13,
            "nombre": "Klaramente",
            "descripcion": "La historia se presenta como una sátira irónica del mundo actual, cuestionando las normas sociales anticuadas y los roles de género arraigados en la sociedad. A través de esta obra, busco desafiar las percepciones convencionales y generar reflexión sobre las estructuras y expectativas impuestas a las mujeres. Klaramente se convierte así en una expresión artística que pretende desafiar, entretener y provocar una profunda reflexión sobre las complejidades del mundo contemporáneo y las luchas contra las desigualdades de género.",
            "img": "./img/1.png",
            "category":"Diseño editorial",
            "gird-row": "1",
            "col-span": "1"
        },
        {
            "id":14,
            "nombre": "Urban District",
            "descripcion": "Urban district es una revista que concebí como parte de un proyecto para la clase de proyectos. El diseño editorial de esta publicación se caracteriza por su frescura, modernidad y el objetivo claro de ser lo más urbano e innovador posible.",
            "img": "./img/urban1.png",
            "category":"Diseño editorial",
            "gird-row": "2",
            "col-span": "1"
        },
        {
            "id":15,
            "nombre": "Urban District",
            "descripcion": "A través de la elección de elementos visuales, tipografías y composiciones, busqué capturar la esencia vibrante y dinámica de la vida urbana. El diseño no solo aspira a ser estéticamente atractivo, sino también funcional y relevante para su audiencia. Urban District se presenta como una ventana a la cultura urbana contemporánea, donde la creatividad y la innovación convergen para ofrecer una experiencia editorial única y emocionante. Este proyecto refleja mi capacidad para traducir conceptos y temas específicos en diseños visuales que conectan de manera efectiva con la audiencia objetivo.",
            "img": "./img/urban2.png",
            "category":"Diseño editorial",
            "gird-row": "2",
            "col-span": "1"
    
        },
        {
            "id":16,
            "nombre": "Mis Demonios",
            "descripcion": "La ilustración que presento surge de mi deseo de representar, a través de un autoretrato, los demonios internos que todos llevamos dentro. La obra busca capturar esa parte oscura y sombría que reside en nuestro interior, centrándome en la expresión de mi ira interna. A través de la caracterización propia de un demonio, he creado una representación visual de esos aspectos más turbulentos y complejos de mi ser.",
            "img": "./img/demoniyo.png",
            "category":"ilustración",
            "gird-row": "1",
            "col-span": "1"
        },
        {
            "id":17,
            "nombre": "Old School",
            "descripcion": " La ilustración que presento es una reinterpretación de un dibujo propio, creado en un momento significativo de mi vida: cuando decidí independizarme en Galicia. La calavera desenfadada y de estilo old school encapsula la valentía que sentí al tomar la decisión de abandonar Barcelona a los 18 años y aventurarme en Vigo.",
            "img": "./img/calavera.png",
            "category":"ilustración",
            "gird-row": "1",
            "col-span": "1"
    
        },
        {
            "id":18,
            "nombre": "Alien Ravero",
            "descripcion": "La ilustración de este alien, repleto de ojos y con un toque ravero, surge de un impulso creativo originado en el aburrimiento. La obra refleja mi deseo de fusionar los elementos que más me gustan y que caracterizan mis dibujos: aliens, ojos, cuernos y una vibrante gama de colores.",
            "img": "./img/demonio.jpg",
            "category":"ilustración",
            "gird-row": "2",
            "col-span": "1"
        },
        {
            "id":19,
            "nombre": "Corazón roto",
            "descripcion": "Esta ilustración emerge de circunstancias desafortunadas que me condujeron a dejar atrás la autocompasión. Marca un punto en el cual mi propio corazón dice basta y anhela un nuevo comienzo en el año que se avecina. La obra visual encarna mi resiliencia y mi esencia más profunda. La elección de representar mi corazón, el epicentro de las emociones y la vitalidad, como el punto de partida para una nueva etapa, añade una dimensión simbólica profunda a la ilustración. Este trabajo artístico se convierte en una manifestación visual de mi fuerza interior y mi disposición para transformar las experiencias difíciles en oportunidades de crecimiento y renacimiento.",
            "img": "./img/koraaaaa.png",
            "category":"ilustración",
            "gird-row": "1",
            "col-span": "1"
            
        },
        {
            "id":19,
            "nombre": "Corazón roto",
            "descripcion": "Esta ilustración emerge de circunstancias desafortunadas que me condujeron a dejar atrás la autocompasión. Marca un punto en el cual mi propio corazón dice basta y anhela un nuevo comienzo en el año que se avecina. La obra visual encarna mi resiliencia y mi esencia más profunda. La elección de representar mi corazón, el epicentro de las emociones y la vitalidad, como el punto de partida para una nueva etapa, añade una dimensión simbólica profunda a la ilustración. Este trabajo artístico se convierte en una manifestación visual de mi fuerza interior y mi disposición para transformar las experiencias difíciles en oportunidades de crecimiento y renacimiento.",
            "img": "./img/korasolar.png",
            "category":"ilustración",
            "gird-row": "1",
            "col-span": "1"
    
        }
        
    ]
    data = await data.json();
    return data;
}

async function drawElements(filter) {
    let data = await readData();
    data.forEach(element => {
        if (element.category.toLowerCase() == filter.toLowerCase()) {
            let div = document.createElement("div");
            div.classList.add("card");
            div.style.backgroundImage = `url('${element.img}`;
            div.style.gridRow = "span " + element["gird-row"];
            div.style.gridColumn = "span " + element["col-span"];
            continer.appendChild(div)

            div.addEventListener("click", function () {
                console.log(element);
                modal.style.display = "flex";
                modal.querySelector("#nombre").innerHTML = element.nombre
                modal.querySelector("#descripcion").innerHTML = element.descripcion
                modal.querySelector("#img").src = element.img
                
            })

        }
    });
}


drawElements(filter);
