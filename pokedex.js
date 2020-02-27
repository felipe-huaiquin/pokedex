function Capitalization(text){
    var capitalized = text.substring(0,1).toUpperCase()+text.substring(1);
    return capitalized;
    // Es como el arr.splice, string.substring(x,y) devuelve el string desde la posición x hasta y.
    // string.susbtring(x) devuelve el string completo desde la posición x.
};


$(document).ready(function(){
    $('#stats').hide();
    var output = ""
    for(var i = 1; i <=151; i++){
        var pkmn = i + ".png";
        var srce = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + pkmn;
        // var link_json = "https://pokeapi.co/api/v2/pokemon/"+i+"/";
        output +="<figure id='"+i+"'class='image is-96x96 is-inline-block'><img id='pkmn_img' class='"+i+"'src='" + srce + "' ></figure>"  ;
    }
    document.getElementById('pokemon').innerHTML = output;    

    $(document).on('click','figure',function(){
            var pkmn_number = $(this).attr("id");
            // console.log(pkmn_number);
            $('#stats').show();
            // alert("The pokemon is: "+$(this).attr("id") );
            var link = "https://pokeapi.co/api/v2/pokemon/"+ $(this).attr("id")+"/";
            // console.log(link);
            $.get(link, function(res){
                $('div.content').html("<div class='has-text-centered'><strong>"+Capitalization(res.species.name)+"</strong></div>");
                $('div.content').append("<img class='image-centered' src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + pkmn_number + ".png' >")
                if(res.types.length==1){
                    $('div.content').append("<div class='has-text-centered'><p>"+res.types[0].type.name+"</p></div>")
                }else{
                    $('div.content').append("<div class='has-text-centered'><p>"+res.types[0].type.name+"</p></div>")
                    $('div.content').append("<div class='has-text-centered'><p>"+res.types[1].type.name+"</p></div>")
                }
                $('div.content').append("<div class='has-text-centered'><p>"+res.height+"</p></div>")
                $('div.content').append("<div class='has-text-centered'><p>"+res.weight+"</p></div>")
            },"json");

            
    });
});

