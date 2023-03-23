import React from 'react'

const Card = ({meal}) => {
  return (
    <div className=' p-10 rounded'>
        <div>
            <img src={meal.strMealThumb} className='h-[300px]' />
        </div>
        <div>
            <p>{meal.strMeal}</p>
            
        </div>
    </div>
  )
}

export default Card