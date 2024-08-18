$document.ready(function(){

    var ejemplo = $(".texto-p").text();
    alert(ejemplo);

    $(".texto-p").css("color", "blue");

    $(". texto—p").css("color", function(){
        var colorActual = $(this).css("color");
        // Alternar el color del texto entre azul y eI color original
        if (colorActual === colorOriginal || colorActual === "rgb(0, 0, 0)"){
            $(this).css("color", colorAzul);
        } else {
            $(this).css("color", colorOriginal);
        }
        })
});