import React from 'react'
import './styles.css'
import linkedin from '../favicon/linkedin.svg'
import github from '../favicon/github.svg'
import gmail from '../favicon/gmail.svg'

export const Footer= () => {
  return (
    <footer>
        <a href='https://github.com/ThePrincipleMan'><img src={github}/></a>
        <a href='https://www.linkedin.com/in/siddhant-gulve/' ><img src={linkedin} /></a>
        <a href="mailto:siddhant1819@gmail.com"><img src={gmail} /></a>
    </footer>
  )
}

export default Footer