<<<<<<< HEAD
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
=======
package com.yc.tzsc.web.handler;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tzsc.service.impl.IndexService;

@Controller
@RequestMapping("/tzsc")
public class IndexHandler {
	@Autowired
	private IndexService indedxService;
	
	@RequestMapping("/index")
	@ResponseBody
	public String indexList(HttpSession session){
		LogManager.getLogger().debug("请求UserHandler处理listPartUsers...");
		return indedxService.listNew();
	}
}
>>>>>>> b18764636b98ef4e5506a9523396612e170e282b
