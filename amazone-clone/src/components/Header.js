import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons"

import "./header.css"

function Header() {
  return (
    <div className='header'>
      <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />


      <div className='header_search'>
        <input className='header_searchInput' type="text" />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionsLineOne'>Hello</span>
          <span className='header_optionsLineTwo'>Sign In</span>
        </div>

        <div className='header_option'>
          <span className='header_optionsLineOne'>Return</span>
          <span className='header_optionsLineTwo'>& Orders</span>
        </div>

        <div className='header_option'>
          <span className='header_optionsLineOne'>Your</span>
          <span className='header_optionsLineTwo'>Prime</span>
        </div>

        <div className='header_optionBasket'>
          <ShoppingBasket />
          <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>
      </div>

    </div>

  )
}

export default Header
