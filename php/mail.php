<?php
if(isset($_POST['submit'])){
    $to = $_POST['input-correo-receptor']; // this is your Email address
    $from = $_POST['input-correo-transmisor']; // this is the sender's Email address
    $name = $_POST['input-nombre'];
    $phone = $_POST['input-telefono'];
    $subject1 = $name ."está interesad@ en tu CV!";
    $subject2 = "Copia del correo que enviaste";
    $message = $name . " escribió lo siguiente". "\n\n" . $_POST['input-cuerpo'];
    $message2 = "Copia de tu mensaje" . $name . "\n\n" . $_POST['input-cuerpo'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject1,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you ";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>
