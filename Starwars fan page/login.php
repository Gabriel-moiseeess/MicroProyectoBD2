<?php 
    
    require 'Database.php';

    /*session_start();
    if(!empty($_POST['nombre'] && ($_POST['contraseña']))) {
        
            $records = $enlace->prepare('SELECT Nombre, Contraseña FROM datos WHERE nombre=:Nombre');
            $records->bindParam(':Nombre', $_POST['nombre']);
            $records->execute();
            $resultados = $records->fetch(PDO::FETCH_ASSOC);
            $mensaje = '';

        if (count($resultados) > 0 && password_verify($_POST['Contraseña'], $resultados['Contraseña'])) {
            
            $_SESSION['user_nombre'] = $resultados['Nombre'];

            header('locationn:  /index.html');
        }else {
             $mensaje = "Lo siento, las credenciales son incorrectas";
        }
    }*/


    $email = $_POST["correo"];
    $pass = $_POST["contraseña"];
    $query = mysqli_query($enlace, "SELECT * FROM datos WHERE correo = '.$email' and contraseña = '$pass");
    $nr = mysqli_num_rows($query);

    if ($nr == 1) {
        
        //header("Location: index.html");

        echo "bienvenido"  .$email;
        
    }

      elseif ($nr==0) {
          echo "no ingreso";
      }




?>