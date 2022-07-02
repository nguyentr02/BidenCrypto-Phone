<?php

class User_Info{
    private $conn;

    //question property
    public $ID;
    public $NAME;
    public $EMAIL;
    public $USER_NAME;
    public $PASSWORD;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read_all_user(){
        $query = "SELECT * FROM tbl_account_user ORDER BY ID ASC";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    // public function show(){
    //     $query = "SELECT * FROM tbl_question WHERE ID_QUESTION =? LIMIT 1";
    //     $stmt = $this->conn->prepare($query);
    //     $stmt->bindParam(1, $this->ID_QUESTION);
    //     $stmt->execute();

    //     $row = $stmt->fetch(PDO::FETCH_ASSOC);

    //     $this->TITLE = $row['TITLE'];
    //     $this->OPTION_A = $row['OPTION_A'];
    //     $this->OPTION_B = $row['OPTION_B'];
    //     $this->OPTION_C = $row['OPTION_C'];
    //     $this->OPTION_D = $row['OPTION_D'];
    //     $this->RIGHT_ANSWER = $row['RIGHT_ANSWER'];
        
    // }

    // public function create(){
    //     $query = "INSERT INTO tbl_question SET TITLE=:TITLE, OPTION_A=:OPTION_A,
    //                           OPTION_B=:OPTION_B, OPTION_C=:OPTION_C, OPTION_D=:OPTION_D, RIGHT_ANSWER=:RIGHT_ANSWER";
    //     $stmt = $this->conn->prepare($query);

    //     //clean data
    //     $this->TITLE = htmlspecialchars(strip_tags($this->TITLE));
    //     $this->OPTION_A = htmlspecialchars(strip_tags($this->OPTION_A));
    //     $this->OPTION_B = htmlspecialchars(strip_tags($this->OPTION_B));
    //     $this->OPTION_C = htmlspecialchars(strip_tags($this->OPTION_C));
    //     $this->OPTION_D = htmlspecialchars(strip_tags($this->OPTION_D));
    //     $this->RIGHT_ANSWER = htmlspecialchars(strip_tags($this->RIGHT_ANSWER));

    //     //bind data
    //     $stmt->bindParam(':TITLE', $this->TITLE);
    //     $stmt->bindParam(':OPTION_A', $this->OPTION_A);
    //     $stmt->bindParam(':OPTION_B', $this->OPTION_B);
    //     $stmt->bindParam(':OPTION_C', $this->OPTION_C);
    //     $stmt->bindParam(':OPTION_D', $this->OPTION_D);
    //     $stmt->bindParam(':RIGHT_ANSWER', $this->RIGHT_ANSWER);


    //     if($stmt->execute()){
    //         return true;
    //     }

    //     printf("ERROR %s.\n",$stmt->error);
    //     return false;

    // }

    // public function update(){
    //     $query = "UPDATE tbl_question SET TITLE=:TITLE, OPTION_A=:OPTION_A, OPTION_B=:OPTION_B, 
    //               OPTION_C=:OPTION_C, OPTION_D=:OPTION_D, RIGHT_ANSWER=:RIGHT_ANSWER WHERE ID_QUESTION =:ID_QUESTION";
    //     $stmt = $this->conn->prepare($query);

    //     //clean data
    //     $this->TITLE = htmlspecialchars(strip_tags($this->TITLE));
    //     $this->OPTION_A = htmlspecialchars(strip_tags($this->OPTION_A));
    //     $this->OPTION_B = htmlspecialchars(strip_tags($this->OPTION_B));
    //     $this->OPTION_C = htmlspecialchars(strip_tags($this->OPTION_C));
    //     $this->OPTION_D = htmlspecialchars(strip_tags($this->OPTION_D));
    //     $this->RIGHT_ANSWER = htmlspecialchars(strip_tags($this->RIGHT_ANSWER));
    //     $this->ID_QUESTION = htmlspecialchars(strip_tags($this->ID_QUESTION));

    //     //bind data
    //     $stmt->bindParam(':TITLE', $this->TITLE);
    //     $stmt->bindParam(':OPTION_A', $this->OPTION_A);
    //     $stmt->bindParam(':OPTION_B', $this->OPTION_B);
    //     $stmt->bindParam(':OPTION_C', $this->OPTION_C);
    //     $stmt->bindParam(':OPTION_D', $this->OPTION_D);
    //     $stmt->bindParam(':RIGHT_ANSWER', $this->RIGHT_ANSWER);
    //     $stmt->bindParam(':ID_QUESTION', $this->ID_QUESTION);

    //     if($stmt->execute()){
    //         return true;
    //     }

    //     printf("ERROR %s.\n",$stmt->error);
    //     return false;

    // }

    // public function delete(){
    //     $query = "DELETE FROM tbl_question WHERE ID_QUESTION =:ID_QUESTION";
    //     $stmt = $this->conn->prepare($query);

    //     //clean data
    //     $this->ID_QUESTION = htmlspecialchars(strip_tags($this->ID_QUESTION));

    //     //bind data
    //     $stmt->bindParam(':ID_QUESTION', $this->ID_QUESTION);

    //     if($stmt->execute()){
    //         return true;
    //     }

    //     printf("ERROR %s.\n",$stmt->error);
    //     return false;

    // }
}

?>