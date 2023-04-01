<?php

require 'functions.php';

// izvršavamo upit za dobavljanje svih korisnika
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

// provjeravamo da li je upit uspješno izvršen
if ($result->rowCount() > 0) {
    $users = array();
    // prolazimo kroz sve dobijene redove i dodajemo podatke za svakog korisnika u niz
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $user = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'surname' => $row['surname'],
            'username' => $row['username'],
            'email' => $row['email']
        );
        array_push($users, $user);
    }
    // pretvaramo niz korisnika u JSON format i ispisujemo ga
    echo json_encode($users);
} else {
    echo "Nema korisnika u bazi";
}

// zatvaramo konekciju
$conn = null;