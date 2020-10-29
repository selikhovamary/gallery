<?php
include("./database.php");
$func = $_GET['func'];
if ($func == "1") {
    
    $login = $_GET['login'];
    $password = $_GET['password'];

    $link = mysqli_connect("127.0.0.1", "root", "", "base");

    $query = "select * from `account` where `user_name`='$login' and `password`='$password'";
    $res = mysqli_query ( $link , $query );
    $row = mysqli_fetch_assoc($res);
    if ($row == null) {
        echo json_encode( [ "result" => "no" ] );
    } else {
        echo json_encode( [ "result" => "ok" ] );
    }
   // var_dump($row);
}
