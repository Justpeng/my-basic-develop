package com.framework.interceptor;

import com.framework.constant.LoginConstant;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 用户是否登录验证类
 *
 * @author:Just
 * @create:2016-10-11 22:58
 */
public class LoginInterceptor implements HandlerInterceptor{
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
       /* Object user = request.getSession().getAttribute(LoginConstant.USER_SESSION_KEY);
        if(user == null){
            System.out.println("用户未登录");
            response.sendRedirect(request.getContextPath()+"/passport/to_login");
            //response.sendError(404);
            return false;
        }*/
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
