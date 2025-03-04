<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HillTop_Database</title>
</head>
<body>
    <?php
    $servername = "hilltoplocalserver";
    $username = "root";
    $password = "";
    $dbname = "hilltopdatabase";


    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname); 
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    //drop database if it exists
    $sql = "DROP DATABASE IF EXISTS hilltopdatabase";
    if ($conn->query($sql) === TRUE) {
        echo "Database dropped successfully\n";
    } else {
        echo "Error dropping database: " . $conn->error;
    }

    // Create database
    $sql = "CREATE DATABASE hilltopdatabase";
    if ($conn->query($sql) === TRUE) {
        echo "Database created successfully\n";
    } else {
        echo "Error creating database: " . $conn->error;
    }
    $conn->close();

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // sql to create tables


    $sql = "CREATE TABLE Hotel (
    HotelID INT PRIMARY KEY,
    Name VARCHAR(255),
    Address VARCHAR(255),
    Phone VARCHAR(15),
    Email VARCHAR(255),
    Stars INT,
    CheckinTime TIME,
    CheckoutTime TIME
    )";
    

    if ($conn->query($sql) === TRUE) {
        echo "Table Users created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }

    $sql = "CREATE TABLE RoomType (
    TypeID INT PRIMARY KEY,
    Name VARCHAR(50),
    Description VARCHAR(255),
    PricePerNight DECIMAL(10, 2),
    Capacity INT NOT NULL
    )";
    if ($conn->query($sql) === TRUE) {
        echo "Table Users created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }

    $sql = "CREATE TABLE Room (
    RoomNumber INT PRIMARY KEY,
    HotelID INT,
    TypeID INT,
    Status ENUM('Available', 'Booked', 'Occupied','Maintenance','Cleaning', 'Unavailable'),
    FOREIGN KEY (HotelID) REFERENCES Hotel(HotelID),
    FOREIGN KEY (TypeID) REFERENCES RoomType(TypeID)
    )";
    if ($conn->query($sql) === TRUE) {
        echo "Table Users created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }

    $sql = "CREATE TABLE Guest (
    GuestID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth DATE,
    Phone VARCHAR(15) NOT NULL,
    Email VARCHAR(190) UNIQUE NOT NULL
    )";


    if ($conn->query($sql) === TRUE) {
        echo "Table Users created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }

    $sql = "CREATE TABLE Booking (
    BookingID INT PRIMARY KEY,
    GuestID INT,
    RoomNumber INT,
    CheckinDate DATE NOT NULL,
    CheckoutDate DATE NOT NULL,
    TotalPrice DECIMAL(10, 2),
    FOREIGN KEY (GuestID) REFERENCES Guest(GuestID),
    FOREIGN KEY (RoomNumber) REFERENCES Room(RoomNumber)
    )";
    if ($conn->query($sql) === TRUE) {
        echo "Table Users created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }

    $sql = "CREATE TABLE Payment (
    PaymentID INT PRIMARY KEY,
    BookingID INT,
    Amount DECIMAL(10, 2),
    PaymentDate DATE,
    PaymentMethod VARCHAR(50),
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID)
    )";





    //Hotel operations
    $sql = "CREATE TABLE staff (
    StaffID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth DATE,
    Phone VARCHAR(15) NOT NULL,
    Email VARCHAR(191) UNIQUE NULL,
    Position VARCHAR(50) NOT NULL,
    Salary DECIMAL(10, 2) NOT NULL
    )";

    if ($conn->query($sql) === TRUE) {
        echo "Table Users created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }






    ?>
</body>
</html>