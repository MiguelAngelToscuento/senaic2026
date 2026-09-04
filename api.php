<?php
header('Content-Type: application/json');
$dir = 'img/galeria/';

// Crea la carpeta si no existe
if (!file_exists($dir)) {
    mkdir($dir, 0755, true);
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $files = array_values(array_diff(scandir($dir), array('.', '..')));
    echo json_encode($files);
}
elseif ($method === 'POST') {
    if(isset($_FILES['fotos'])) {
        $total = count($_FILES['fotos']['name']);
        for( $i=0 ; $i < $total ; $i++ ) {
            $tmpFilePath = $_FILES['fotos']['tmp_name'][$i];
            if ($tmpFilePath != ""){
                $name = time() . '-' . str_replace(' ', '-', $_FILES['fotos']['name'][$i]);
                move_uploaded_file($tmpFilePath, $dir . $name);
            }
        }
    }
    echo json_encode(["status" => "ok"]);
}
elseif ($method === 'DELETE') {
    $filename = basename($_GET['file']);
    $filePath = $dir . $filename;
    if($filename && file_exists($filePath)) {
        unlink($filePath);
        echo json_encode(["status" => "eliminado"]);
    }
}
?>
