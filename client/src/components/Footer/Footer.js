import React from 'react'
import {FaGithub} from 'react-icons/fa'
function Footer() {
  return (
    <div class="card footer">
  <div class="card-header">
    
  </div>
  <div class="card-body">
   <h6>Special Thanks to our collaborators:</h6>
    <p class="card-text info"><a href='https://github.com/kimberlyamaya'>Kimberly Amaya. <FaGithub/></a></p>
    <p class="card-text info"><a href='https://github.com/santiagov916'>Santiago Vanegas. </a><FaGithub/></p>
    <p class="card-text info"><a href='https://github.com/Seth20smith'>Seth Smith. </a><FaGithub/></p>
    <p class="card-text info"><a href='https://github.com/SantiBass'>Santiago Ibarra Ryan. </a><FaGithub/></p>
    <p class="card-text info"><a href='https://github.com/Lssdavies'>Larry Davies. </a><FaGithub/></p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
 
</div>
  )
}

export default Footer