
var cssLink = $("<p>")
                    .css("text-decoration", "underline")
                    .css("color" , "blue")
                    .css("cursor" , "pointer" )


var email = $("<input>").attr("type", "input").attr("placeholder", "email");
var mdp = $("<input>").attr("type", "password").attr("placeholder", "mdp");

var mdpLost = cssLink.html("mot de passe oubli&eacute")
                    

var connection = $("<input>").attr("type", "button").attr("value", "Connexion");

var lectureSeul = cssLink.clone().html("lecture seule");




$(document).ready(function(){

    $('#login')
        .append( $("<p>").html("email : ").append(email) )
        .append( $("<p>").html("mdp : ").append(mdp) )
        .append(mdpLost)
        .append(connection)
        .append(lectureSeul)
        
        




})