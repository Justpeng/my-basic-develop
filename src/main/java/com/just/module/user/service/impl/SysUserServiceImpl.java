package com.just.module.user.service.impl;

import com.just.module.user.mapper.SysUserMapper;
import com.just.module.user.pojo.SysUser;
import com.just.module.user.service.SysUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class SysUserServiceImpl implements SysUserService {
	
	@Resource
	private SysUserMapper sysUserMapper;


	@Override
	public SysUser getById(Long id) {
		return sysUserMapper.selectByPrimaryKey(id);
	}

	@Override
	public SysUser getByLoginName(String loginName) {
		return sysUserMapper.selectByLoginName(loginName);
	}
}
