<?php

include_once "modele.php";
include_once "maLibUtils.php";

/**
 * traitement de la cahine de caractère
 * 
 * recupére le nom de la fonction que l'on desire utiliser
 */
$QS = $_GET;
$nomFonction = $_GET["nomFonction"];




if($nomFonction == "getMachineActive")
    echo json_encode(getMachineActive());


if($nomFonction == "addPersonne"){
    addPersonne($_GET["nom"]);
    echo "200";
}

if($nomFonction == "getImpactTypeMachine")
    echo json_encode(getImpactTypeMachine($_GET["typeMachine"]));


if($nomFonction == "getProchaineIdTicket"){
    echo json_encode(getProchaineIdTicket());
    
}

if($nomFonction == "connectionValide"){
    $mdp = hash('ripemd160', $_GET['mdp']);
    echo json_encode( connectionValide( $_GET['email'], $mdp));

}

if($nomFonction == "getListeDiffusion"){
    
    echo json_encode( getListeDiffusion() );

}

if($nomFonction == "getPersonneListeDiffusion"){
    echo json_encode( getPersonneListeDiffusion( $_GET['idListeDiffusion']) );

}

if($nomFonction == "addListeDiffusion"){
    echo json_encode( addListeDiffusion() );

}

if($nomFonction == "addPersonneListeDiffusion"){
    echo json_encode( addPersonneListeDiffusion( $_GET['idListeDiffusion'], $_GET['email'] ) );

}

if($nomFonction == "supprPersonneListeDiffusion"){
    echo json_encode( supprPersonneListeDiffusion( $_GET['email'] ) );

}







    







?>