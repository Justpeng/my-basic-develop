package com.just.module.user.service;

import com.just.module.user.pojo.SysUser;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Administrator on 2016/10/29.
 */

public interface IUserService {
    //   ------------------------ by jdbcTemplate
    @Transactional
    void saveWithJDBC(String userName);
    List<SysUser> selectAllWithJDBC();
    @Transactional
    void deleteByIdWithJDBC(int uId);


    SysUser selectById(int id);

    SysUser selectByIdWithJDBC(int userId);


}
