function getPersonne(){
    $.ajax({
        type: "GET",
        url: "libs/data.php",
        data: {"nomFonction" : "getPersonne"},
        success: 
        function(oRep){

            console.log(oRep);

            for (let i = 0; i < oRep.length; i++)
				{
					$("#contenu").append( $("<p>").html(oRep[i].nom) );
					
				}
            
        },
        dataType: "json"
    });
}

function addPersonne(nom){
    $.ajax({
        type: "GET",
        url: "libs/data.php",
        data: {"nomFonction" : "addPersonne", "nom" : nom},
        success: 
        function(oRep){
            console.log(oRep);
            location.reload();
               
        },
        dataType: "json"
    });
}


var textInput = $("<input>").attr("type", "input").attr("id", "input");
var addBouton = $("<input>").attr("type", "button").attr("id", "button").val("+");

$(document).ready(function(){

    $("body").append(textInput).append(addBouton);
    getPersonne();

    addBouton.click(
        function(){
            addPersonne(textInput.val());

        }
    );

});