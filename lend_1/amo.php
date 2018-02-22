<?php
/**
 * Created by IntelliJ IDEA.
 * User: Gameover
 * Date: 26.11.2017
 * Time: 13:35
 */

$fd = fopen("amo.txt", 'a+') or die("не удалось открыть файл");
fseek($fd, 0, SEEK_END);
fwrite($fd, "\n" . "/***************" . date('Y-m-d H:i:s') . "***************/" . "\n");
fwrite($fd, "\n" . $_POST['name'] . "\n");
fwrite($fd, "\n" . $_POST['email'] . "\n");
//fwrite($fd, "\n" . $_SERVER['DOCUMENT_ROOT'] . "\n");

//if(include '../../academy.pronetworking.ru/payment/utils/ac_utils.php'){
//    fwrite($fd, "\n" . "ac_utils.php" . "\n");
//}
//if(include '../../academy.pronetworking.ru/payment/utils/amo_utils.php'){
//    fwrite($fd, "\n" . "amo_utils.php" . "\n");
//}
require_once("includes/ActiveCampaign.class.php");
//include '../../academy.pronetworking.ru/payment/utils/ac_utils.php';
include '../../academy.pronetworking.ru/payment/utils/amo_utils.php';

$ac = new ActiveCampaign("https://pronetworking.api-us1.com/", "32bc8e69aaaf47fb7e2d52cbe81e1205004a4aa503039669f2398532dfea7bd6a33b3498");

if( $_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'], $_POST['email']) ) {


//    addFromForm($_POST['name'], $_POST['email'], isset($_POST['phone']) ? $_POST['phone'] : '-');
//    contact_tag_add($_POST['email'], $_POST['name'], $_POST['phone'],  array(TAG_ACADEMY_SUB));

    if (!(int)$ac->credentials_test()) {
        echo "<p>Access denied: Invalid credentials (URL and/or API key).</p>";
        exit();
    }

    $account = $ac->api("account/view");

    $list_id = 16;

    $contact = array(
        "email"              => $_POST['email'],
        "first_name"         => $_POST['name'],
//		"last_name"          => "t",
        "p[{$list_id}]"      => $list_id,
        "status[{$list_id}]" => 1, // "Active" status
    );

    $contact_sync = $ac->api("contact/sync", $contact);

    if (!(int)$contact_sync->success) {
        echo "<p>Syncing contact failed. Error returned: " . $contact_sync->error . "</p>";
        exit();
    }

    // successful request
    $contact_id = (int)$contact_sync->subscriber_id;

}

fclose($fd);