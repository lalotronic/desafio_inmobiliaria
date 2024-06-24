  //################## declaramos el arreglo propiedades_alquiler ##########################
  const propiedades_alquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2000,
      Fumar: false ,
      Mascotas: false
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 2500,
      Fumar: true,
      Mascotas: true
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2200,
      Fumar: false,
      Mascotas: false
    },
    {
      nombre: "Condominio moderno  Seattle",
      src:"https://static1.mansionglobal.com/production/media/article-images/57c4db8cf321138306fe02d668a62e93/large_SEATTLE_EXTERIOR.jpg",
      descripcion: "Este elegante condominio esta ubicado en la comunidad mas pujante de Seattle",
      ubicacion: "144 Main Full Street, Lake, CA 777",
      habitaciones: 3,
      banos: 2,
      precio: 3200,
      Fumar: false,
      Mascotas: false
      }
  ];

    //####### segunda parte del codigo para arreglo de alquiler   #########
    const propiedadesContainer2 = document.getElementById("propiedades2");
    let cardsHtml2 = ""; // variable para almacenar el HTML de las tarjetas
    let contador_cards2 = 0; // contamos las cartas
    
    for (const propiedad2 of propiedades_alquiler) {
      if (contador_cards2 < 4) {
        const FumarHtml2 = propiedad2.Fumar//forma terciaria de un if mas resumido visto en ayudantia si es true toma la primera opcion sino toma lo de : en adelante
          ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
          : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
             
        const MascotasHtml2 = propiedad2.Mascotas// terciario del if de mascotas
          ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
          : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
            
        cardsHtml2 += `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedad2.src}" class="card-img-top" alt="Imagen del departamento">
              <div class="card-body">
                <h5 class="card-title">${propiedad2.nombre}</h5>
                <p class="card-text">${propiedad2.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad2.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad2.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad2.banos} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad2.precio}</p>
                ${FumarHtml2}
                ${MascotasHtml2}
              </div>
            </div>
          </div>
        `;
    
        contador_cards2++;
      }
    }  
    // Asignamos el HTML concatenado al contenedor de propiedades//
    propiedadesContainer2.innerHTML = cardsHtml2;