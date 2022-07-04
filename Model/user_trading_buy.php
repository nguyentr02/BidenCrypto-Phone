<?php

class User_Trading_Buy{
    private $conn;

    //user_trading_sell property
    public $ID;
    public $ID_USER_BUY;
    public $ID_COIN;
    public $COIN_QUANTITY_TRADING;
    public $PRICE;
    public $TIME_TRADING;


    //checking property
    public $TOTAL_MONEY_CHECK;
    
    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function check_trading_buy(){
        $query = "SELECT * FROM tbl_user_asset WHERE ID_USER =:ID_USER_BUY";
        $stmt = $this->conn->prepare($query);

        //clean data
        $this->ID_USER_BUY = htmlspecialchars(strip_tags($this->ID_USER_BUY));

        //bind data
        $stmt->bindParam(':ID_USER_BUY', $this->ID_USER_BUY);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->TOTAL_MONEY_CHECK = $row['TOTAL_MONEY'];
    }

    public function extract_total_money(){

        $trading_value = $this->COIN_QUANTITY_TRADING * $this->PRICE;

        $total_money_extracted = $this->TOTAL_MONEY_CHECK - $trading_value;

        $query = "UPDATE tbl_user_asset SET TOTAL_MONEY = '$total_money_extracted'
                  WHERE ID_USER =:ID_USER_BUY ";

        $stmt = $this->conn->prepare($query);

        //clean data
        $this->ID_USER_BUY = htmlspecialchars(strip_tags($this->ID_USER_BUY));

        //bind data
        $stmt->bindParam(':ID_USER_BUY', $this->ID_USER_BUY);

        $stmt->execute();

    }

    public function insert_new_trading_buy(){

        $date = date('y-m-d h:i:s');
        $this->TIME_TRADING = $date;

        $query = "INSERT INTO tbl_trading_buy SET ID_USER_BUY=:ID_USER_BUY, ID_COIN=:ID_COIN,
                COIN_QUANTITY_TRADING=:COIN_QUANTITY_TRADING, PRICE=:PRICE, TIME_TRADING=:TIME_TRADING"; 
        $stmt = $this->conn->prepare($query);

        //clean data
        $this->ID_USER_BUY = htmlspecialchars(strip_tags($this->ID_USER_BUY));
        $this->ID_COIN = htmlspecialchars(strip_tags($this->ID_COIN));
        $this->COIN_QUANTITY_TRADING = htmlspecialchars(strip_tags($this->COIN_QUANTITY_TRADING));
        $this->PRICE = htmlspecialchars(strip_tags($this->PRICE));
        $this->TIME_TRADING = htmlspecialchars(strip_tags($this->TIME_TRADING));

        //bind data
        $stmt->bindParam(':ID_USER_BUY', $this->ID_USER_BUY);
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