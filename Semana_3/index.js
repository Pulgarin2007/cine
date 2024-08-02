// function drama(){
//     let edad = document.getElementById("edad").value
//     if (edad < 13) {
//         document.getElementById("pelicula").textContent="Te recomendamos casa blanca";  
// } 

// else if (edad >= 13 && edad <= 15){
//     document.getElementById("pelicula").textContent="Te recomendamos The Shawshank Redemption"; 
// } 

// else if (edad >=16 ){
//     document.getElementById("pelicula").textContent="Te recomendamos Taxi Driver";
// }
// }

// function comedia(){
//     let edad= document.getElementById("edad").value;
//     if (edad<13) {
//         document.getElementById("pelicula").textContent= "Te recomendamos Back to the Future"
//     } 
//     else if (edad>=13 && edad<=15) {
//          document.getElementById("pelicula").textContent= "Te recomendamos The Truman Show"
//     }
//     else if(edad>=16){
//         document.getElementById("pelicula").textContent= "Te recomendamos The Wolf of Wall Street"
//     }
        
// }

// function musical(){
//     let edad = document.getElementById("edad").value
//     if (edad < 13) {
//         document.getElementById("pelicula").textContent="Te recomendamos La La Land";  
// } 

// else if (edad >= 13 && edad <= 15){
//     document.getElementById("pelicula").textContent="Te recomendamos Les Miserablaes"; 
// } 

// else if (edad >=16 ){
//     document.getElementById("pelicula").textContent="Te recomendamos The Rocky Horror Picture Show";
// }
// }


// function crimen(){
//     let edad = document.getElementById("edad").value
//     if (edad < 13) {
//         document.getElementById("pelicula").textContent="No hay opciones para esta edad";  
// } 

// else if (edad >= 13 && edad <= 15){
//     document.getElementById("pelicula").textContent="Te recomendamos El secreto de tus ojos"; 
// } 

// else if (edad >=16 ){
//     document.getElementById("pelicula").textContent="Te recomendamos The Godfather";
// }
// }

function recomendacionPelicula(genero) {
    let edad = document.getElementById("edad").value;
    let recomendacion;
  
    switch (genero) {
      case "drama":
        if (edad < 13) {
          recomendacion = "Casa Blanca";
        } else if (edad >= 13 && edad <= 15) {
          recomendacion = "The Shawshank Redemption";
        } else if (edad >= 16) {
          recomendacion = "Taxi Driver";
        }
        break;
      case "comedia":
        if (edad < 13) {
          recomendacion = "Back to the Future";
        } else if (edad >= 13 && edad <= 15) {
          recomendacion = "The Truman Show";
        } else if (edad >= 16) {
          recomendacion = "The Wolf of Wall Street";
        }
        break;
      case "musical":
        if (edad < 13) {
          recomendacion = "La La Land";
        } else if (edad >= 13 && edad <= 15) {
          recomendacion = "Les Miserables";
        } else if (edad >= 16) {
          recomendacion = "The Rocky Horror Picture Show";
        }
        break;
      case "crimen":
        if (edad < 13) {
          recomendacion = "No hay opciones para esta edad";
        } else if (edad >= 13 && edad <= 15) {
          recomendacion = "El secreto de tus ojos";
        } else if (edad >= 16) {
          recomendacion = "The Godfather";
        }
        break;
    }
  
    document.getElementById("pelicula").textContent = "Te recomendamos: " + recomendacion;
  }
  
  // Llamadas a la función
  function drama() {
    recomendacionPelicula("drama");
  }
  
  function comedia() {
    recomendacionPelicula("comedia");
  }
  
  function musical() {
    recomendacionPelicula("musical");
  }
  
  function crimen() {
    recomendacionPelicula("crimen");
  }
  