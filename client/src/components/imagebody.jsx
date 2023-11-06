import React from 'react'
import './styles.css'
import data from './data-image-hover'
import Imagebox from './imagebox'
import { Link } from 'react-router-dom'

const Imagebody = () => {
    const cards = data.map(item=>{
        return(
            <Link className='styleremover' to={`/imagegeneration/${item.pageurl}`}>
            <div className='imagewrapper'>
                <Imagebox
                img = {item.img}
                hovercontent = {item.hovercontent}
            />
            </div>
            </Link>
        )
    })

  return (
    <div>
        <div className='imagebody'>
            <p>So are you ready to have a master piece painted by a famous artist of yester years? If so, then dont wait along
                and start exploring..
            </p>
            <div className='boxcontainer'>
                {cards}
            </div>
        </div>
        <Link className='styleremover' to='/imagegeneration/majnubhai' >
            <div className='easteregg'>
            </div>
        </Link>
    </div>
  )
}

export default Imagebody