package com.yc.tzsc.web.handler;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.tzsc.entity.Comments;
import com.yc.tzsc.entity.Commodity;
import com.yc.tzsc.service.CommentService;
import com.yc.tzsc.service.ShowService;
   
@Controller
//@RequestMapping("/comment")
public class CommentHandler {
	@Autowired
	private CommentService commentService;
	 
	
	@RequestMapping("/listComments")
	@ResponseBody
	public List<Comments> getCommentsByCommodityId(@RequestParam("comcid")int comcid,HttpSession session){
		LogManager.getLogger().debug("请求listComments处理 ,加载评论");
//		session.setAttribute("cid", cid);
//		session.getAttribute("cid");
		Comments comments = new Comments();
		comments.setComcid(comcid);
		List<Comments> commentsList = commentService.getCommentsByCommodityId(comments);
//		session.setAttribute("comments", comments);
//		System.out.println(comments);
   		return commentsList;
 	}
	
	 
}