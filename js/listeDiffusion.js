
var tabListeDiffusion = $("<table>")
var refTrLD = $("<tr>").css("cursor" , "pointer" )

var tabEmail = $("<table>");
var refTrE = $("<tr>")


var BpPlusLD = $("<input>").attr("type", "button").val("+");


var BpPlusE = $("<input>").attr("type", "button").val("+");
var ListeDiffusionEmail = $("<input>").attr("type", "input").attr("placeholder", "email");

var BpMoins = $("<input>").attr("type", "button").val("-");




$(document).ready(function(){

$("#listeDiffusion")
    .append(tabListeDiffusion)
    .append(tabEmail)
;

getListeDiffusion();




function getListeDiffusion(){
    $.ajax({
        type: "GET",
        url: "libs/data.php",
        data: {"nomFonction" : "getListeDiffusion"},
        success: 
        function(oRep){
            
            tabListeDiffusion.empty();
            
            //on met le tableau en ordre
            oRep.sort(function(a,b){return a.numero-b.numero});

            console.log(oRep);


            for (let i = 0; i < oRep.length; i++) {
                tabListeDiffusion.append( 
                    refTrLD
                        .clone(true)
                        .append( $("<th>").html(oRep[i].numero) )
                        .data("id", oRep[i].id)
                );
                
            }   
            
            tabListeDiffusion.append( $("<th>").append(BpPlusLD) )
        },
        dataType: "json"
    });

    

    
}

function getPersonneListeDiffusion(id){
    var tmpid = id;

        $.ajax({
            type: "GET",
            url: "libs/data.php",
            data: {"nomFonction" : "getPersonneListeDiffusion", "idListeDiffusion" : id },
            success: 
            function(oRep){
                //console.log(oRep);
                tabEmail.empty();

                for (let i = 0; i < oRep.length; i++) {
                    tabEmail.append( 
                        refTrE
                            .clone(true)
                            .append( $("<th>")
                                        .html(oRep[i].personne_a_contacter)
                                        .append( BpMoins.clone(true)
                                                        .data("personne_a_contacter" , oRep[i].personne_a_contacter) )
                            )


                    );
                    
                }

                tabEmail.append( $("<th>").append(ListeDiffusionEmail).append(BpPlusE))
                        .data("id", tmpid)

                
        
      
                 
            },
            dataType: "json"
        });

    
}

refTrLD.click(
    function(){
        getPersonneListeDiffusion( $(this).data("id") );


    }

);

BpPlusLD.click(
    function(){

        $.ajax({
            type: "GET",
            url: "libs/data.php",
            data: {"nomFonction" : "addListeDiffusion"},
            success: 
            function(oRep){
                //console.log(oRep);
                getListeDiffusion();
      
                 
            },
            dataType: "json"
        });


    }

);

BpPlusE.click(
    function(){
    
        console.log("ici");

        if(ListeDiffusionEmail.val() == "")
            return;
        //console.log(tabEmail.data("id"));
        //console.log( ListeDiffusionEmail.val());


        $.ajax({
            type: "GET",
            url: "libs/data.php",
            data: {"nomFonction" : "addPersonneListeDiffusion", "idListeDiffusion" : tabEmail.data("id") , "email" : ListeDiffusionEmail.val()},
            success: 
            function(oRep){
                console.log("email ajouter");
                getPersonneListeDiffusion( tabEmail.data("id") );

                ListeDiffusionEmail.val("");
      
                 
            },
            dataType: "json"
        });


    }

);


BpMoins.click(
    function(){
        

        $.ajax({
            type: "GET",
            url: "libs/data.php",
            data: {"nomFonction" : "supprPersonneListeDiffusion", "email" : $(this).data("personne_a_contacter") },
            success: 
            function(oRep){
                
                
                getPersonneListeDiffusion( tabEmail.data("id") );
                
      
                 
            },
            dataType: "json"
        });
    }

);








});