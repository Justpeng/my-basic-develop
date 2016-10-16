package com.just.module.user.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/userInfoController")
public class UserInfoController {
	
	private static final Logger LOG = LoggerFactory.getLogger(UserInfoController.class);

	@RequestMapping("/showUserInfo")
	public ModelAndView showUserInfo(HttpServletRequest request,HttpServletResponse response) {
		return new ModelAndView("user/userInfo", "userName", "李鹏");
	}


}
