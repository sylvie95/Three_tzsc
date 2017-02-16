package com.yc.tzsc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.tzsc.entity.Commodity;
import com.yc.tzsc.mapper.IndexMapper;
import com.yc.tzsc.service.IndexService;

@Service("indedxService")
public class IndexServiceImpl implements IndexService {
	@Autowired
	private IndexMapper indexMapper;
	
	@Override
	public List<Commodity> listNew() {
		
		return indexMapper.listNew();
	}

}