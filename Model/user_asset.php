<?php

class User_Asset{
    private $conn;

    //question property
    public $ID;
    public $ID_USER;
    public $TOTAL_MONEY;
    public $COIN_NAME;
    public $COIN_QUANTITY;
    public $COIN_VALUE;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function show_user_asset(){
        $query = "SELECT * FROM tbl_user_asset WHERE ID_USER =? LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->ID_USER);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->TOTAL_MONEY = $row['TOTAL_MONEY'];
    }

    public function show_user_asset_coin(){
        $query = "SELECT tbl_coin.COIN_NAME, tbl_user_asset_coin.*
                FROM tbl_coin INNER JOIN tbl_user_asset_coin
                ON tbl_coin.ID = tbl_user_asset_coin.ID_COIN 
                WHERE tbl_user_asset_coin.ID_USER =?";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->ID_USER);
        $stmt->execute();

        return $stmt;
    }

}

?>