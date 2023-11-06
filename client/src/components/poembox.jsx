import React from 'react'
import './styles.css'

const Poembox = (props) => {
  return (
    <div className='imagebox'>
        <div>
          <img src={props.img} className='hover-image'/>
        </div>
        <div className='hover-imagebox'>
            {props.hovercontent}
        </div>
    </div>
  )
}

export default Poembox