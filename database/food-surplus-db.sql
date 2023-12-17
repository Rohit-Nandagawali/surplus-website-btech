-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: surplus
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `donation`
--

DROP TABLE IF EXISTS `donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donation` (
  `donationId` int NOT NULL AUTO_INCREMENT,
  `donorId` int DEFAULT NULL,
  `donationName` varchar(255) NOT NULL,
  `donationType` varchar(255) DEFAULT NULL,
  `noOfDonations` int DEFAULT NULL,
  `donationDescription` text,
  `donationExpiry` date DEFAULT NULL,
  `donationPickupLatitude` decimal(10,6) DEFAULT NULL,
  `donationPickupLongitude` decimal(10,6) DEFAULT NULL,
  `donationPickupGeohash` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`donationId`),
  KEY `donorId` (`donorId`),
  CONSTRAINT `donation_ibfk_1` FOREIGN KEY (`donorId`) REFERENCES `donor` (`donorId`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donation`
--

LOCK TABLES `donation` WRITE;
/*!40000 ALTER TABLE `donation` DISABLE KEYS */;
INSERT INTO `donation` VALUES (1,1,'Food','Food',100,'Gently used clothing for all ages','2023-12-29',40.712800,-74.006000,'abcd1234'),(2,2,'Medical Supplies','Medical',50,'Various medical supplies and equipment','2023-11-30',34.052200,-118.243700,'efgh5678'),(3,3,'School Supplies','Education',75,'Books, pens, and other school supplies','2023-12-02',41.878100,-87.629800,'ijkl9012'),(4,4,'Pet Food Drive','Pets',30,'Food and supplies for pets in need','2023-09-30',51.507400,-0.127800,'mnop3456'),(5,5,'Food Bank','Food',200,'Canned goods, non-perishables','2023-12-15',35.689500,139.691700,'qrst7890'),(29,1,'Pen','Education',100,'Gently used clothing for all ages','2023-12-28',40.712800,-74.006000,'abcd1234'),(30,3,'Dahi','Food',10,'desc','2023-12-02',12.345678,-13.466500,'dfk5645'),(32,3,'Pant','Cloth',10,'desc','2023-12-02',12.345678,-13.466500,'dfk5645'),(33,3,'Pen','Educational Material',10,'desc','2023-12-02',12.345678,-13.466500,'dfk5645'),(35,22,'marriage food good quality','dry fruits',100,'very good quality food','2023-12-10',1.465650,-131.456400,'dfhdj56'),(36,NULL,'hello','hii',10,'dkfjdk','2023-12-10',1.456460,-53.456460,'fdkjf6333'),(37,1,'foood','food',100,'food for childrens','2023-12-06',1.255500,-1.265560,'ghgh323');
/*!40000 ALTER TABLE `donation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donee`
--

DROP TABLE IF EXISTS `donee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donee` (
  `doneeId` int NOT NULL AUTO_INCREMENT,
  `doneeName` varchar(255) NOT NULL,
  `latitude` decimal(10,6) DEFAULT NULL,
  `longitude` decimal(10,6) DEFAULT NULL,
  `geohash` varchar(12) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  PRIMARY KEY (`doneeId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donee`
--

LOCK TABLES `donee` WRITE;
/*!40000 ALTER TABLE `donee` DISABLE KEYS */;
INSERT INTO `donee` VALUES (1,'Community Shelter',38.895100,-77.036400,'uvwx5678','shelter@example.com','shelterpass'),(2,'Children\'s Hospital',37.774900,-122.419400,'yzab9012','hospital@example.com','hospitalpass'),(3,'Local School',33.749000,-84.388000,'cdef1234','school@example.com','schoolpass'),(4,'Animal Rescue',51.165700,10.451500,'ghij2345','rescue@example.com','rescuepass'),(5,'Elderly Care Center',40.712800,-74.006000,'klmn3456','carecenter@example.com','carepass'),(28,'Team Updated',38.895100,-77.036400,'uvwx5678','temp@example.com','temp'),(29,'Temp Community Shelter',38.895100,-77.036400,'uvwx5678','tempshelter@example.com','tempshelterpass'),(30,'rohitttt',1.234567,-1.234650,'123sd','rohit@gmail.com','pass'),(31,'Rohit Nandagawali',1.465400,-4.456000,'dh134','nandagawalirohit143@gmail.com','pass123'),(32,'Chetan',1.546640,-1.164600,'dfhf56','chetan@1234','pass123');
/*!40000 ALTER TABLE `donee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donor`
--

DROP TABLE IF EXISTS `donor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donor` (
  `donorId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `orgName` varchar(255) DEFAULT NULL,
  `latitude` decimal(10,6) DEFAULT NULL,
  `longitude` decimal(10,6) DEFAULT NULL,
  `geohash` varchar(12) DEFAULT NULL,
  `avgRatings` decimal(3,2) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  PRIMARY KEY (`donorId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donor`
--

LOCK TABLES `donor` WRITE;
/*!40000 ALTER TABLE `donor` DISABLE KEYS */;
INSERT INTO `donor` VALUES (1,'John Patil','John Patil Charity Foundation',40.712800,-74.006000,'abcd1234',3.43,'john.doe@example.com','password123'),(2,'Alice Smith','Helping Hands',34.052200,-118.243700,'efgh5678',3.80,'alice.smith@example.com','securepass'),(3,'Bob Johnson','Community Cares',41.878100,-87.629800,'ijkl9012',4.20,'bob.johnson@example.com','pass123'),(4,'Emma Davis','Kindness Initiative',51.507400,-0.127800,'mnop3456',4.00,'emma.davis@example.com','secret123'),(5,'Michael White','Neighbors Support',35.689500,139.691700,'qrst7890',4.70,'michael.white@example.com','mypassword'),(18,'jinesh zhatu','Charity Foundation',40.712800,-74.006000,'abcd1234',4.50,'jinu@example.com','password123'),(19,'jinesh zhatu','Charity Foundation',40.712800,-74.006000,'abcd1234',4.50,'jinuJhatu123@example.com','password123'),(21,'Temp John Patil','Temp John Patil Charity Foundation',40.712800,-74.006000,'abcd1234',3.00,'tempjohn.doe@example.com','password123'),(22,'shweta','no organization',1.236500,-1.456400,'dfjk123',2.50,'sh@gmail.com','123'),(23,'Chetan','Chetan Org',20.400000,69.630000,'fhfhfhfh45',0.00,'chetan@gmail.com','chetn123');
/*!40000 ALTER TABLE `donor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `feedbackId` int NOT NULL AUTO_INCREMENT,
  `donationId` int DEFAULT NULL,
  `feedbackTitle` varchar(255) NOT NULL,
  `feedbackDescription` text,
  `doneeId` int DEFAULT NULL,
  PRIMARY KEY (`feedbackId`),
  KEY `donationId` (`donationId`),
  KEY `doneeId` (`doneeId`),
  CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`donationId`) REFERENCES `donation` (`donationId`),
  CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`doneeId`) REFERENCES `donee` (`doneeId`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,1,'Great Contribution','Thank you for the clothing donation!',1),(2,2,'Helpful Medical Supplies','The medical supplies were very helpful for our patients.',2),(3,3,'Educational Support','The school supplies donation was excellent for our students.',3),(4,4,'Pet Rescue Appreciation','Thank you for helping our animal rescue efforts.',4),(5,5,'Food Bank Support','The donated food helped many families in need.',5),(38,1,'Temp Great Contribution','Thank you for the clothing donation!',1),(39,1,' very good food','i like it',31),(40,1,' very good food','i like it',31);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `reviewId` int NOT NULL AUTO_INCREMENT,
  `doneeId` int DEFAULT NULL,
  `donorId` int DEFAULT NULL,
  `reviewTitle` varchar(255) NOT NULL,
  `reviewDescription` text,
  `rating` decimal(3,2) DEFAULT NULL,
  PRIMARY KEY (`reviewId`),
  KEY `doneeId` (`doneeId`),
  KEY `donorId` (`donorId`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`doneeId`) REFERENCES `donee` (`doneeId`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`donorId`) REFERENCES `donor` (`donorId`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,1,'Positive Experience','Working with this charity was a positive experience.',4.50),(2,2,2,'Grateful for Support','The donor\'s support has been invaluable to our hospital.',4.00),(3,3,3,'Excellent Donation','The school supplies donation was excellent for our students.',4.20),(4,4,4,'Pet Rescue Appreciation','Thank you for helping our animal rescue efforts.',4.70),(5,5,5,'Community Support','The food bank donation positively impacted our community.',4.30),(25,1,1,'Temp Positive Experience','Working with this charity was a positive experience.',4.50),(26,1,1,'Temp Community Support','Temp Working with this charity was a positive experience',1.50),(27,1,1,'Temp Pet Rescue Appreciation','Temp The donor\'s support has been invaluable to our hospital',1.50),(28,32,1,'very good','very very good',4.00),(29,32,1,'heelo','hiii',4.00),(30,32,1,'heelo','hiii',4.00),(31,31,22,'hiii','hello',1.20),(32,31,22,'hello','hii',4.20),(33,31,22,'1','hii',2.10);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `UpdateDonorAvgRating` AFTER INSERT ON `review` FOR EACH ROW BEGIN
  DECLARE v_donorId INT;
  DECLARE v_newRating DECIMAL(3, 2);

  -- Get the donorId of the reviewed donor
  SELECT donorId INTO v_donorId FROM Review WHERE reviewId = NEW.reviewId;

  -- Calculate the new average rating for the donor
  SELECT AVG(rating) INTO v_newRating FROM Review WHERE donorId = v_donorId;

  -- Update the donor's average rating in the Donor table
  UPDATE Donor SET avgRatings = v_newRating WHERE donorId = v_donorId;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping events for database 'surplus'
--

--
-- Dumping routines for database 'surplus'
--
/*!50003 DROP PROCEDURE IF EXISTS `AddDonation` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddDonation`(
    IN p_donorId INT,
    IN p_donationName VARCHAR(255),
    IN p_donationType VARCHAR(255),
    IN p_noOfDonations INT,
    IN p_donationDescription TEXT,
    IN p_donationExpiry DATE,
    IN p_donationPickupLatitude DECIMAL(10, 6),
    IN p_donationPickupLongitude DECIMAL(10, 6),
    IN p_donationPickupGeohash VARCHAR(12)
)
BEGIN
    -- Insert new donation
    INSERT INTO Donation (donorId, donationName, donationType, noOfDonations, donationDescription, donationExpiry, donationPickupLatitude, donationPickupLongitude, donationPickupGeohash)
    VALUES (p_donorId, p_donationName, p_donationType, p_noOfDonations, p_donationDescription, p_donationExpiry, p_donationPickupLatitude, p_donationPickupLongitude, p_donationPickupGeohash);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AddFeedback` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddFeedback`(
    IN p_donationId INT,
    IN p_feedbackTitle VARCHAR(255),
    IN p_feedbackDescription TEXT,
    IN p_doneeId INT
)
BEGIN
    -- Insert new feedback
    INSERT INTO Feedback (donationId, feedbackTitle, feedbackDescription, doneeId)
    VALUES (p_donationId, p_feedbackTitle, p_feedbackDescription, p_doneeId);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AddReview` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddReview`(
    IN p_doneeId INT,
    IN p_donorId INT,
    IN p_reviewTitle VARCHAR(255),
    IN p_reviewDescription TEXT,
    IN p_rating DECIMAL(3, 2)
)
BEGIN
    -- Insert new review
    INSERT INTO Review (doneeId, donorId, reviewTitle, reviewDescription, rating)
    VALUES (p_doneeId, p_donorId, p_reviewTitle, p_reviewDescription, p_rating);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RegisterDonee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RegisterDonee`(
    IN p_doneeName VARCHAR(255),
    IN p_latitude DECIMAL(10, 6),
    IN p_longitude DECIMAL(10, 6),
    IN p_geohash VARCHAR(12),
    IN p_email VARCHAR(255),
    IN p_passwd VARCHAR(255)
)
BEGIN
    DECLARE doneeEmail VARCHAR(255);
    DECLARE emailExists BOOLEAN DEFAULT FALSE;

    -- Declare cursor to fetch existing emails
    DECLARE emailCursor CURSOR FOR SELECT email FROM Donee;

    -- Declare handler for when no more rows are found
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET emailExists = FALSE;

    -- Open the cursor
    OPEN emailCursor;

    -- Loop to check if the email already exists
    email_loop: LOOP
        -- Fetch email from the cursor
        FETCH emailCursor INTO doneeEmail;

        -- Check if we have reached the end of the cursor
        IF emailExists = FALSE THEN
            LEAVE email_loop;
        END IF;

        -- Check if the fetched email matches the provided email
        IF doneeEmail = p_email THEN
            SET emailExists = TRUE;
            LEAVE email_loop;
        END IF;
    END LOOP;

    -- Close the cursor
    CLOSE emailCursor;

    -- Check if the email already exists
    IF emailExists THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Email already registered';
    ELSE
        -- Insert new donee
        INSERT INTO Donee (doneeName, latitude, longitude, geohash, email, passwd)
        VALUES (p_doneeName, p_latitude, p_longitude, p_geohash, p_email, p_passwd);
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RegisterDonor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RegisterDonor`(
    IN p_name VARCHAR(255),
    IN p_orgName VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_passwd VARCHAR(255),
    IN p_latitude DECIMAL(10, 6),
    IN p_longitude DECIMAL(10, 6),
    IN p_geohash VARCHAR(12),
    IN p_avgRatings DECIMAL(3, 2)
)
BEGIN
    DECLARE donorEmail VARCHAR(255);
    DECLARE emailExists BOOLEAN DEFAULT FALSE;

    -- Declare cursor to fetch existing emails
    DECLARE emailCursor CURSOR FOR SELECT email FROM Donor;

    -- Declare handler for when no more rows are found
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET emailExists = FALSE;

    -- Open the cursor
    OPEN emailCursor;

    -- Loop to check if the email already exists
    email_loop: LOOP
        -- Fetch email from the cursor
        FETCH emailCursor INTO donorEmail;

        -- Check if we have reached the end of the cursor
        IF emailExists = FALSE THEN
            LEAVE email_loop;
        END IF;

        -- Check if the fetched email matches the provided email
        IF donorEmail = p_email THEN
            SET emailExists = TRUE;
            LEAVE email_loop;
        END IF;
    END LOOP;

    -- Close the cursor
    CLOSE emailCursor;

    -- Check if the email already exists
    IF emailExists THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Email already registered';
    ELSE
        -- Insert new donor
        INSERT INTO Donor (name, orgName, email, passwd, latitude, longitude, geohash, avgRatings)
        VALUES (p_name, p_orgName, p_email, p_passwd, p_latitude, p_longitude, p_geohash, p_avgRatings);
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateDonationWithCursor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateDonationWithCursor`(
    IN p_donationId INT,
    IN p_donorId INT,
    IN p_donationName VARCHAR(255),
    IN p_donationType VARCHAR(255),
    IN p_noOfDonations INT,
    IN p_donationDescription TEXT,
    IN p_donationExpiry DATE,
    IN p_donationPickupLatitude DECIMAL(10, 6),
    IN p_donationPickupLongitude DECIMAL(10, 6),
    IN p_donationPickupGeohash VARCHAR(12)
)
BEGIN
    -- Declare variables for cursor
    DECLARE doneeIdVar INT;
    DECLARE doneeCursor CURSOR FOR SELECT doneeId FROM Donee;

    -- Declare handler for when no more rows are found
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET doneeIdVar = NULL;

    -- Open the cursor
    OPEN doneeCursor;

    read_loop: LOOP
        -- Fetch doneeId from the cursor
        FETCH doneeCursor INTO doneeIdVar;

        -- Check if we have reached the end of the cursor
        IF doneeIdVar IS NULL THEN
            LEAVE read_loop;
        END IF;

        -- Add your custom logic here for each donation update
        -- For example, you can perform some action for each donee related to the donation update
        -- ...

    END LOOP;

    -- Close the cursor
    CLOSE doneeCursor;

    -- Update the donation record
    UPDATE Donation
    SET
        donorId = p_donorId,
        donationName = p_donationName,
        donationType = p_donationType,
        noOfDonations = p_noOfDonations,
        donationDescription = p_donationDescription,
        donationExpiry = p_donationExpiry,
        donationPickupLatitude = p_donationPickupLatitude,
        donationPickupLongitude = p_donationPickupLongitude,
        donationPickupGeohash = p_donationPickupGeohash
    WHERE donationId = p_donationId;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-17  0:12:32
