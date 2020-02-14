$(document).ready(function(){
    $('#stats').hide();
    var output = ""
    for(var i = 1; i <=151; i++){
        var pkmn = i + ".png";
        var srce = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + pkmn;
        output +="<figure class='image is-96x96 is-inline-block'><img class='"+i+"'src='" + srce + "' ></figure>"  ;
        // console.log(output)
    }
    document.getElementById('pokemon').innerHTML = output;

    $(this).click(function(){
        $('#stats').slideToggle();
        var link = "https://pokeapi.co/api/v2/pokemon/"+$(this).attr('class')
        console.log(link)
        // $.get()    
    });
});


