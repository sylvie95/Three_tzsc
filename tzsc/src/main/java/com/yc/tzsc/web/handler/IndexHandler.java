package com.yc.tzsc.web.handler;

import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
