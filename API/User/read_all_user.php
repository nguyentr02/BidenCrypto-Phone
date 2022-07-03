<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');

    include_once $_SERVER['DOCUMENT_ROOT'].'/Config/db.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/Model/user_info.php';

    $db = new db();
    $connect = $db->connect();

    $user_info = new User_Info($connect);
    $read = $user_info->read_all_user();

    $num = $read->rowCount();
    if($num>0){
        $user_array = [];
        $user_array['data'] = [];

        while($row = $read->fetch(PDO::FETCH_ASSOC)){
            
            extract($row);

            $user_array_item = array(
                'id' => $ID,
                'name' => $NAME,
                'email' => $EMAIL,
                'password' => $PASS_WORD,
            );

            array_push($user_array['data'],$user_array_item);
        }
        echo json_encode($user_array);
    }

?>