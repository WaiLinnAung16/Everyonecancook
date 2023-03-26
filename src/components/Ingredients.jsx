import React from 'react'
import {TiTickOutline} from 'react-icons/ti'
const Ingredients = ({ingredients}) => {
  return (
    <div className='flex flex-col w-[300px] gap-4'>
        {ingredients.map((ingredient)=>{
            return (
                <div key={ingredient.id}>
                    {
                        ingredient.item && <h1 className='flex gap-1 items-center'><TiTickOutline/> {ingredient.item}</h1>
                    }
                </div>
            )
        })}
    </div>
  )
}

export default Ingredients