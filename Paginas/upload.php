<?php

$result='';
if(isset($_FILES['files']['name'][0])){
    foreach($_FILES['file']['name'] as $key => $file){
        $file_name = 'upload/'.$_FILES['file']['name'][$key];

        if(move_uploaded_file($_FILES['file']['tmp_name'][$key], $file_name))
        $result.="<div class=\"image\"><img src=\"${file_name}\" /</div>";
    }
    echo $result;
}