<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    
    include_once $_SERVER['DOCUMENT_ROOT'].'/Config/db.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/Model/user_asset.php';

    $db = new db();
    $connect = $db->connect();
    $user_asset = new User_Asset($connect);

    $user_asset->ID_USER = isset($_GET['id_user']) ? $_GET['id_user'] : die();

    $user_asset->show_user_asset();
    $user_asset_coin_list = $user_asset->show_user_asset_coin();

    $user_asset_coin_array = [];
    $num = $user_asset_coin_list->rowCount();
    if($num>0){
        while($row = $user_asset_coin_list->fetch(PDO::FETCH_ASSOC)){
            
            extract($row);

            $user_asset_coin_item = array(
                'coin_name' => $COIN_NAME,
                'coin_quantity' => $COIN_QUANTITY,
                'coin_value' => $COIN_VALUE
            );

            array_push($user_asset_coin_array,$user_asset_coin_item);
        }
    }

    $user_asset_item = array(
        'id_user' => $user_asset->ID_USER,
        'total_money' => $user_asset->TOTAL_MONEY,
        'asset_coin' => $user_asset_coin_array
    );

    print_r(json_encode($user_asset_item));

    
?>