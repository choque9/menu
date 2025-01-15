import React, { useState } from 'react'
import { Category,  MenuType, MobileMenuProps, Subcategory } from './types/types';
import { menuData } from './data/menuData';


const Menu: StorefrontFunctionComponent<MobileMenuProps> = ({ }) => {

  const [selectedDept, setSelectedDept] = useState<number | null>(null);
  const [selectedCat, setSelectedCat] = useState<number | null>(null);

  const handleDeptClick = (index: number) => {
    setSelectedDept(index === selectedDept ? null : index);
    setSelectedCat(null);
  };

  const handleCatClick = (index: number) => {
    setSelectedCat(index === selectedCat ? null : index);
  };

  return <div className="mobile-menu">
    <ul>
      {menuData.map((dept: MenuType, deptIndex: number) => (
        <li key={deptIndex}>
          <div onClick={() => handleDeptClick(deptIndex)}>{dept.name}</div>
          {selectedDept === deptIndex && (
            <ul>
              {dept.categories.map((cat: Category, catIndex: number) => (
                <li key={catIndex}>
                  <div onClick={() => handleCatClick(catIndex)}>{cat.name}</div>
                  {selectedCat === catIndex && (
                    <ul>
                      {cat.subcategories.map((subcat: Subcategory, subcatIndex: number) => (
                        <li key={subcatIndex}>{subcat.name}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
}

Menu.schema = {
  type: 'object',
  title: 'Menu',
  properties: {
    menu: {
      type: 'array',
      title: 'Menus',
      items: {
        type: 'object',
        title: 'Menu',
        properties: {
          name: {
            type: 'string',
            title: 'Menu Name'
          },
          categories: {
            type: 'array',
            title: 'Categories',
            items: {
              type: 'object',
              title: 'Category',
              properties: {
                name: {
                  type: 'string',
                  title: 'Category Name'
                },
                subcategories: {
                  type: 'array',
                  title: 'Subcategories',
                  items: {
                    type: 'string',
                    title: 'Subcategory Name'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};


export default Menu
