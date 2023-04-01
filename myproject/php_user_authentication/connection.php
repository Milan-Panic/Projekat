<?php
require_once 'classes/Database.php';

$db = new Database();
$conn = $db->connect();

if ($conn) {
    // echo 'Povezan na bazu!';
} else {
    echo 'Greška prilikom povezivanja na bazu.';
}
