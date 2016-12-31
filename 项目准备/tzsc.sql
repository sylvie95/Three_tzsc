--用户信息表(买家卖家注册时所需填写的信息, 用于用户核实)
create table t_users(
	userid Integer primary key,							--用户编号
	username varchar2(20) not null unique,				--用户名		(不能为空)
	upassword varchar2(40) not null,					--用户密码		(不能为空)
	ulogo varchar2(100) ;								--用户头像
	usex varchar(2) ,									--性别
	uphone varchar2(20) not null,						--用户联系电话	(不能为空--为短信注册)
	uqq varchar2(20),									--用户QQ
	uemail varchar2(20) ,								--用户邮箱
	uaddress varchar2(200)								--用户地址
);

--管理员信息表(管理员操作)
create table t_admin(
	adminid Integer primary key,						--管理员编号
	adminname varchar(20) not null unique,				--管理员用户名		(不能为空)
	apassword varchar2(40) not null,					--管理员密码		(不能为空)
	aphone varchar2(20) not null,						--管理员联系电话	(不能为空)
	aemail varchar2(20) not null,						--管理员邮箱		(不能为空)
	alevel Integer default 2							--管理员权限等级 (1.超级管理员   2.普通管理员)
);

--商品总类型表(记录商品的种类, 如:电子产品)
create table t_type(
	tid Integer primary key,							--总类型编号
	tname varchar2(10) not null unique					--类型名称	(如: 电子产品, 学习用品..===>> 发布商品时选择的类型.)
);

--商品小类型表(细化总类型, 电子产品里的:手机, 电脑....)
create table t_mintype(
	tid references t_type(tid),							--类型编号( 外键引用商品总类型 )
	mname varchar2(10) not null unique					--类型名称(如: 手机, 电脑, 耳机 .==>> 模糊查询)
);


--商品发布表(发布商品时所需告知, 显示的信息表)
create table t_commodity(
	cid Integer primary key,							--商品编号
	cname varchar2(30) not null,						--商品名称/标题		(不能为空)
	cmname varchar2(10) not null,						--商品类型			(不能为空)
	cdescribe varchar2(400) default '卖家有点懒, ',		--商品描述	
	cpic varchar2(100) not null,						--商品图片信息
	cprice float not null,								--商品出售价格		(不能为空)
	cusername varchar2(20) not null,					--商品卖家( 发布商品的用户 )
	cphone varchar2(20)	not null,						--商家联系电话		(不能为空)
	cpostage Integer default 2,							--是否包邮 ( 默认不包邮 )
	cqq	varchar2(20),									--商家qq
	cdate date ,										--商品发布时间
	cstate_com Integer default 1,						--商品状态(1.未交易  2.已交易)
	cstate2	Integer delfault 2,							--订单审核状态(1.待审核 2.通过 未通过)
	cmessage varchar2(100) ,							--审核信息(比如未通过: 理由)
	cadminname varchar2(20) not null					--订单审核的管理员
);

--商品浏览量(每被点击查看一次, 点击量加一)
create table t_num(										
	cid references t_commodity(cid),					--外键引用商品详情表id		
	nnum int default 0									--商品点击量( 绑定ip地址, 不可重复累加 )
);


--商品求购表(用户发布自己的求购信息)
create table t_needcom(
	nid Integer primary key,							--求购表编号
	nname varchar2(30) not null,						--求购商品名称/标题
	ndescribe varchar2(400) default '买家有点懒'		--求购商品描述
	npic varchar2(100),									--求购商品图片信息
	nusername varchar2(20) not null,					--发布求购用户
	naddress varchar2(40),								--用户当前所在地
	ndate date ,										--发布求购信息时间
	norder	Integer delfault 2,							--订单审核状态(1.待审核 2.通过 未通过)
	nmessage varchar2(100) ,							--审核信息(比如未通过: 理由)
	nadminname varchar2(20) not null					--订单审核的管理员
);

--商品评价表
create table comments(
	comid Integer primary key,							
	comcid Integer not null,							--指定哪一个商品id
	comcontent varchar2(100),							--发表内容
	comusername varchar2(20) not null,					--发表用户
	comdate date,
);

--订单表
create table dingdan(
	did Integer primary key,							--订单编号
	dno varchar2(20) not null unique,					--订单流水编号
	dcname varchar2(30) not null,						--商品名称/标题(外键引用发布商品信息表标题)
	daddress varchar2(200)	not null,					--收货地址
	dusername varchar2(20) not null,					--支付用户		
	ddate date,											--订单时间
	dmoney float check(dmoney > 0),						--订单交易额
	dstate Integer default 1							--订单状态(1.未交易成功  2.交易成功) 
);