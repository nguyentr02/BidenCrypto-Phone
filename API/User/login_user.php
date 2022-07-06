<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization,X-Requested-With');

    include_once $_SERVER['DOCUMENT_ROOT'].'/Config/db.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/Model/user_info.php';

    $db = new db();
    $connect = $db->connect();
    $user_info = new User_Info($connect);

    $data = json_decode(file_get_contents("php://input"));

    $user_info->EMAIL = $data->email;
    $user_info->PASS_WORD = $data->password;

    $login = $user_info->login_user();

    $num = $login->rowCount();

    if($num > 0){
        echo json_encode(array(
            'message'=>'success',
            'id' => $user_info->ID,
            'name' => $user_info->NAME,
            'email' => $user_info->EMAIL,
        ));
    }
    else{
        echo json_encode(array('message'=>'failed'));
    }

?>