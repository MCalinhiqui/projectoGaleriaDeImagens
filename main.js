$(document).ready(function(){
    $('header button').click(function(e){
        $('form').slideDown(500)
    });

    $('form').on("reset", function(e){
        $('form').slideUp(500);
    });
    
    $('form').on("submit", function(e){
        e.preventDefault();

        const inputURL = $('#inputUrlImagem').val()

        const novoItem = $('<li style="display:none;"></li>')

        $(`<img src="${inputURL}" />`).appendTo(novoItem)
        $(
            `<div class="overlay-imagem-link">
            <a href="${inputURL}" title="Ver imagem em tamanho real" target="_blank">
            Ver imagem em tamanho real</a>
            </div>`
        ).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000);

        $('#inputUrlImagem').val('')
    });
})