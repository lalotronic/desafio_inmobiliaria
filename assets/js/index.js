//############### declaramos el arreglo de propiedades_venta   #########################
const propiedades_venta = [
    {
      imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      titulo: "Apartamento de lujo en zona exclusiva",
      descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      banos: 4,
      precio: 5000,
      Fumar: false,
      Mascotas: false
    },
    {
      imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      titulo: "Apartamento acogedor en la montaña",
      descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      direccion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      banos: 1,
      precio: 1200,
      Fumar: true,
      Mascotas: true
    },
    {
      imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      titulo: "Penthouse de lujo con terraza panorámica",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      direccion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 4500,
      Fumar: false,
      Mascotas: true
    },
    {
        imagen: "https://images.sparairnos.com/property/42032/images/318787/full/fe6fc663-e832-4c77-b2b5-cbef28af5a50",
        titulo: "Cabaña descanso",
        descripcion: "Esta construccion cuenta con jacuzzi y piscina",
        direccion: "567 Pucon, Araucania, Camino Caburga",
        habitaciones: 3,
        banos: 1,
        precio: 4500,
        Fumar: false,
        Mascotas: true
      }
  ];



  
  const propiedadesContainer = document.getElementById("propiedades");
  let cardsHtml = ""; // variable para almacenar el HTML de las tarjetas
  let contador_cards = 0; // contamos las cartas
  
  for (const propiedad of propiedades_venta) {
    if (contador_cards < 3) {
      const FumarHtml = propiedad.Fumar//forma terciaria de un if mas resumido visto en ayudantia si es true toma la primera opcion sino toma lo de : en adelante
        ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
           
      const MascotasHtml = propiedad.Mascotas// terciario del if de mascotas
        ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
        : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
          
      cardsHtml += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${propiedad.imagen}" class="card-img-top" alt="Imagen del departamento">
            <div class="card-body">
              <h5 class="card-title">${propiedad.titulo}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
              ${FumarHtml}
              ${MascotasHtml}
            </div>
          </div>
        </div>
      `;
  
      contador_cards++;
    }
  }  
  // Asignamos el HTML concatenado al contenedor de propiedades
  propiedadesContainer.innerHTML = cardsHtml;


      