<?php

include_once "maLibSQL.pdo.php";

function getMachineActive()
{
    $SQL = "Select *
            From machine
            Where active_ou_non = 1";

    return parcoursRs(SQLSelect($SQL));

}

function getImpactTypeMachine($typeMachine){
    $SQL = "Select *
            From impact
            Where type_machine = '$typeMachine'";

    return parcoursRs(SQLSelect($SQL));

}

function getProchaineIdTicket(){
    $SQL = "Select MAX(id)+1 as id
            From ticket";

            
    return SQLGetChamp($SQL);
}

function connectionValide($email,$mdp){

    $SQL = "Select id
            From compte
            Where email = '$email'
            AND mdp = '$mdp'";

    return SQLGetChamp($SQL);


}

function getListeDiffusion(){

    $SQL = "Select *
            From liste_diffusion";

    return parcoursRs(SQLSelect($SQL));

}

function getPersonneListeDiffusion($idListeDiffusion){

    $SQL = "Select *
            From contact
            Where id = '$idListeDiffusion'";

    return parcoursRs(SQLSelect($SQL));

}

function addListeDiffusion(){
    $SQL = "Select MAX(numero)+1
            From liste_diffusion";

    $numero = SQLGetChamp($SQL);
    
    $SQL = "Insert into liste_diffusion (numero)
            Values ('$numero')";

    return SQLInsert($SQL);

}

function addPersonneListeDiffusion($id,$email){
    $SQL = "Insert into contact (id,personne_a_contacter)
            Values ('$id' , '$email')";


    return SQLInsert($SQL);

}

function supprPersonneListeDiffusion($email){
    $SQL = "Delete From contact
            Where personne_a_contacter = '$email'";


    return SQLDelete($SQL);

}







?>