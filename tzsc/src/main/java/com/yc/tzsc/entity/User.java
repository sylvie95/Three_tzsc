package com.yc.tzsc.entity;
/**
 * @author LSY
 * 普通用户
 */
public class User {
	private int userid;			//用户编号
	private String username;	//用户名
	private String upassword;	//用户密码
	private String ulogo;		//用户头像( 路径 )
	private String usex;		//性别
	private String uphone;		//用户联系电话
	private String uqq;			//用户qq
	private String uemail;		//用户邮箱
	private String uaddress;	//用户地址
	
	public User() {
	}
	
	//有参构造( 注: 未明确, 可根据实际需求进行修改 )
	public User(String username, String upassword, String uphone) {
		super();
		this.username = username;
		this.upassword = upassword;
		this.uphone = uphone;
	}

	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUpassword() {
		return upassword;
	}
	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}
	public String getUlogo() {
		return ulogo;
	}
	public void setUlogo(String ulogo) {
		this.ulogo = ulogo;
	}
	public String getUsex() {
		return usex;
	}
	public void setUsex(String usex) {
		this.usex = usex;
	}
	public String getUphone() {
		return uphone;
	}
	public void setUphone(String uphone) {
		this.uphone = uphone;
	}
	public String getUqq() {
		return uqq;
	}
	public void setUqq(String uqq) {
		this.uqq = uqq;
	}
	public String getUemail() {
		return uemail;
	}
	public void setUemail(String uemail) {
		this.uemail = uemail;
	}
	public String getUaddress() {
		return uaddress;
	}
	public void setUaddress(String uaddress) {
		this.uaddress = uaddress;
	}
	@Override
	public String toString() {
		return "User [userid=" + userid + ", username=" + username + ", upassword=" + upassword + ", ulogo=" + ulogo
				+ ", usex=" + usex + ", uphone=" + uphone + ", uqq=" + uqq + ", uemail=" + uemail + ", uaddress="
				+ uaddress + "]";
	}
}
