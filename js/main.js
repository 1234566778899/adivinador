
function cambiar(value) {
    
    ventanas=document.querySelectorAll('.ventana');

    ventanas.forEach(element => {
        $(element).css('display', 'none');
    });

    $(`.${value}`).css('display','block');

}

cambiar('v1');
