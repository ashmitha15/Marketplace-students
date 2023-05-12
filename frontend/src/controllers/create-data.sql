INSERT INTO `users` (`user_id`, `name`, `email`, `dob`, `password`, `address`, `gender`, `major`, `university`, `type`, `photo`) VALUES ('1', 'Ashmitha', 'ashmitha@gmail.com', '2000-11-11', 'password', 'This is my sample address. pincode: 12345', 'female', 'Computer Science', 'Duke University', 'student', 'profile.jpeg');
INSERT INTO `users` (`user_id`, `name`, `email`, `dob`, `password`, `address`, `gender`, `major`, `university`, `type`, `photo`) VALUES ('2', 'Kamal', 'kamal@gmail.com', '2000-01-19', 'password', 'This is my sample address. pincode: 12345', 'male', 'Computer Science', 'Duke University', 'student', 'profile2.webp');
INSERT INTO `users` (`user_id`, `name`, `email`, `dob`, `password`, `address`, `gender`, `major`, `university`, `type`, `photo`) VALUES ('3', 'yasasvi', 'yasasvi@gmail.com', '2000-01-19', 'password', 'This is my sample address. pincode: 12345', 'female', 'Computer Science', 'Yale University', 'student', 'profile.jpeg');
INSERT INTO `users` (`user_id`, `name`, `email`, `dob`, `password`, `address`, `gender`, `major`, `university`, `type`, `photo`) VALUES ('4', 'Prop factory', 'propfactory@gmail.com', '1992-11-22', 'password', 'This is a sample address', 'other', '', 'Duke University', 'business', 'business-owner.jpg');
INSERT INTO `products` (`user_id`, `name`, `description`, `price`, `category`, `photo`, `quantity`) VALUES ('4', 'Hair Clips', 'Set of 24 hair accessories at high quality', '350', 'accessories', 'accessories.webp', '10');
INSERT INTO `products` (`user_id`, `name`, `description`, `price`, `category`, `photo`, `quantity`) VALUES ('4', 'Hand bags', 'Stylish sling bag', '450', 'bags', 'bags.webp', '20');
INSERT INTO `products` (`user_id`, `name`, `description`, `price`, `category`, `photo`, `quantity`) VALUES ('1', 'Mickey Key chain', 'pair of 2 keychains', '150', 'keychains', 'keychains.webp', '5');
INSERT INTO `products` (`user_id`, `name`, `description`, `price`, `category`, `photo`, `quantity`) VALUES ('1', 'Table lamp', 'Cute table lamp', '600', 'lamps', 'lamps.webp', '8');
INSERT INTO `products` (`user_id`, `name`, `description`, `price`, `category`, `photo`, `quantity`) VALUES ('2', 'Foldable Mirror', 'Small foldable mirror', '99', 'lifestyle', 'lifestyle.webp', '8');
INSERT INTO `products` (`user_id`, `name`, `description`, `price`, `category`, `photo`, `quantity`) VALUES ('2', 'Fur Notes', 'Cute fur planner', '299', 'books', 'notes.webp', '18');
INSERT INTO `products` (`user_id`, `name`, `description`, `price`, `category`, `photo`, `quantity`) VALUES ('3', 'Sippers', 'Cute Sippers', '259', 'bottles', 'sippers.webp', '12');
INSERT INTO `products` (`user_id`, `name`, `description`, `price`, `category`, `photo`, `quantity`) VALUES ('3', 'Color pens', 'Multi colored pens', '90', 'stationary', 'stationary.webp', '12');
INSERT INTO `users` (`user_id`, `name`, `email`, `dob`, `password`, `address`, `gender`, `major`, `university`, `type`, `photo`) VALUES ('5', 'Duke university Admin', 'duke@gmail.com', '', 'duke', '', '', '', 'Duke University', 'school', 'school.jpg');
INSERT INTO `users` (`user_id`, `name`, `email`, `dob`, `password`, `address`, `gender`, `major`, `university`, `type`, `photo`) VALUES ('6', 'super admin', 'superadmin@gmail.com', '2022-11-09', 'password', '', '', '', 'Priston University', 'admin', 'school.jpg');
INSERT INTO `clubs` (`user_id`, `name`, `description`, `photo`) VALUES ('5', 'Art Club', 'Here you can learn so many arts and crafts', 'ArtClub.gif');
INSERT INTO `clubs` (`user_id`, `name`, `description`, `photo`) VALUES ('5', 'Book Club', 'Here you can learn so many books', 'bookclub.jpg');
INSERT INTO `clubs` (`user_id`, `name`, `description`, `photo`) VALUES ('3', 'Dance Club', 'Here you can learn so many dance styles', 'dance-vlub.jpg');
INSERT INTO `clubs` (`user_id`, `name`, `description`, `photo`) VALUES ('3', 'Drama Club', 'Here you can learn so many drama styles', 'drama-club.jpg');
INSERT INTO `clubs` (`user_id`, `name`, `description`, `photo`) VALUES ('1', 'Music Club', 'Here you can learn so many musical instruments', 'musicclub.jfif');
INSERT INTO `clubs` (`user_id`, `name`, `description`, `photo`) VALUES ('2', 'Photography Club', 'Here you can learn so many photography techniques', 'photography-club.jpg');
INSERT INTO `posts` (`user_id`, `description`, `photo`) VALUES ('5', 'This is our college photo', 'school.jpg');
INSERT INTO `posts` (`user_id`, `description`, `photo`) VALUES ('3', 'Trade post', 'trade.jpg');
INSERT INTO `posts` (`user_id`, `description`, `photo`) VALUES ('2', 'post me', 'posts.png');
INSERT INTO `posts` (`user_id`, `description`, `photo`) VALUES ('1', 'new post', 'posts.png');
INSERT INTO `posts` (`user_id`, `description`, `photo`) VALUES ('1', 'Ashmitha post', 'school.jpg');
INSERT INTO `posts` (`user_id`, `description`, `photo`) VALUES ('2', 'Kamal', 'profile2.webp');
INSERT INTO `joined_clubs` (`user_id`, `count`, `name`) VALUES ('1', '30', 'Art Club');
INSERT INTO `joined_clubs` (`user_id`, `count`, `name`) VALUES ('1', '36', 'Music Club');
INSERT INTO `joined_clubs` (`user_id`, `count`, `name`) VALUES ('1', '11', 'Book Club');