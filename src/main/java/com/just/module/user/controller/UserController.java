package com.just.module.user.controller;

import com.just.module.user.pojo.SysUser;
import com.just.module.user.service.IUserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;


/**
 * yong
 *
 * @author:Just
 * @create:2016-10-29 20:22
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Resource
    IUserService iUserService;

    @RequestMapping("/select/{id}")
    public void selectUserById(@PathVariable Integer id){
        SysUser sysUser = iUserService.selectById(id);
        if (sysUser != null) {
            System.out.println(sysUser.toString());
        }else{
            System.out.println("not fount by id:"+id);
        }

    }
}
