const render = () => {

    const formulario = document.querySelector ("#form");
    const resultado = document.querySelector("#resultado");
    
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
    
        console.log(event);
        const nombre = event.target.nombre.value;
        const apellido = event.target.apellido.value;
        const edad = event.target.edad.value;
        resultado.innerHTML = "El nombre de la persona es " + nombre  +", su apellido es "+ apellido+" y su edad es "+edad+" años.";
    
      });
      
    }
    
    window.onload = render;