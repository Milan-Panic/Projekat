<?php
require 'functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

    $data = json_decode(file_get_contents("php://input"));
    
    $name = $data->name;
    $surname = $data->surname;
    $username = $data->username;
    $password = $data->password;
    $email = $data->email;
    
    // Generiranje tokena
    $token = bin2hex(random_bytes(32));
    
    // Priprema i izvršavanje SQL upita
    $stmt = $conn->prepare("INSERT INTO users (name, surname, username, password, email, token) VALUES (:name, :surname, :username, :password, :email, :token)");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':surname', $surname);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':token', $token);
    $stmt->execute();
    
    // Provjera uspješnosti izvršavanja upita
    if ($stmt->rowCount() > 0) {
        echo "Uspješno dodan novi korisnik!";
    } else {
        echo "Dogodila se greška prilikom dodavanja korisnika.";
    }
    
    // Zatvaranje konekcije
    $conn = null;
}
