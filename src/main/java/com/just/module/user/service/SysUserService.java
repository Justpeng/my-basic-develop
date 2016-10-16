package com.just.module.user.service;


import com.just.module.user.pojo.SysUser;

public interface SysUserService {
	SysUser getById(Long id);


	SysUser getByLoginName(String loginName);
}
