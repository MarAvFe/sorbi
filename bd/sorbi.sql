-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema Sorbi
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Sorbi` ;

-- -----------------------------------------------------
-- Schema Sorbi
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Sorbi` DEFAULT CHARACTER SET utf8 ;
USE `Sorbi` ;

-- -----------------------------------------------------
-- Table `Sorbi`.`Survey`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`Survey` (
  `idSurvey` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `company` VARCHAR(45) NOT NULL,
  `project` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idSurvey`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Sorbi`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`User` (
  `idUser` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `passwd` VARCHAR(2048) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Sorbi`.`User_has_Survey`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`User_has_Survey` (
  `User_idUser` INT NOT NULL,
  `Survey_idSurvey` INT NOT NULL,
  `owner` BIT NULL,
  PRIMARY KEY (`User_idUser`, `Survey_idSurvey`),
  INDEX `fk_User_has_Survey_Survey1_idx` (`Survey_idSurvey` ASC),
  INDEX `fk_User_has_Survey_User_idx` (`User_idUser` ASC),
  CONSTRAINT `fk_User_has_Survey_User`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `Sorbi`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Survey_Survey1`
    FOREIGN KEY (`Survey_idSurvey`)
    REFERENCES `Sorbi`.`Survey` (`idSurvey`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Sorbi`.`QuestionType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`QuestionType` (
  `idQuestionType` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idQuestionType`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Sorbi`.`Question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`Question` (
  `idQuestion` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(1024) NOT NULL,
  `QuestionType_idQuestionType` INT NOT NULL,
  `Survey_idSurvey` INT NOT NULL,
  PRIMARY KEY (`idQuestion`, `QuestionType_idQuestionType`, `Survey_idSurvey`),
  INDEX `fk_Question_QuestionType1_idx` (`QuestionType_idQuestionType` ASC),
  INDEX `fk_Question_Survey1_idx` (`Survey_idSurvey` ASC),
  CONSTRAINT `fk_Question_QuestionType1`
    FOREIGN KEY (`QuestionType_idQuestionType`)
    REFERENCES `Sorbi`.`QuestionType` (`idQuestionType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Question_Survey1`
    FOREIGN KEY (`Survey_idSurvey`)
    REFERENCES `Sorbi`.`Survey` (`idSurvey`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Sorbi`.`Answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`Answer` (
  `idAnswer` INT NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(1024) NOT NULL,
  `Question_idQuestion` INT NOT NULL,
  PRIMARY KEY (`idAnswer`, `Question_idQuestion`),
  INDEX `fk_Answer_Question1_idx` (`Question_idQuestion` ASC),
  CONSTRAINT `fk_Answer_Question1`
    FOREIGN KEY (`Question_idQuestion`)
    REFERENCES `Sorbi`.`Question` (`idQuestion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Sorbi`.`Option`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`Option` (
  `idOption` INT NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(45) NULL,
  PRIMARY KEY (`idOption`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Sorbi`.`Question_has_Option`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`Question_has_Option` (
  `Question_idQuestion` INT NOT NULL,
  `Option_idOption` INT NOT NULL,
  PRIMARY KEY (`Question_idQuestion`, `Option_idOption`),
  INDEX `fk_Question_has_Option_Option1_idx` (`Option_idOption` ASC),
  INDEX `fk_Question_has_Option_Question1_idx` (`Question_idQuestion` ASC),
  CONSTRAINT `fk_Question_has_Option_Question1`
    FOREIGN KEY (`Question_idQuestion`)
    REFERENCES `Sorbi`.`Question` (`idQuestion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Question_has_Option_Option1`
    FOREIGN KEY (`Option_idOption`)
    REFERENCES `Sorbi`.`Option` (`idOption`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Sorbi`.`OptionsTemplate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`OptionsTemplate` (
  `idOptionsTemplate` INT NOT NULL AUTO_INCREMENT,
  `OptionsTemplatecol` VARCHAR(45) NULL,
  PRIMARY KEY (`idOptionsTemplate`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Sorbi`.`OptionsTemplate_has_Option`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Sorbi`.`OptionsTemplate_has_Option` (
  `OptionsTemplate_idOptionsTemplate` INT NOT NULL,
  `Option_idOption` INT NOT NULL,
  PRIMARY KEY (`OptionsTemplate_idOptionsTemplate`, `Option_idOption`),
  INDEX `fk_OptionsTemplate_has_Option_Option1_idx` (`Option_idOption` ASC),
  INDEX `fk_OptionsTemplate_has_Option_OptionsTemplate1_idx` (`OptionsTemplate_idOptionsTemplate` ASC),
  CONSTRAINT `fk_OptionsTemplate_has_Option_OptionsTemplate1`
    FOREIGN KEY (`OptionsTemplate_idOptionsTemplate`)
    REFERENCES `Sorbi`.`OptionsTemplate` (`idOptionsTemplate`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OptionsTemplate_has_Option_Option1`
    FOREIGN KEY (`Option_idOption`)
    REFERENCES `Sorbi`.`Option` (`idOption`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
