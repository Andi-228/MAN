<?php
 $mail = filter_var(trim($_POST['mail']),
 FILTER_SANITIZE_STRING);
 $pass = filter_var(trim($_POST['pass']),
 FILTER_SANITIZE_STRING);
 $confPass = filter_var(trim($_POST['confPass']),
 FILTER_SANITIZE_STRING);

    if(mb_strlen($confPass) < 8 || mb_strlen($confPass) > 90 ){
        echo "Длина пароля превышает лимит символов"
    }
 ?>