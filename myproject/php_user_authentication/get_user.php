<?php

require 'functions.php';

// provera da li je prosleđen ID kao query parametar
if (isset($_GET['id'])) {
    $id = $_GET['id'];
  } else {
    echo "ID parametar nije prosleđen!";
    exit;
  }
  
  // izvršavanje upita
  $stmt = $conn->prepare("SELECT * FROM users WHERE id=:id");
  $stmt->bindParam(':id', $id);
  $stmt->execute();
  
  // dohvatanje rezultata upita
  $user = $stmt->fetch(PDO::FETCH_ASSOC);
  
  // provera da li je korisnik pronađen
  if (!$user) {
    echo "Korisnik sa ID $id nije pronađen!";
    exit;
  }
  
  // ispis podataka o korisniku u JSON formatu
  header('Content-Type: application/json');
  echo json_encode($user);
  
  // zatvaranje konekcije
  $conn = null;