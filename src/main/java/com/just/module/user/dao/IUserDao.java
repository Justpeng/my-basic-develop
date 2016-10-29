package com.just.module.user.dao;

import com.just.module.user.pojo.SysUser;
import org.springframework.stereotype.Repository;

/**
 * Created by Administrator on 2016/10/29.
 */
@Repository
public interface IUserDao {
    SysUser selectById(int id);
}
