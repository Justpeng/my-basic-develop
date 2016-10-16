package com.just.util;

import com.just.utils.MathUtil;


import java.util.HashMap;
import java.util.Map;

/**
 * Math工具类测试
 *
 * @author:Just
 * @create:2016-09-21 22:01
 */
public class MathUtilTest {
    //@Test
    public void testEval(){
        String expression = "0>a";
        String expression1="0<=a<10";
        String expression2="a>=10";
        Map<String,Object> map = new HashMap<>();
        map.put("a",1);
        Object object = MathUtil.eval(expression2,map);
        if(object!=null){
            System.out.println("类型:"+object.getClass().getName()+" 值："+object.toString());
        }

























    }

}
