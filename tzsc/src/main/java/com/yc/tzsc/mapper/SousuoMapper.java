package com.yc.tzsc.mapper;

import java.util.List;

import com.yc.tzsc.entity.Commodity;
import com.yc.tzsc.entity.MinType;

public interface SousuoMapper {

	List<Commodity> souMenu(String menuName);

	List<Commodity> menuNo(int menuNo);

	List<Commodity> sousuoStr(Commodity strName);

	MinType selectMinTypeName(int strNo);

}
