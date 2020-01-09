<?php
 
    //Header
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: applicaion/json');

    include_once '../../config/Database.php';
    include_once '../../models/Post.php';  


    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate blog post object
    $post = new POST($db); 


    // Blog post query
    $result = $post->read();
    // Get row count
    $num = $result->rowCount();

    // Get POST param if existed
    // $post->id = isset($_GET['id']) ? $_GET['id'] : die(); 
    $post->author = isset($_GET['author']) ? $_GET['author'] : die();

    // Call method
    $post->read_single();
 


    $post_arr = array( 
        // the ID
        'id' => $post->id,
        'title' => $post->title . rand(0,9),
        'body' => $post->body,
        'author' => $post->author,
        'category_id' => $post->category_id,
        'category_name' => $post->category_name
    );

    print_r(json_encode($post_arr));
