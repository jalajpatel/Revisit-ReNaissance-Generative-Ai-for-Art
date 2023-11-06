import React from 'react'
import './styles.css'
import data from './data-poem-hover'
import Poembox from './poembox'
import { Link } from 'react-router-dom'

const Poembody = () => {
    const cards = data.map(item=>{
        return(
            <Link className='styleremover' to={`/poemgeneration/${item.pageurl}`}>
            <Poembox
            img = {item.img}
            hovercontent = {item.hovercontent}
            />
            </Link>
        )
    })

  return (
    <div className='imagebody'>
        <p>So are you ready for a wordsmith to compose a poem from scratch in their very own style just for you?
        </p>
        <div className='boxcontainer'>
            {cards}
        </div>
    </div>
  )
}

export default Poembody