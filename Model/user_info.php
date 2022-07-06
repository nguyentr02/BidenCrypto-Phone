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

    public function new_user(){
        
        $query = "INSERT INTO tbl_account_user SET NAME=:NAME, EMAIL=:EMAIL, PASS_WORD=:PASS_WORD"; 
        $stmt = $this->conn->prepare($query);
        

        //clean data
        $this->NAME = htmlspecialchars(strip_tags($this->NAME));
        $this->EMAIL = htmlspecialchars(strip_tags($this->EMAIL));
        $this->PASS_WORD = htmlspecialchars(strip_tags($this->PASS_WORD));

        //bind data
        $stmt->bindParam(':NAME', $this->NAME);
        $stmt->bindParam(':EMAIL', $this->EMAIL);
        $stmt->bindParam(':PASS_WORD', $this->PASS_WORD);

        if($stmt->execute()){
            return true;
        }

        printf("ERROR %s.\n",$stmt->error);
        return false;
    }

}

?>