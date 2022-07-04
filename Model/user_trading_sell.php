<?php

class User_Trading_Sell{
    private $conn;

    //user_trading_sell property
    public $ID;
    public $ID_USER_SELL;
    public $ID_COIN;
    public $COIN_QUANTITY_TRADING;
    public $PRICE;
    public $TIME_TRADING;


    //coin_quantity_check property
    public $COIN_QUANTITY_CHECK;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function check_trading_sell(){
        $query = "SELECT * FROM tbl_user_asset_coin WHERE ID_USER =:ID_USER_SELL AND ID_COIN=:ID_COIN";
        $stmt = $this->conn->prepare($query);

        //clean data
        $this->ID_USER_SELL = htmlspecialchars(strip_tags($this->ID_USER_SELL));
        $this->ID_COIN = htmlspecialchars(strip_tags($this->ID_COIN));

        //bind data
        $stmt->bindParam(':ID_USER_SELL', $this->ID_USER_SELL);
        $stmt->bindParam(':ID_COIN', $this->ID_COIN);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->COIN_QUANTITY_CHECK = $row['COIN_QUANTITY'];
    }

    public function extract_quantity_coin(){

        $quantity_coin_extracted = $this->COIN_QUANTITY_CHECK - $this->COIN_QUANTITY_TRADING;

        $query = "UPDATE tbl_user_asset_coin SET COIN_QUANTITY = '$quantity_coin_extracted'
                  WHERE ID_USER =:ID_USER_SELL AND ID_COIN=:ID_COIN ";

        $stmt = $this->conn->prepare($query);

        //clean data
        $this->ID_USER_SELL = htmlspecialchars(strip_tags($this->ID_USER_SELL));
        $this->ID_COIN = htmlspecialchars(strip_tags($this->ID_COIN));

        //bind data
        $stmt->bindParam(':ID_USER_SELL', $this->ID_USER_SELL);
        $stmt->bindParam(':ID_COIN', $this->ID_COIN);

        $stmt->execute();

    }

    public function insert_new_trading_sell(){

        $date = date('y-m-d h:i:s');
        $this->TIME_TRADING = $date;

        $query = "INSERT INTO tbl_trading_sell SET ID_USER_SELL=:ID_USER_SELL, ID_COIN=:ID_COIN,
                COIN_QUANTITY_TRADING=:COIN_QUANTITY_TRADING, PRICE=:PRICE, TIME_TRADING=:TIME_TRADING"; 
        $stmt = $this->conn->prepare($query);

        //clean data
        $this->ID_USER_SELL = htmlspecialchars(strip_tags($this->ID_USER_SELL));
        $this->ID_COIN = htmlspecialchars(strip_tags($this->ID_COIN));
        $this->COIN_QUANTITY_TRADING = htmlspecialchars(strip_tags($this->COIN_QUANTITY_TRADING));
        $this->PRICE = htmlspecialchars(strip_tags($this->PRICE));
        $this->TIME_TRADING = htmlspecialchars(strip_tags($this->TIME_TRADING));

        //bind data
        $stmt->bindParam(':ID_USER_SELL', $this->ID_USER_SELL);
        $stmt->bindParam(':ID_COIN', $this->ID_COIN);
        $stmt->bindParam(':COIN_QUANTITY_TRADING', $this->COIN_QUANTITY_TRADING);
        $stmt->bindParam(':PRICE', $this->PRICE);
        $stmt->bindParam(':TIME_TRADING', $this->TIME_TRADING);

        
        if($stmt->execute()){
            return true;
        }

        printf("ERROR %s.\n",$stmt->error);
        return false;
    }

}

?>