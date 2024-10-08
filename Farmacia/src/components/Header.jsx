import './Header.css'
import {useState}from 'react'

function Header() {

  return (
    <div className='kk-container'>
    
      <nav className='nai'>

          <div className='oi'>
                <img src="farmarcia-logo-pq.png" alt="Logo" /> 
          </div>
         <p>💉 FARMÁRCIA 🩸</p> 

                  <button class="btn">

                      <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                      </svg>
                      <span class="text">Entrar</span>
                  </button>

      </nav>


       <div className='body_container'>
         <h1>SEJA BEM VINDO A NOSSA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INAUGURAÇÃO !!</h1>

        <img className='jami' src="farmarcia-sem fundo.png" alt="logo sem fundo" />
       </div>


        
    </div>
  )
}

export default Header
