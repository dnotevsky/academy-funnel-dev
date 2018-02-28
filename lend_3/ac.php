<?php

include "../utils/ac_utils.php";

$fd = fopen("ac.txt", 'a+') or die("не удалось открыть файл");
fwrite($fd, "qwerty");
fseek($fd, 0, SEEK_END);
$str = '';
fwrite($fd, "\n" . "123" . "qwerty");
foreach($_POST as $key => $val)
{
    $str .= $key.'='.$val."\n";
}
fwrite($fd, "\n" . $str);
fclose($fd);

?>