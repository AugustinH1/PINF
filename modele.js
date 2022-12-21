var errorText = $('<p>').css("color" , "red");



$(document).ready(function(){
    

    //initilaisation de l'état de la page initiale
    $("#newTicket").hide();
    $("#Ticket").hide();


    //click sur le bouton connecter
    connection.click(
        function(){
        
            $.ajax({
                type: "GET",
                url: "libs/data.php",
                data: {"nomFonction" : "connectionValide" , "email" : email.val() , "mdp" : mdp.val()},
                success: 
                function(oRep){
                    console.log(oRep);
                    if(oRep == false){
                        $("#login").append( errorText.html("incorrect") )
                        return;
                    }
                        
                    
                    $("#newTicket").show();
                    $("#Ticket").show();
                    $("#login").hide();
                    
                      
                },
                dataType: "json"
            });            
        }
    );

    lectureSeul.click(
        function(){
            $("#Ticket").show();
            $("#login").hide();
        }

    );





});

    