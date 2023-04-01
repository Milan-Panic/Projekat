<?php
class Database {
    // promjenjive za povezivanje na bazu podataka
    private $host = 'localhost';
    private $db_name = 'php_authentication';
    private $username = 'root';
    private $password = '';
    private $conn;

    // metoda koja se koristi za povezivanje na bazu
    public function connect() {
        $this->conn = null;

        try {
            // koristimo PDO za povezivanje s bazom
            $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->db_name;
            $this->conn = new PDO($dsn, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo 'Greška prilikom povezivanja na bazu: ' . $e->getMessage();
        }

        return $this->conn;
    }
}
