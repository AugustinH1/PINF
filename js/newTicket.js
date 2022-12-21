


var nomTicket;

var heure = $("<input>").attr("type", "input").attr("placeholder", "Heure");

var panneCrash = $("<select>").attr("id", "panneCrash")
    .append($("<option>").html("panne"))    
    .append($("<option>").html("crash"));


var panneIdentifier = $("<select>")
    .append($("<option>").html("non"))
    .append($("<option>").html("oui"));


var typeMachine = $("<select>");
var idMachine = $("<select>");           // fonction recuperer toute les ids machine


var impactMagasin = $("<select>")
    .append($("<option>").html("non")) 
    .append($("<option>").html("oui"));
    
var tabImpact = $("<table>").css({"border": "solid 1px #000000"});




$(document).ready(function(){
    
    getProchaineIdTicket();
    getMachine();
    getTableauImpact( $(idMachine, "option:selected").data("type_machine") );

    function getProchaineIdTicket(){
        $.ajax({
            type: "GET",
            url: "libs/data.php",
            data: {"nomFonction" : "getProchaineIdTicket"},
            success: 
            function(oRep){
                //console.log(oRep);
                nomTicket = oRep;
                  
            },
            dataType: "json"
        });

    }

    //requete machine active pour les mettre dans le menu déroulant
    function getMachine(){
        $.ajax({
            type: "GET",
            url: "libs/data.php",
            data: {"nomFonction" : "getMachineActive"},
            success: 
            function(oRep){
                //console.log(oRep);
                idMachine.empty();
                for (let i = 0; i < oRep.length; i++) {
                    idMachine.append( $("<option>").html(oRep[i].nom).data("type_machine" ,oRep[i].type_machine) );    
                }   
            },
            dataType: "json"
        });
    }
    

    //requete le tableau des impact d'une machine
    function getTableauImpact(type_machine){
        $.ajax({
            type: "GET",
            url: "libs/data.php",//libs/data.php?nomFonction=getImpactTypeMachine&typeMachine=type_machine
            data: {"nomFonction" : "getImpactTypeMachine", "typeMachine" : type_machine },
            success: 
            function(oRep){
                console.log(oRep);
                oRep.sort(function(a, b){return a.numero-b.numero});
                tabImpact.empty();
                
                tabImpact.append( $("<tr>").append( $("<td>").html("temps") )
                                            .append( $("<td>").html("impact") ) 
                                            .append( $("<td>").html("liste a contacter") )
                                            )

                for (let i = 0; i < oRep.length; i++) {
                    tabImpact.append( $("<tr>").append( $("<td>").html(oRep[i].temps) )
                                                .append( $("<td>").html(oRep[i].impact) ) 
                                                .append( $("<td>").html(oRep[i].liste_diffusion) )
                                                )
                }               
            },
            dataType: "json"
        });
    }


    //ajout des champs pour la création d'un nouveaux ticket
    $("#newTicket")
        .append( $("<p>").html("Nom du Ticket : " + nomTicket)
            .append(nomTicket) )
        .append( $("<p>").html("Heure : ")
            .append(heure) )
        .append( $("<p>").html("Panne/Crash : ")
            .append(panneCrash) )
        .append( $("<p>").html("Panne Identifi&eacutee : ")
            .append(panneIdentifier) )
        .append( $("<p>").html("Type Machine : ")
            .append(typeMachine) )
        .append( $("<p>").html("Id Machine : ")
            .append(idMachine) )
        .append( $("<p>").html("Impact Magasin : ")
            .append(impactMagasin) )
        .append(tabImpact);


    //affichage des champs panne identifier et id machine
    //      en fonction de panne/crash
    panneCrash.change(
        function(){
            if( $("option:selected",$(this)).val() == "crash" ){
                panneIdentifier.hide();
                typeMachine.hide();
                idMachine.hide();

            }
            if( $("option:selected",$(this)).val() == "panne" ){
                panneIdentifier.show();
                typeMachine.show();
                idMachine.show();
            }

        }
    );

    

    //Affichage du tableau des impacts
    idMachine.change(
        function(){
            //console.log($("option:selected",$(this)).data("type_machine"));
            getTableauImpact( $("option:selected",$(this)).data("type_machine") );
        }
    );
    


});
