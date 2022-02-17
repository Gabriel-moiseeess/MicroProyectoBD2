<?php 

require 'Database.php';


if (!$enlace) {
    echo "Error en la conexion del servidor";
}

if (isset($_POST['registro'])) {
    $Correo = $_POST["correo"];
    $Contraseña = $_POST["contraseña"];
    $pass_cifrada = password_hash($Contraseña, PASSWORD_DEFAULT);
 }
 
 $insertarDatos = "INSERT INTO datos VALUES (
                                             '$Correo', 
                                             '$pass_cifrada')";
 
 $ejecutarInsertar = mysqli_query($enlace, $insertarDatos);
 
  if(!$ejecutarInsertar){
 echo "Error en la linea de sql";
  }

?>