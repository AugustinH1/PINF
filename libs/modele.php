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

?>