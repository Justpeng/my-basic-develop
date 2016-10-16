package com.framework;

import com.framework.expression.MyException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

/**
 * 异常处理类
 * 其他Controller类继承该类
 * @author:Just
 * @create:2016-10-11 22:41
 */
public class BaseController {
    @ExceptionHandler(MyException.class)
    public String exp(HttpServletRequest request , Exception ex){
        request.setAttribute("ex",ex.getMessage());
        return "error/error";
    }
}

