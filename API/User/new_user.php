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

    $user_info->NAME = $data->name;
    $user_info->EMAIL = $data->email;
    $user_info->PASS_WORD = $data->password;

    if($user_info->new_user()){
        echo json_encode(array(
            'message'=>'created success'
        ));
    }
    else{
        echo json_encode(array('message'=>'created failed'));
    }

?>