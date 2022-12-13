<?php

include_once "maLibSQL.pdo.php";

function getPersonne()
{

	$sql="SELECT *
			FROM personne";

	
	return parcoursRs(SQLSelect($sql));

}

function addPersonne($nom){

	$sql = "INSERT INTO personne(nom)
	        VALUES ('$nom');";
  
  	SQLInsert($sql);
}


?>