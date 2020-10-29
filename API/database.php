<?php
$link = mysqli_connect("127.0.0.1", "root", "", "base");
$query = "select * from account";
$res = mysqli_query ( $link , $query );

