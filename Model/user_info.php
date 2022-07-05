<?php

class User_Info{
    private $conn;

    //question property
    public $ID;
    public $NAME;
    public $EMAIL;
    public $PASS_WORD;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //login function
    public function login_user(){
        $query = "SELECT * FROM tbl_account_user WHERE EMAIL =:EMAIL AND PASS_WORD=:PASS_WORD LIMIT 1";
        $stmt = $this->conn->prepare($query);
        
        $stmt->bindParam(':EMAIL', $this->EMAIL);
        $stmt->bindParam(':PASS_WORD', $this->PASS_WORD);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->ID = $row['ID'];
        $this->NAME = $row['NAME'];

        return $stmt;
    }

}

?>