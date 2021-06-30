let formularioInput = document.querySelectorAll(".formulario__input")


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const verificarCampo = (e) => {

	switch (e.target.name) {
		case "apellido"	:
				validarFormulario(expresiones.nombre, e.target.value, "apellido")
			break;
		case "nombre":
			validarFormulario(expresiones.nombre, e.target.value, "nombre")
			break;
		case "email":
			validarFormulario(expresiones.correo, e.target.value, "email")
			break;
		case "password":
			validarFormulario(expresiones.password, e.target.value, "password")
			
	}

}


const validarFormulario = (expresion, value, campo) => {
	if(expresion.test(value)){
	
		document.querySelector(`.formulario__${campo}`).classList.remove("formulario__incorrecto");
		document.querySelector(`.formulario__${campo}`).classList.add("formulario__correcto");


		
	}else{
		document.querySelector(`.formulario__${campo}`).classList.add("formulario__incorrecto")
		document.querySelector(`.formulario__${campo}`).classList.remove("formulario__correcto");


			
	}
}


formularioInput.forEach((i => {
	i.addEventListener("keyup", verificarCampo)
	i.addEventListener("blur", verificarCampo)

}))