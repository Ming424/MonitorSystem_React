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

    // Blog post query
    $result = $post->read();

    // Get row count
    $num = $result->rowCount();

    // Check if any posts
    if($num>0){
 

        // Post array
        $posts_arr = array();
        $posts_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            extract($row);
 
 
            $post_item = array( 
                'groupName' => $GROUP_NAME,
                'userId' => $USER_ID,
                'userLastName' => $USER_LAST_NAME,
                'userFirstName' => $USER_FIRST_NAME,
                'ncrNumber' => $NCR_NUMBER,
                'discrNo' => $DISCR_NO,
                'qtH' =>  rand(10,50) + $QT_H ,
                'cmlQtH' => $CML_QT_H,
                'linkDiscTo' => "!!!WRONG_PATH!!!", 
                "partDescription" => "!!!WRONG_PATH!!!",
                "vendorCode" => "!!!WRONG_PATH!!!",
                "vendorName" => "!!!WRONG_PATH!!!",
                "inQueueDate" => "!!!WRONG_PATH!!!",
                "startDate" => "!!!WRONG_PATH!!!",
                "notes" => "!!!WRONG_PATH!!!",
                "actionCode" => "!!!WRONG_PATH!!!",
                "prodSeqFrom" => "!!!WRONG_PATH!!!",
            );
      

            // Push to "data"
            array_push($posts_arr['data'], $post_item);
            // array_push($posts_arr, $post_item);
        }

        // Turn to JSON
        echo json_encode($posts_arr);
 

    } else {
        echo json_encode(array('message' => 'No Posts Found'));
    }


    // http://localhost/php_rest_myblog/api/post/read.php