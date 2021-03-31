# Host: localhost  (Version: 5.7.26)
# Date: 2020-12-25 11:06:39
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "category"
#

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '分类名称',
  `categoryID` int(11) DEFAULT NULL COMMENT '分类id',
  `createTime` date NOT NULL,
  `updataTime` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "category"
#

/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

#
# Structure for table "friendreqdata"
#

DROP TABLE IF EXISTS `friendreqdata`;
CREATE TABLE `friendreqdata` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '请求用户',
  `friendId` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '被请求ID',
  `friendReqType` int(11) NOT NULL COMMENT '请求方式',
  `remark` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `create_time` bigint(128) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "friendreqdata"
#

/*!40000 ALTER TABLE `friendreqdata` DISABLE KEYS */;
INSERT INTO `friendreqdata` VALUES (2,'WLJ18812312312','WLJ112312311',1,'通过吧',1608802763948),(3,'WLJ18812312312a','WLJ112312311',1,'aaa',0),(4,'WLJ18812312312','WLJ112312311',1,'ssss',1608807148126);
/*!40000 ALTER TABLE `friendreqdata` ENABLE KEYS */;

#
# Structure for table "friends"
#

DROP TABLE IF EXISTS `friends`;
CREATE TABLE `friends` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '用户ID',
  `friendid` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '好友ID',
  `group` int(11) DEFAULT NULL COMMENT '分组',
  `friend_type` int(11) DEFAULT NULL COMMENT '好友类型1好友2陌生人3拉黑',
  `friendName` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '好友名称',
  `friendNike` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '好友呢称',
  `create_time` bigint(128) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='好友';

#
# Data for table "friends"
#

/*!40000 ALTER TABLE `friends` DISABLE KEYS */;
INSERT INTO `friends` VALUES (1,'WLJ18812312312','WLJ112312311',NULL,1,'123',NULL,0),(2,'WLJ112312311','WLJ18812312312',NULL,1,'wlj',NULL,0);
/*!40000 ALTER TABLE `friends` ENABLE KEYS */;

#
# Structure for table "upload_list"
#

DROP TABLE IF EXISTS `upload_list`;
CREATE TABLE `upload_list` (
  `ID` int(11) NOT NULL DEFAULT '1',
  `fileName` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文件名',
  `fileUrl` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文件路径',
  `categoryID` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '分类ID',
  `createTime` date DEFAULT NULL,
  `updataTime` date DEFAULT NULL,
  `updatauserid` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT '上传者ID',
  `f00002` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `f00003` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `f00004` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `f00005` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `f00006` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `f00007` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `f00008` varchar(128) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "upload_list"
#

/*!40000 ALTER TABLE `upload_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `upload_list` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `userId` varchar(64) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户ID',
  `userName` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名称',
  `password` varchar(128) COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `gpass` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `headImg` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '头像',
  `nikeName` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '昵称',
  `mobile` varchar(32) COLLATE utf8_unicode_ci NOT NULL COMMENT '手机号',
  `email` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '邮箱',
  `createTime` bigint(11) DEFAULT NULL COMMENT '创建时间',
  `updataTime` bigint(11) DEFAULT NULL COMMENT '修改时间',
  `isProhibited` int(1) NOT NULL DEFAULT '0' COMMENT '是否禁止',
  `create_ip` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '注册IP',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`),
  KEY `nikename` (`nikeName`),
  KEY `mobile` (`mobile`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='用户';

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (28,'WLJ112312311','123','123','123',NULL,NULL,'112312311',NULL,1607598985556,NULL,0,NULL),(29,'WLJ112312311a','123','123','123',NULL,NULL,'112312311a',NULL,1607599188012,NULL,0,NULL),(30,'WLJ112312311aa','123','123','123',NULL,NULL,'112312311aa',NULL,1607599194180,NULL,0,NULL),(31,'WLJ18812312312','wlj','123123','123123',NULL,NULL,'18812312312',NULL,1608779701479,NULL,0,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
