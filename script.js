$(document).ready(function() {
    function setTheme(theme) {
        $("body").attr("class", theme + "-theme");
        $("#lightButton, #darkButton").toggleClass("light-theme dark-theme");
        console.log('Tema definido:', theme);
    }

    function salvarTemaEscolhido(theme) {
        localStorage.setItem('temaEscolhido', theme);
        console.log('Tema salvo no localStorage:', theme);
    }

    function aplicarTema(theme) {
        $("body").attr("class", theme + "-theme");
        $("#lightButton, #darkButton").toggleClass("light-theme dark-theme");
        console.log('Tema aplicado:', theme);
    }

    const temaSalvo = localStorage.getItem('temaEscolhido');

    if (temaSalvo) {
        aplicarTema(temaSalvo);
        console.log('Tema recuperado do localStorage:', temaSalvo);
    }

    $("#lightButton").click(function(){
        salvarTemaEscolhido("light");
        aplicarTema("light");
    });

    $("#darkButton").click(function(){
        salvarTemaEscolhido("dark");
        aplicarTema("dark");
    });

    $("#accordion").accordion();
});
