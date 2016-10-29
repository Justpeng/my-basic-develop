package com.just.module.user.pojo;

/**
 * 用户类
 *
 * @author:Just
 * @create:2016-10-29 20:18
 */
public class SysUser {
    private  int userId;
    private String userName;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "userId:"+userId+",userName:"+userName;
    }
}
