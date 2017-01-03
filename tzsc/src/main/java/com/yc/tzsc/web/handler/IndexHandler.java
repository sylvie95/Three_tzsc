package com.yc.tzsc.web.handler;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tzsc.entity.Commodity;
import com.yc.tzsc.service.IndexService;

@Controller
@RequestMapping("/tzsc")
public class IndexHandler {
	@Autowired
	private IndexService indedxService;
	
	@RequestMapping("/indexNew")
	@ResponseBody
	public List<Commodity> indexList(HttpSession session){
		LogManager.getLogger().debug("请求IndexHandler处理加载最新闲置");
		List<Commodity> listNew = indedxService.listNew();
		System.out.println(listNew);
		return listNew;
	}
}
