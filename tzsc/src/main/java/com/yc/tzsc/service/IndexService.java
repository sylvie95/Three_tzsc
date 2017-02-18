package com.yc.tzsc.service;

import java.util.List;

import com.yc.tzsc.entity.Commodity;

public interface IndexService {

	List<Commodity> listMenu(int menu);

	List<Commodity> listMinMenu(int menu);

	List<Commodity> newShop();

}
