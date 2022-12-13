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




if($nomFonction == "getPersonne")
    echo json_encode(getPersonne());


if($nomFonction == "addPersonne"){
    addPersonne($_GET["nom"]);
    echo "200";
}







?>