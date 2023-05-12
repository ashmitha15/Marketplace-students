CREATE TABLE `mercado_escolar`.`users` ( `user_id` INT(5) NOT NULL AUTO_INCREMENT , `name` VARCHAR(50) NOT NULL , `email` VARCHAR(100) NOT NULL , `dob` DATE NOT NULL , `password` VARCHAR(20) NOT NULL , `address` VARCHAR(400) NOT NULL , `gender` VARCHAR(7) NOT NULL , `major` VARCHAR(50) NOT NULL , `university` INT(100) NOT NULL , `photo` BLOB NOT NULL , PRIMARY KEY (`user_id`)) ENGINE = InnoDB;
CREATE TABLE `mercado_escolar`.`business_owner` ( `id` INT(5) NOT NULL AUTO_INCREMENT , `name` VARCHAR(70) NOT NULL , `email` VARCHAR(100) NOT NULL , `shop_name` VARCHAR(100) NOT NULL , `university` VARCHAR(200) NOT NULL , `logo_img` BLOB NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `mercado_escolar`.`posts` ( `user_id` INT(5) NOT NULL , `description` VARCHAR(3000) NOT NULL , `photo` BLOB NOT NULL ) ENGINE = InnoDB;
ALTER TABLE `mercado_escolar`.`posts` ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
CREATE TABLE `mercado_escolar`.`clubs` ( `user_id` INT NOT NULL , `name` VARCHAR(150) NOT NULL , `description` VARCHAR(3000) NOT NULL , `photo` BLOB NOT NULL , UNIQUE (`name`)) ENGINE = InnoDB;
ALTER TABLE `mercado_escolar`.`clubs` ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
CREATE TABLE `mercado_escolar`.`joined_clubs` ( `user_id` INT(5) NOT NULL , `name` INT(150) NOT NULL ) ENGINE = InnoDB;
ALTER TABLE `mercado_escolar`.`joined_clubs` ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
CREATE TABLE `mercado_escolar`.`products` ( `user_id` INT(5) NOT NULL , `name` VARCHAR(150) NOT NULL , `description` VARCHAR(3000) NOT NULL , `price` INT(10) NOT NULL , `category` VARCHAR(100) NOT NULL , `photo` BLOB NOT NULL ) ENGINE = InnoDB;
ALTER TABLE `mercado_escolar`.`products` ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
CREATE TABLE `mercado_escolar`.`orders` ( `user_id` INT(5) NOT NULL , `oid` INT(5) NOT NULL , `name` VARCHAR(150) NOT NULL , `date` DATE NOT NULL , `cost` INT(10) NOT NULL ) ENGINE = InnoDB;
ALTER TABLE `mercado_escolar`.`orders` ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
CREATE TABLE `mercado_escolar`.`cart` ( `user_id` INT(5) NOT NULL , `name` VARCHAR(150) NOT NULL , `cost` INT(10) NOT NULL ) ENGINE = InnoDB;
ALTER TABLE `mercado_escolar`.`cart` ADD FOREIGN KEY (user_id) REFERENCES users(user_id);