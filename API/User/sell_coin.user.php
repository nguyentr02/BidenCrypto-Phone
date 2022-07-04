<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization,X-Requested-With');

    include_once $_SERVER['DOCUMENT_ROOT'].'/Config/db.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/Model/user_trading_sell.php';

    $db = new db();
    $connect = $db->connect();
    $user_trading_sell = new User_Trading_Sell($connect);

    $data = json_decode(file_get_contents("php://input"));

    $user_trading_sell->ID_USER_SELL = $data->id_user;
    $user_trading_sell->ID_COIN = $data->id_coin;
    $user_trading_sell->COIN_QUANTITY_TRADING = $data->coin_quantity;
    $user_trading_sell->PRICE = $data->price;

    $user_trading_sell ->check_trading_sell();


    if($user_trading_sell->COIN_QUANTITY_CHECK >= $user_trading_sell->COIN_QUANTITY_TRADING){

        $user_trading_sell->extract_quantity_coin();

        if($user_trading_sell->insert_new_trading_sell()){
            echo json_encode(array('message'=>'success'));
        }
        else{
            echo json_encode(array('message'=>'failed'));
        }

    }
    else{
        echo json_encode(array('message'=>'coin quantity selling not available'));
    }

    
?>