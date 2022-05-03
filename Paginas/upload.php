<?php

$result='';
if(isset($_FILES['files']['name'][0])){
    foreach($_FILES['file']['name'] as $key => $files){
        $file_name = 'upload/'.$_Files['file']['name'][$key];

        if(move_uploaded_file($_Files['file']['tmp_name'][$key], $file_name))
        $result.="<div class=\"image\"><img src=\"${file_name}\" /</div>";
    }
    echo $result;
}