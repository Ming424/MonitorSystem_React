<?php
    class Discrepancy {
        // DB stuff
        private $conn;
        private $table = 'discrepancies';
        
        // Post Properies
        public $id;
        public $GROUP_NAME;
        public $USER_ID;
        public $USER_LAST_NAME;
        public $USER_FIRST_NAME;
        public $NCR_NUMBER;
        public $DISCR_NO;
        public $QT_H;
        public $CML_QT_H;
        public $LINK_DISC_TO;
        public $PART_DESCRIPTION;
        public $VENDOR_CODE;
        public $VENDOR_NAME;
        public $IN_QUEUE_DATE;
        public $START_DATE;
        public $NOTES;
        public $ACTION_CODE;
        public $PROD_SEQ_FROM;


        // Constructor with DB
        public function __construct($db){
            $this->conn = $db;
        }

        public function read(){
            $query = 'SELECT * FROM ' . $this->table;

            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }



        // Get Single Post
        public function read_single(){
            $query = 'SELECT * FROM  ' . $this->table . ' p 
                WHERE  
                    p.GROUP_NAME = ? and
                    p.NCR_NUMBER = ? and
                    p.DISCR_NO = ?
                LIMIT 0,3';

            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Bind ID
            $stmt->bindParam(1, $this->GROUP_NAME); 
            $stmt->bindParam(2, $this->NCR_NUMBER); 
            $stmt->bindParam(3, $this->DISCR_NO); 

            // Execute query
            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // Set properties
            // $this->GROUP_NAME = $row['GROUP_NAME'];
            $this->USER_ID = $row['USER_ID'];
            $this->USER_LAST_NAME = $row['USER_LAST_NAME'];
            $this->USER_FIRST_NAME = $row['USER_FIRST_NAME'];
            // $this->NCR_NUMBER = $row['NCR_NUMBER'];
            // $this->DISCR_NO = $row['DISCR_NO'];
            $this->QT_H = $row['QT_H'];
            $this->CML_QT_H = $row['CML_QT_H'];
            $this->LINK_DISC_TO = $row['LINK_DISC_TO']; 
            $this->PART_DESCRIPTION = $row['PART_DESCRIPTION']; 
            $this->VENDOR_CODE = $row['VENDOR_CODE']; 
            $this->VENDOR_NAME = $row['VENDOR_NAME']; 
            $this->IN_QUEUE_DATE = $row['IN_QUEUE_DATE']; 
            $this->START_DATE = $row['START_DATE']; 
            $this->NOTES = $row['NOTES']; 
            $this->ACTION_CODE = $row['ACTION_CODE'];
            $this->PROD_SEQ_FROM = $row['PROD_SEQ_FROM']; 

            

        }
    }