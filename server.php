<?php
// la connexion avec la base de données fetchapi
$conn = mysqli_connect('localhost', 'root', '', 'fetchapi');

//fetcher les donnees de fetchapi 

$sql = mysqli_query($conn, "SELECT * FROM user");

//stockage des données dans un var resultat

$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));


