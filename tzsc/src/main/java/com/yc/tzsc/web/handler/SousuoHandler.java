package com.yc.tzsc.web.handler;


import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tzsc.entity.Commodity;
import com.yc.tzsc.entity.MinType;
import com.yc.tzsc.service.SousuoService;

@Controller
@RequestMapping("/sousuo")
public class SousuoHandler {

	@Autowired
	private SousuoService sousuoService;
	
	@RequestMapping("/souMenu")
	public String souMenu(@RequestParam("smname")String menuName, HttpSession session){
		LogManager.getLogger().debug("请求souMenu处理加载首页主分类功能...");
		return "forward:/page/detail.jsp";
	}
	
	//大类型搜索
	@RequestMapping("/select")
	@ResponseBody
	public List<Commodity> menuNo(@RequestParam("where")String menuNo, HttpSession session){
		LogManager.getLogger().debug("请求menuNo处理加载首页主分类功能...");
		List<Commodity> souMenu = sousuoService.menuNo(Integer.parseInt(menuNo));
		return souMenu;
	}
	
	//关键字模糊搜索
	@RequestMapping("/sousuoStr")
	@ResponseBody
	public List<Commodity> sousuoStr(@RequestParam("strNo")int strNo,@RequestParam("strName")String strName, HttpSession session) throws UnsupportedEncodingException{
		LogManager.getLogger().debug("请求sousuoStr处理加载首页主分类功能...");
		MinType listMinType = sousuoService.selectMinTypeName(strNo);
		Commodity commodity = new Commodity();
		//将关键词存入
		commodity.setCmessage(URLDecoder.decode(strName , "utf-8"));
//		commodity.setCmessage(URLEncoder.encode(strName,"utf-8"));
//		commodity.setCmessage(strName);
		commodity.setCadminname(listMinType.getMname());
		List<Commodity> sousuoStr = sousuoService.sousuoStr(commodity);
//		System.out.println(sousuoStr + "========" + commodity.getCadminname());
		return sousuoStr;
		
	}
	
	
}
