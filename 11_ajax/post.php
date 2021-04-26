<?php

    // $carros = array("carros" => array(
    //     array("nome"=>"palio", "cor"=>"preto","ano"=>"2017"),
    //     array("nome"=>"gol", "cor"=>"azul","ano"=>"2016")
    // ));
    

    //$nome = filter_input(INPUT_POST,'nome',FILTER_SANITIZE_SPECIAL_CHARS);

    //echo $nome;

    //echo json_encode($carros, JSON_NUMERIC_CHECK )

    if($_POST){

        echo 'retorno: '.$_POST['nome'];

    }

    

    

?>