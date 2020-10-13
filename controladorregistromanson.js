
let nombre = document.getElementById("nombre");
let pass = document.getElementById("pass");
let correo = document.getElementById("correo");

let botonenviar = document.getElementById("enviar");


botonenviar.addEventListener("click", validarregistro);


function validarregistro (evento)
{

    evento.preventDefault();

    console.log(nombre.value);
    console.log(pass.value);
    console.log(correo.value);

    if (nombre.value == "" && pass.value == "" && correo.value == "" )
    {

        nombre.classList.add("is-invalid");
        pass.classList.add("is-invalid");
        correo.classList.add("is-invalid");

    }
    else
        if (nombre.value != "" && pass.value == "" && correo.value == "" )
        {
            nombre.classList.add("is-valid");
            pass.classList.add("is-invalid");
            correo.classList.add("is-invalid");
        }
     else
        if (nombre.value == "" && pass.value != "" && correo.value == "" )
        {
            nombre.classList.add("is-invalid");
            pass.classList.add("is-valid");
            correo.classList.add("is-invalid");
        }
     else
        if (nombre.value == "" && pass.value == "" && correo.value != "" )
        {
            nombre.classList.add("is-invalid");
            pass.classList.add("is-invalid");
            correo.classList.add("is-valid");
        }
    else
        if (nombre.value != "" && pass.value != "" && correo.value == "" )
        {
            nombre.classList.add("is-valid");
            pass.classList.add("is-valid");
            correo.classList.add("is-invalid");
        }  
    else
        if (nombre.value != "" && pass.value == "" && correo.value != "" )
        {
            nombre.classList.add("is-valid");
            pass.classList.add("is-invalid");
            correo.classList.add("is-valid");
        }                 
    else
        if (nombre.value == "" && pass.value != "" && correo.value != "" )
        {
            nombre.classList.add("is-invalid");
            pass.classList.add("is-valid");
            correo.classList.add("is-valid");
        }   
}