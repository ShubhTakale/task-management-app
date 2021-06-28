create table users(id int auto_increment primary key, fullName varchar(40),contact varchar(10), email varchar(20) unique,password varchar(100));

create table tasks (id int auto_increment primary key, title varchar(50), description varchar(200),date date,is_completed boolean ,user_id int not null, foreign key (user_id) references users(id));
