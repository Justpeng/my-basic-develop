# 创建数据并创建权限用户
# CREATE DATABASE 'just_test' CHARACTER SET utf8;
CREATE DATABASE just_test CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER 'just_test'@'%' IDENTIFIED BY 'just_test';
GRANT ALL PRIVILEGES ON just_test.* TO 'just_test'@'%';
FLUSH PRIVILEGES;


# 创建表
USE just_test;
CREATE TABLE `sysUser` (
  `userId`  bigint(20) NOT NULL,
  `userName` varchar(50) not null,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


# 创建表数据
USE just_test;
INSERT  into sysUser VALUE (1,'lip1');
INSERT  into sysUser VALUE (2,'lip2');
INSERT  into sysUser VALUE (3,'lip3');
INSERT  into sysUser VALUE (4,'lip4');
INSERT  into sysUser VALUE (5,'lip5');
