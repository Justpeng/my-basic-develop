package com.just.module.user.service.impl;

import com.just.module.user.dao.IUserDao;
import com.just.module.user.pojo.SysUser;
import com.just.module.user.service.IUserService;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 用户接口实现类
 *
 * @author:Just
 * @create:2016-10-29 20:20
 */
@Service
public class UserServiceImpl implements IUserService {

    @Resource
    IUserDao userDao;

    @Resource
    JdbcTemplate jdbcTemplate;

    @Override
    public SysUser selectById(int id) {
       return  userDao.selectById(id);
    }



    //jdbcTemplate    ------------------------------------

    @Override
    public SysUser selectByIdWithJDBC(final int userId) {
        String sql = "select * from sysuser where userId=?";
        final SysUser sysUser = new SysUser();
        jdbcTemplate.query(sql, new Object[]{userId}, new RowCallbackHandler() {
            @Override
            public void processRow(ResultSet resultSet) throws SQLException {
                sysUser.setUserName(resultSet.getString("name"));
            }
        });
        sysUser.setUserId(userId);
        return sysUser;
    }

    @Transactional
    @Override
    public void saveWithJDBC(final String userName) {
        final String sql = "insert into sysuser(userName) values(?,?)";
        KeyHolder key = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {

            public PreparedStatement createPreparedStatement(Connection con)
                    throws SQLException {
                PreparedStatement statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                statement.setString(1, userName );
                return statement;
            }
        }, key);
        System.out.println(key.getKey().intValue());
    }

    @Override
    public List<SysUser> selectAllWithJDBC() {
        String sql = "SELECT * from sysuser";
        final List<SysUser> userList = new ArrayList<SysUser>();
        jdbcTemplate.query(sql, new RowCallbackHandler() {
            public void processRow(ResultSet rs) throws SQLException {
                SysUser user = new SysUser();
                user.setUserName(rs.getString("uName"));
                userList.add(user);
            }
        });
        return userList;
    }

    @Transactional
    @Override
    public void deleteByIdWithJDBC(int userId) {
        String sql = "DELETE from sysuser where userId=?";
        jdbcTemplate.update(sql, userId);
    }
}
