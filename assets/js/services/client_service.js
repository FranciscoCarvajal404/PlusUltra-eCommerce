const articulos = () => fetch("http://localhost:3000/articulos").then(response => response.json());

const crearArticulo = (imagen,titulo,precio) =>{
    return fetch("http://localhost:3000/articulos",{
        method: "POST",
        headers:{
            "Content-Type": "application.json"
        },
        body: JSON.stringify({titulo,precio,id:uuid.v4()})
    })
}