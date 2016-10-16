package com.just.utils;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.Map;

/**
 *
 */
public class MathUtil {
    public static Object eval(String expression,Map<String,Object> map){
        if(expression==null||expression==""){
            throw new NullPointerException("expression");
        }
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("js");
        if(map.size()>0){
            for(String key : map.keySet()){
                engine.put(key,map.get(key));
            }
        }
        Object result = null;
        try {
            result = engine.eval(expression);
        } catch (ScriptException e) {
            e.printStackTrace();
        }
        return result;
    }


}
