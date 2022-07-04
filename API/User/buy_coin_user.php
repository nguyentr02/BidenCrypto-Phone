<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization,X-Requested-With');

    include_once $_SERVER['DOCUMENT_ROOT'].'/Config/db.php';
    include_once $_SERVER['DOCUMENT_ROOT'].'/Model/user_trading_buy.php';

    $db = new db();
    $connect = $db->connect();
    $user_trading_buy = new User_Trading_Buy($connect);

    $data = json_decode(file_get_contents("php://input"));

    $user_trading_buy->ID_USER_BUY = $data->id_user;
    $user_trading_buy->ID_COIN = $data->id_coin;
    $user_trading_buy->COIN_QUANTITY_TRADING = $data->coin_quantity;
    $user_trading_buy->PRICE = $data->price;

    $user_trading_buy ->check_trading_buy();

    $trading_value = $user_trading_buy->COIN_QUANTITY_TRADING * $user_trading_buy->PRICE;

    if($user_trading_buy->TOTAL_MONEY_CHECK >= $trading_value ){

        $user_trading_buy->extract_total_money();

        if($user_trading_buy->insert_new_trading_buy()){
            echo json_encode(array('message'=>'success'));
        }
        else{
            echo json_encode(array('message'=>'failed'));
        }

    }
    else{
        echo json_encode(array('message'=>'your total money not enough'));
    }

    
?>