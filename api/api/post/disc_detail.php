<?php
    //Header
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: applicaion/json');

    include_once '../../config/Database.php'; 
    include_once '../../models/Discrepancy.php'; 


    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // $post = new POST($db);
    $post = new Discrepancy($db);

    $post->GROUP_NAME = isset($_GET['GROUP_NAME']) ? $_GET['GROUP_NAME'] : die();
    $post->NCR_NUMBER = isset($_GET['NCR_NUMBER']) ? $_GET['NCR_NUMBER'] : die();
    $post->DISCR_NO = isset($_GET['DISCR_NO']) ? $_GET['DISCR_NO'] : die();

    $post->read_single();
 
 
            $post_arr = array( 
                'groupName' => $post->GROUP_NAME,
                'userId' => $post->USER_ID,
                'userLastName' => $post->USER_LAST_NAME,
                'userFirstName' => $post->USER_FIRST_NAME,
                'ncrNumber' => $post->NCR_NUMBER,
                'discrNo' => $post->DISCR_NO,
                'qtH' => $post->QT_H,
                'cmlQtH' => $post->CML_QT_H . rand(0,9),
                'linkDiscTo' => $post->LINK_DISC_TO, 
                "partDescription" => $post->PART_DESCRIPTION,
                "vendorCode" => $post->VENDOR_CODE,
                "vendorName" => $post->VENDOR_NAME,
                "inQueueDate" => $post->IN_QUEUE_DATE,
                "startDate" => $post->START_DATE,
                "notes" => $post->NOTES,
                "actionCode" => $post->ACTION_CODE,
                "prodSeqFrom" => $post->PROD_SEQ_FROM,
            );
      

            print_r(json_encode($post_arr));