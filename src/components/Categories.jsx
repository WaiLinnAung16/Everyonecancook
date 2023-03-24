import React, { useEffect, useState } from 'react'
import { StateContextCustom } from '../Context/StateContext';
import Nav from './Nav';

const Categories = () => {
    const {categories,setCategory} = StateContextCustom();
    const handelOption = (e) =>{
        setCategory(e.target.value)
    }
  return (
    <>
        <Nav>
          <select name="category" id="category" onChange={(e)=>handelOption(e)}>
            {categories?.map((cat)=><option key={cat.idCategory} value={cat.strCategory} >{cat?.strCategory}</option>)}
          </select>
        </Nav>
    </>
  )
}

export default Categories