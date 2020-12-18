<?php
    $conn = mysqli_connect("localhost", "Pranjal","test123", "ninja_pizza");
    if(!$conn){
        print "Connection not estabhlished".PHP_EOL;
    }else{
        print "Connection successfully estabhlished!".PHP_EOL;
        $sql = "SELECT * FROM pizza";
        $result  = mysqli_query($conn, $sql);
        $pizzas = mysqli_fetch_all($result, MYSQLI_ASSOC);
        // print_r($pizzas);
        $k = sizeof($pizzas);
        for($i=0;$i<$k;$i++){
            $pizza = $pizzas[$i];
            print $pizza["pizza_name"]." ".$pizza["ingredients"].PHP_EOL;
        }
    }


?>
