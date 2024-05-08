import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMemu = ({category,setCategory}) => {
  return (
    <div className='menu-section' id='menu'>
        <h1>Explore Our Menu</h1>
        <p className='menu-text'>Choose from a diverse menu featuring a delectable array of dishes.Our mission is to satisfying your cravings and elevate your dining experience, one delicious meal at a time.</p>

        <div className="menu-list">
          {menu_list.map((item, index) => {
            return (
              <div onClick={()=> setCategory(prev=> prev===item.menu_name?'All': item.menu_name)} key={index} className='menu-list-item'>
                <img className={category===item.menu_name? 'active': ''} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMemu