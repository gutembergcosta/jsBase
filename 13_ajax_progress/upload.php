<?php

$files=$_FILES['files'];
move_uploaded_file($files['tmp_name'],"uploads/$files[name]");

?>