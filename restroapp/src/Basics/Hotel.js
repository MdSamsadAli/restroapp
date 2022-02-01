import React, { useState } from 'react';
import Menu from './RestoApi';
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const uniqueList =[
  ...new Set(Menu.map((curElem)=>{
    return curElem.Author;
  }),
  ),
  "All",
];

const Hotel = () => {
  const [menuData, setMenuData]= useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (Author)=>{
    if(Author === "All"){
      setMenuData(Menu)
      return;
    }

    const updateList = Menu.filter((curElem)=>{
      return curElem.Author === Author;
    });
    setMenuData(updateList);
  }

  return (
    <>
      <NavBar filterItem = {filterItem} menuList ={menuList}/>
      <MenuCard mData = {menuData}/>
        
    </>
  )
};

export default Hotel;



