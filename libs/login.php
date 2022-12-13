<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php")
{
	header("Location:../index.php?view=login");
	die("");
}

// Chargement eventuel des données en cookies
$login = valider("login", "COOKIE");
$passe = valider("passe", "COOKIE"); 
if ($checked = valider("remember", "COOKIE")) $checked = "checked"; 

?>

<div class="page-header">
	<h1>Connexion</h1>
</div>

<p class="lead">

 <form role="form" action="controleur.php">
  <div class="form-group">
    <label for="email">Nom d'utilisateur</label>
    <input type="text" class="form-control" id="email" name="login" value="<?php echo $login;?>" >
  </div>
  <div class="form-group">
    <label for="pwd">Mot de passe</label>
    <input type="password" class="form-control" id="pwd" name="passe" value="<?php echo $passe;?>">
  </div>

  <button type="submit" name="action" value="Connexion" class="form-control btn btn-default">Connexion</button>
  <br>
  <br>

</form>

<form role="form" action="controleur.php">
  <button type="submit" name="view" value="signin" class="btn ">crée un compte</button>
</form>

</p>




