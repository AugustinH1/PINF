<?php

include_once "maLibUtils.php";	// Car on utilise la fonction valider()
include_once "modele.php";	// Car on utilise la fonction connecterUtilisateur()

/**
 * @file login.php
 * Fichier contenant des fonctions de vérification de logins
 */

/**
 * Cette fonction vérifie si le login/passe passés en paramètre sont légaux
 * Elle stocke les informations sur la personne dans des variables de session : session_start doit avoir été appelé...
 * Infos à enregistrer : pseudo, idUser, heureConnexion, isAdmin
 * Elle enregistre l'état de la connexion dans une variable de session "connecte" = true
 * @pre login et passe ne doivent pas être vides
 * @param string $login
 * @param string $password
 * @return false ou true ; un effet de bord est la création de variables de session
 */
function verifUser($login,$password)
{
	
	$id = verifUserBdd($login,$password);

	if (!$id) return false;

	// Cas succès : on enregistre pseudo, idUser dans les variables de session 
	// il faut appeler session_start ! 
	// Le controleur le fait déjà !!
	$_SESSION["pseudo"] = $login;
	$_SESSION["idUser"] = $id;
	$_SESSION["connecte"] = true;
	$_SESSION["entreprise"] = entreprise($id);
	if(entreprise($id))
		$_SESSION["id_entreprise"] = identreprise($id);



	$_SESSION["email"] = email($id);
	$_SESSION["heureConnexion"] = date("H:i:s");
	

	return true;	
}




/**
 * Fonction à placer au début de chaque page privée
 * Cette fonction redirige vers la page $urlBad en envoyant un message d'erreur 
 *	et arrête l'interprétation si l'utilisateur n'est pas connecté
 * Elle ne fait rien si l'utilisateur est connecté, et si $urlGood est faux
 * Elle redirige vers urlGood sinon
 */
function securiser($urlBad,$urlGood=false)
{
	if (! valider("connecte","SESSION")) {
		rediriger($urlBad);
		die("");
	}
	else {
		if ($urlGood)
			rediriger($urlGood);
	}
}



/**
 * auteur : Lara
 * Fonction qui vérifie qu'un champ de formulaire rempli par l'utilisateur est valide
 * La fonction retourne le champ auquel on a appliqué les fonctions addslashes et 
 * htmlspecialchars si la longueur du champ est conforme à celle passée en paramètre
 * Si $egal=true, il faut que la longeur du champ soit exactement la même que celle passée en paramètre
 * La fonction renvoie null sinon
 */
function SecuriseChamp($champ, $longueur, $egal=false)
{
	if($egal)
	{
		if(strlen($champ) == $longueur)
			return addslashes(htmlspecialchars($champ));
		else
			return NULL;
	}
	else
	{
		if(strlen($champ) <= $longueur)
			return addslashes(htmlspecialchars($champ));
		else
			return NULL;
	}
}


?>
