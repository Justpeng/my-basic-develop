package com.just.module.passport.controller;

import com.framework.BaseController;
import com.framework.constant.LoginConstant;
import com.just.module.user.pojo.SysUser;
import com.just.module.user.service.SysUserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by sysware.com on 2016/9/28.
 */
@Controller
@RequestMapping("/passport")
public class PassportController extends BaseController{

    @Resource
    private SysUserService sysUserService;

    @RequestMapping("/reg_phone")
    public ModelAndView regPhone(){
        return  new ModelAndView("/passport/register","success","");
    }

    @RequestMapping("/submit_reg_phone")
    public ModelAndView regPhone(HttpServletRequest request){
        return  new ModelAndView("index","success","");

    }

    @RequestMapping("/to_login")
    public ModelAndView toLogin(HttpServletRequest request){
        return new ModelAndView("passport/login","","");
    }

    @RequestMapping("/login")
    public ModelAndView doLogin(HttpServletRequest request){

        SysUser sysUser = new SysUser();
        sysUser.setSysUserId(1L);
        sysUser.setSysUserLoginName("lip");
        request.getSession().setAttribute(LoginConstant.USER_SESSION_KEY,sysUser);
        return new ModelAndView("user/userInfo","userName",sysUser.getSysUserLoginName());
    }

    @RequestMapping("/loginOut")
    public ModelAndView loginOut(HttpServletRequest request){
        request.getSession().removeAttribute(LoginConstant.USER_SESSION_KEY);
        return new ModelAndView("index","","");
    }



    @RequestMapping("/forget")
    public String forget(){
        return "";
    }
}
