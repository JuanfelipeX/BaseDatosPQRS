const modalPQRS = new bootstrap.Modal(document.getElementById("modalPQRS"));

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

on(document, "click", ".btnEditar", e => {
    const fila = e.target.parentNode.parentNode;
    id_editar.value = fila.children[0].innerHTML;
    nombre_editar.value = fila.children[1].innerHTML;
    email_editar.value = fila.children[2].innerHTML;
    telefono_editar.value = fila.children[3].innerHTML;
    tipoId_editar.value = fila.children[4].innerHTML;
    numeroId_editar.value = fila.children[5].innerHTML;
    tipoRadicado_editar.value = fila.children[6].innerHTML;
    comentarios_editar.value = fila.children[7].innerHTML;
    //anexo_editar.value = fila.children[8].innerHTML;     NO SE PUEDE AGREGAR EL TYPE FILE SALE ERROR NO CARGA PARA EDITAR
    modalPQRS.show();
})