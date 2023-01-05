




var boutonHome = $("<img>")
                    .attr("src" , "ressources/accueil.png")
                    .attr("alt" , "bouton home")
                    .attr("width" , "40px")
                    .css("cursor" , "pointer" )
                    .addClass("header")



var champsRecherche = $("<input>").attr("type", "text");

var validerRecherche = $("<img>")
                    .attr("src" , "ressources/loupe.png")
                    .attr("alt" , "bouton recherche")
                    .attr("width" , "20px")
                    .css("cursor" , "pointer" )
                    

var recherche = $("<div>")
                        .append(champsRecherche)
                        .append(validerRecherche)
                        



var derniereMaj = $("<p>")
                        .html("Derniere MaJ:")
                        

var notification = $("<img>")
                    .attr("src" , "ressources/notification.png")
                    .attr("alt" , "bouton notification")
                    .attr("width" , "40px")
                    .css("cursor" , "pointer" )
                    


$(document).ready(function(){

    $("#header").append(boutonHome)
                .append(recherche)
                .append(derniereMaj)
                .append(notification)
                






});