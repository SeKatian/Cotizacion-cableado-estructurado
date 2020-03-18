'use strict'

window.addEventListener('load', function(){

    var nombre = this.document.getElementById('nombre');
    var apellido = this.document.getElementById('apellido');
    var correoE = this.document.getElementById('correoE');
    var telefono = this.document.getElementById('telefono');
    var btnContactos = this.document.getElementById('btnContactos');

    btnContactos.addEventListener('click', function(){
        if(nombre.value != "" && apellido.value != "" && correoE.value != "" && telefono.value != ""){
            alert('Gracias por la informacion Sr/a ' + nombre.value + " " + apellido.value + '\nEn un momento uno de nuestros asesores se pondra en contacto para brindarle mas informacion.');
        }

        if(nombre.value == null || nombre.value == ""){
            nombre.classList.add('textoCampoObligatorio');
            nombre.setAttribute('placeholder', 'Campo obligatorio');
        }else{
            nombre.classList.remove('textoCampoObligatorio');
            nombre.removeAttribute('placeholder');
        }

        if(apellido.value == null || apellido.value == ""){
            apellido.classList.add('textoCampoObligatorio');
            apellido.setAttribute('placeholder', 'Campo obligatorio');
        }else{
            apellido.classList.remove('textoCampoObligatorio');
            apellido.removeAttribute('placeholder');
        }

        if(correoE.value == null || correoE.value == ""){
            correoE.classList.add('textoCampoObligatorio');
            correoE.setAttribute('placeholder', 'Campo obligatorio');
        }else{
            correoE.classList.remove('textoCampoObligatorio');
            correoE.removeAttribute('placeholder');
        }

        if(telefono.value == null || telefono.value == ""){
            telefono.classList.add('textoCampoObligatorio');
        }else{
            telefono.classList.remove('textoCampoObligatorio');
        }
    });
});