import { Link } from 'react-router-dom'
import './home.css'
import { useState } from 'react'
import { Line } from '../../components/Line/Index'

export const Home = ({ pageSelect }) => {
  const [left, setLeft] = useState(`50%`)
  const [translateX, setTranslateX] = useState(`-50%`)

  function handleMoveSelector(e) {

    if(e.target.className == 'op') { 
      setLeft(`${e.target.offsetLeft - e.target.offsetWidth / 2}px`)
      setTranslateX('-31%')
    }else if(e.target.className == 'op1'){
      setLeft(`${e.target.offsetLeft - e.target.offsetWidth / 2}px`)
      setTranslateX('-37%')
    } else {
      setLeft(`50%`)
      setTranslateX('-50%')
    }
  }

  return (
    <div className="home" onMouseMove={(e) => handleMoveSelector(e)}>
      <img className='selector' style={{left: left, transform:`translate(${translateX})`}} src="../../img/fondo-menu.png" alt="" />
      <section style={{backgroundImage:'url(../../img/bg-panel1-1.jpg)'}}>
        <div className="home-title">
          <h1>Pressencia en más de 20 países en 4 continentes</h1>
          <div className="home-logo-plus">
            <Line bg="#ef7834" width="32px" />
            <img src="../../svg/plus.svg" alt="" />
          </div>
        </div>
        <div className="home-modal lalala">
          <h1>Noticias AJE</h1>
          <ul>
            <li>El rol del Grupo AJE en la conservación de la biodiversidad <img src="../../img/arrow-white-right.png" alt="" /></li>
            <li>Estamos vendiendo los jugos Bio Amayu en USA e ingresaremos a los retails <img src="../../img/arrow-white-right.png" alt="" /></li>
            <li>10 buenas noticias que nos levantaron el ánimo en 2020 <img src="../../img/arrow-white-right.png" alt="" /></li>
          </ul>
          <button>Ver todo</button>
          <img className='close' src="../../svg/close-white.svg" alt="" />
        </div>
      </section>
      <section style={{backgroundImage:'url(../../img/bg_panel2-.jpg)'}}>
        <div className="home-title">
          <h1>Sostenibilidad</h1>
          <div className="home-logo-plus">
            <Line bg="#00b348" width="32px" />
            <img src="../../svg/plus.svg" alt="" />
          </div>
        </div>
        <div className="home-modal">
          <h1>Noticias AJE</h1>
          <ul>
            <li>Revolución Natural <img src="../../img/arrow-white-right.png" alt="" /></li>
            <li>Ciudades Sostenibles <img src="../../img/arrow-white-right.png" alt="" /></li>
            <li>Objetivos de Desarrollo Sostenible <img src="../../img/arrow-white-right.png" alt="" /></li>
          </ul>
          <button>Ver todo</button>
          <img className='close' src="../../svg/close-white.svg" alt="" />
        </div>
      </section>
      <section style={{backgroundImage:'url(../../img/bg_panel3.jpg)'}}>
        <div className="home-title">
          <h1>Nuestras marcas</h1>
          <div className="home-logo-plus">
          <Line bg="#ffb81c" width="32px" />
            <img src="../../svg/plus.svg" alt="" />
          </div>
        </div>
        <div className="home-modal">
          <h1>Noticias AJE</h1>
          <div className="line-modal"></div>
          <ul>
            <li>Bio Amayu <img src="../../img/arrow-white-right.png" alt="" /></li>
            <li>Agua Cielo <img src="../../img/arrow-white-right.png" alt="" /></li>
            <li>Pulp <img src="../../img/arrow-white-right.png" alt="" /></li>
          </ul>
          <button>Ver todo</button>
          <img className='close' src="../../svg/close-white.svg" alt="" />
        </div>
      </section>
      <div className='home-footer'>
        <div className='contenedor-footer'>
          <div className='left'>
            <p className='op'><Link className='op' to="/aje-en-el-mundo">AJE en el mundo</Link></p>
            <p className='op'><Link className='op' to='/nuestra-historia'>Nuestra Historia</Link></p>
          </div>
          <img src="../../img/logo-aje-group.png" alt="" />
          <div className='right'>
            <p className='op'><Link className='op' to='/trabajar-en-aje'>Trabaja con Nostros</Link></p>
            <p className='op1'><Link className='op1' to='/noticias-aje'>Noticias AJE</Link></p>
          </div>
        </div>
      </div>
      
    </div>
  )
}