package com.yc.tzsc.web.handler;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tzsc.entity.Commodity;
import com.yc.tzsc.service.IndexService;

@Controller
@RequestMapping("/tzsc")
public class IndexHandler {
	@Autowired
	private IndexService indedxService;
	
	@RequestMapping("/indexMenu")
	@ResponseBody
	public List<Commodity> indexMenu(@RequestParam("menu")int menu, HttpSession session){
		LogManager.getLogger().debug("请求indexMenu处理加载首页主分类功能...");
		List<Commodity> listNew = indedxService.listMenu(menu);
//		System.out.println(listNew);
		return listNew;
	}
	
	@RequestMapping("/indexMinMenu")
	@ResponseBody
	public List<Commodity> indexMinMenu(@RequestParam("SMmenu")int SMmenu, HttpSession session){
		LogManager.getLogger().debug("请求indexMinMenu处理加载首页小分类功能...");
		List<Commodity> listMinNew = indedxService.listMinMenu(SMmenu);
//		System.out.println(listMinNew);
		return listMinNew;
	}
	
	@RequestMapping("/newShop")
	@ResponseBody
	public List<Commodity> newShop(HttpSession session){
		LogManager.getLogger().debug("请求newShop处理加载首页小分类功能...");
		List<Commodity> newShop = indedxService.newShop();
		System.out.println(newShop);
		return newShop;
	}
}