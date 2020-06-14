-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema flattrackdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `flattrackdb` ;

-- -----------------------------------------------------
-- Schema flattrackdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `flattrackdb` DEFAULT CHARACTER SET utf8 ;
USE `flattrackdb` ;

-- -----------------------------------------------------
-- Table `flat_track_races`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `flat_track_races` ;

CREATE TABLE IF NOT EXISTS `flat_track_races` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `track` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `length` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS flattrackuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'flattrackuser'@'localhost' IDENTIFIED BY 'flattrack';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'flattrackuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `flat_track_races`
-- -----------------------------------------------------
START TRANSACTION;
USE `flattrackdb`;
INSERT INTO `flat_track_races` (`id`, `track`, `name`, `length`) VALUES (1, 'Red Mile', 'Red Mile', '1');

COMMIT;

