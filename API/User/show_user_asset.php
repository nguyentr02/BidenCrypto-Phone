<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');

    include_once $_SERVER['DOCUMENT_ROOT'].'/BidenCrypto-Phone/Config/db.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/BidenCrypto-Phone/Model/user_asset.php';

    $db = new db();
    $connect = $db->connect();

    $user_asset = new User_Asset($connect);
    $user_asset->ID_USER = isset($_GET['id_user']) ? $_GET['id_user'] : die();

    $user_asset->show_user_asset();

    $user_asset_item = array(
        'id' => $user_asset->ID,
        'id_user' => $user_asset->ID_USER,
        'total_money' => $user_asset->TOTAL_MONEY,
    );

    print_r(json_encode($user_asset_item));


?>