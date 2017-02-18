package com.yc.tzsc.mapper;

import java.util.List;

import com.yc.tzsc.entity.Commodity;

public interface IndexMapper {
	
	List<Commodity> listMenu(int menu);

	List<Commodity> listMinMenu(int menu);

	List<Commodity> newShop();

}
