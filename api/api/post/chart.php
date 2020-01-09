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

    date_default_timezone_set("America/New_York");
    $avgQtH = 0;
    $avgCmlQtH = 0;

    $posts_arr = array();

    // Check if any posts
    if($num>0){
  

        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            extract($row); 
  
            $avgQtH+=  $QT_H;
            $avgCmlQtH += $CML_QT_H; 
        }
 

        $post_item = array(  
            'avgQtH' =>  round($avgQtH/$num,2) ,
            'avgCmlQtH' =>  round($avgCmlQtH/$num,2),
            "date" => date("h:i:s")
        );

        array_push($posts_arr, $post_item);
        echo json_encode($posts_arr);
 

    } else {
        echo json_encode(array('message' => 'No Posts Found'));
    }


    // http://localhost/php_rest_myblog/api/post/read.php