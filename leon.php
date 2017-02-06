<?php

    header('Content-Type: application/json');
    if(!function_exists("curl_init")) die("cURL extension is not installed");


    $time_stamp = timestamp();
    $api_login_user = "testuser";
    $secret_key = "";
    $test = generateTokenHash($api_login_user, $time_stamp, $secret_key);
    $cookieFile = "tmp\cookies.txt";


    // $url = 'https://beta.leon.aero/we/rpc/';
    $url = 'https://leon.aero/we/rpc/';

    // $opr_id   = "ZZZ";
    // $login    = "full";
    $opr_id   = "cat";
    $login    = "FMKD";
    $password = "";


    $dateget = strip_tags($_POST['date']);
    $newdate = $dateget."T00:00Z";
    // echo $newdate;
    $previousdate = date("Y-m-d", strtotime($dateget . '+1 day'));
    $newpreviousdate = $previousdate."T00:00Z";
    // echo $newpreviousdate;

    

    // $from     = "2015-01-01T00:00Z";
    $from     = $newdate;

    // $to       = "2015-03-03T00:00Z";
    $to       = $newpreviousdate;


    $acftReg  = "";
    $crewCode = "";

    function generateTokenHash($api_login_id, $timestamp, $secretKey){

        $string = sprintf('api_login_id:%s,timestamp:%d', $api_login_id, $timestamp);
        return base64_encode(hash_hmac('sha1', $string, $secretKey, TRUE));
    }

    function timestamp(){

        $dt = new DateTime();
        return $dt->getTimeStamp();
    }

    $login = array(
        "id"     => "1",
        "class"  => "AuthSvc",
        "method" => "login",
        "params" => [
            $opr_id,
            $login,
            $password
        ],
    );

    $flight = array(
        "id"     => "1",
        "class"  => "FlightsDirectorySvc",
        "method" => "getSchedule",
        "params" => [
            $from,
            $to,
            $acftReg,
            $crewCode
        ],

    );


    $content = json_encode($login);
    $content2 = json_encode($flight);

    $curl_options = array(
        CURLOPT_URL => $url,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_HEADER => 0,
        CURLOPT_POSTFIELDS => $content,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_FOLLOWLOCATION => TRUE,
        CURLOPT_ENCODING => 'gzip,deflate',
        CURLINFO_HEADER_OUT    => true,
        CURLOPT_COOKIEJAR => '/tmp/cookies.txt',
    );

    $ch = curl_init();
    curl_setopt_array($ch, $curl_options);
    $output = curl_exec($ch);
    curl_close($ch);

    $curl_options2 = array(
        CURLOPT_URL => $url,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_HEADER => 0,
        CURLOPT_POSTFIELDS => $content2,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_FOLLOWLOCATION => TRUE,
        CURLOPT_ENCODING => 'gzip,deflate',
        CURLINFO_HEADER_OUT    => true,
        CURLOPT_COOKIEFILE => '/tmp/cookies.txt',
    );

    $ch = curl_init();
    curl_setopt_array($ch, $curl_options2);
    $output2 = curl_exec($ch);
    curl_close($ch);    

    $arr = json_decode($output2, true);
    





    


    


    $file = fopen('/tmp/cookies.txt', 'r');

    

    $jsonarray = json_encode($arr);
    header('Content-Type: application/json');
    echo json_encode($arr, JSON_PRETTY_PRINT);
    // echo sizeof($jsonarray.flights);
    // echo $jsonarray;
    // echo "LOL";

?>




