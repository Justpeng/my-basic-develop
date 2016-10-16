package com.just.module.passport.controller;

import com.just.module.passport.controller.verify.VerifyCode;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.imageio.ImageIO;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;

/**
 * Created by @Just on 2016/9/30.
 */
@Controller
@RequestMapping("/check")
public class VerifyController {
    @RequestMapping("/verify")
    public void checkVerify(HttpServletRequest request, HttpServletResponse response){
       // Cookie cookie = request.getCookies();
        String verifyCode =request.getParameter("verifyCode");
    }


    @RequestMapping("getVerifyCode")
    public void getVerifyCode(HttpServletRequest request, HttpServletResponse response){
        VerifyCode codeInstance = new VerifyCode();
        String code = codeInstance.getCode();
        BufferedImage bufferedImage = codeInstance.getBufferedImage();
        //将验证码保存至Cookie
        Cookie cookie = new Cookie("verifyCode",code);
        cookie.setMaxAge(1800);
        response.addCookie(cookie);
        //等同于response.setHeader("Content-Type", "image/jpeg");
        response.setContentType("image/jpeg");
        //设置响应头控制浏览器不要缓存
        response.setDateHeader("Expires", 0);
        response.setHeader("Cache-Control", "no-cache");
        // 禁止图像缓存。
        response.setHeader("Pragma", "no-cache");
        try {
            ImageIO.write(bufferedImage, "png", response.getOutputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
