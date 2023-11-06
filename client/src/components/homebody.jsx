import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const HomeBody = () => {
  return (
    <div className='homebody'>
        <h3>Renaissance was a period of increased cultural enrichment in the European continent around the 1500s till late 1700s. This period generated many a celebrated artists and their masterpieces, but not only that, these works of arts inspired many artists to come to do what they have done. Two such avenues that we showcase today are Paintings and Poems. So Interact away...</h3>
        <div className='cards'>
            <Link className='styleremover' to='/imagegeneration'>
                <div className='card'>
                    <h3>Image Generation</h3>
                    <p>
                        Ever thought of having your own painting made by a famous artist of the past? well think no more and come along as we present to you very own Leonardo Di Vinci or perhaps Van Goug?
                    </p>
                </div>
            </Link>
            
            <Link className='styleremover' to='/poemgeneration'>
                <div className='card'>
                    <h3>Poem Generation</h3>
                    <p>
                        Ever thought of seeing a true master of words at work in front of you? well we present to you the best poets from the past to write you a poem.
                    </p>
                </div>
            </Link>
        </div>
        
    </div>
  )
}

export default HomeBody