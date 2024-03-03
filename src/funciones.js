import Swal from "sweetalert2";
import axios from "axios";
export function mostrarAlerta(titulo, icono, foco = '') {
    Swal.fire({
        title: titulo,
        icon: icono,
        customClass: { confirmButton: 'btn btn-primary', popup: 'animated zoonIn' },
        buttonsStyling: false
    }).then(() => {
        // Verificar si se proporcionó un elemento de enfoque
        if (foco) {
            const elemento = document.getElementById(foco);
            if (elemento) {
                elemento.focus();
            }
        }
    });
}


export function confirmar(urlConSlash,id,titulo,mensaje){
    var url = urlConSlash+id;
    const swalWithBootstrapButton = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3', cancelButton:'btn btn-danger'},
    });

    swalWithBootstrapButton.fire({
        title:titulo,
        text:mensaje,
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then((res)=>{
            if(res.isConfirmed){
                enviarSolicitud('DELETE',{id:id},url,'Eliminado con éxito');
            }else{
                mostrarAlerta('Operación Cancelada','info');
            }
        });
/*
    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
        buttonsStyling:false
    });*/
}


export function enviarSolicitud(metodo,parametros,url,mensaje){
    axios({method:metodo,url:url,data:parametros}).then(function(res){
        var estado = res.status;
        if(estado == 200){
            mostrarAlerta(mensaje,'success');
            window.setTimeout(function(){
                window.location.href='/'
            },1000);
        }else{
            mostrarAlerta('No se pudo recuperar la respuesta','error');
        }
    }).catch(function(error){
        mostrarAlerta('Servidor no disponible','error');
    });
}