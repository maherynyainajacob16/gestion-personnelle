CREATE DATABASE prestaionpm;

use prestationpm;

CREATE TABLE medecin(
    idMed INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    numMed VARCHAR(50) NOT NULL,
    nomMed VARCHAR(100) NOT NULL,
    tauxJour INT(100)
);

SHOW TABLE,

describe medecin;