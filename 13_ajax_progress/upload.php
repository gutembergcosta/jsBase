<?php

$files=$_FILES['files'];
echo '<pre>$files<br />'; var_dump($files); echo '</pre>';
move_uploaded_file($files['tmp_name'][0],'uploads/'.$files['name'][0]);

?>