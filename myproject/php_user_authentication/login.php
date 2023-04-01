<?php

require 'functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

// provera da li su prosleđeni username i password putem POST zahteva
if (isset($data['username']) && isset($data['password'])) {
    $username = $data['username'];
    $password = $data['password'];
  } else {
    echo "Niste prosledili username i password!";
    exit;
  }
  
  // izvršavanje upita
  $stmt = $conn->prepare("SELECT id, token FROM users WHERE username=:username AND password=:password");
  $stmt->bindParam(':username', $username);
  $stmt->bindParam(':password', $password);
  $stmt->execute();
  
  // dohvatanje rezultata upita
  $user = $stmt->fetch(PDO::FETCH_ASSOC);
  
  // provera da li je korisnik pronađen
  if (!$user) {
    echo "Ne postoji korisnik sa unetim podacima!";
    exit;
  }
  
  // ispis ID-ja i tokena korisnika u JSON formatu
  header('Content-Type: application/json');
  echo json_encode($user);
  
  // zatvaranje konekcije
  $conn = null;
}