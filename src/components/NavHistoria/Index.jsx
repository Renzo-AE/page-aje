import { useEffect, useState } from "react"
import "./navHistoria.css"
import { Link } from "react-router-dom"

export const NavHistoria = ({ pageSelect }) => {
  const options = [
    ["/nuestra-historia", "Nuestra Historia", "historia"],
    ["", "Nuestra misión, visión y valores", ""],
    ["", "Nuestra Identidad", ""],
    ["/aje-en-el-mundo", "AJE en el mundo", "enelmundo"]
  ]

  function mover ( direction) {
    const containerNavHistoria = document.querySelector(".nav-historia-container")
    const btnLeft = document.querySelector(".btn-left")
    const btnRigth = document.querySelector(".btn-rigth")

    if ( direction == "left" ) {
      containerNavHistoria.scrollLeft -= containerNavHistoria.offsetWidth
    } else if ( direction == "rigth" ) {
      containerNavHistoria.scrollLeft += containerNavHistoria.offsetWidth
    }

    containerNavHistoria.addEventListener("scroll", () => {
      if ( containerNavHistoria.scrollLeft <= 0 ) btnLeft.style.display = "none"
      else { 
        btnLeft.style.display = "block"
        btnRigth.style.display = "block"
      }

      if (containerNavHistoria.offsetWidth < 600 ) {
        if (containerNavHistoria.scrollLeft + containerNavHistoria.offsetWidth == containerNavHistoria.scrollWidth ) btnRigth.style.display = "none"
      } else if (containerNavHistoria.offsetWidth < 900 ) {
        if (containerNavHistoria.scrollLeft + containerNavHistoria.offsetWidth == containerNavHistoria.scrollWidth ) btnRigth.style.display = "none"
      } else if (containerNavHistoria.offsetWidth < 1000 ) {
        if (containerNavHistoria.scrollLeft + containerNavHistoria.offsetWidth == containerNavHistoria.scrollWidth ) btnRigth.style.display = "none"
      } else {
        btnRigth.style.display = "block"
        btnLeft.style.display = "block"
      }
    })
  }

  return (
    <div>
      <div className="nav-historia-container">
        <div className="nav-historia">
          <ul>
            {
              options.map((option, i) =>
                <li key={i} className={option[2] === pageSelect ? "select" : ""}><Link to={option[0]}>{option[1]}</Link></li>
              )
            }
          </ul>
        </div>
        <div className="underline"></div>
      </div>
      <div className="nav-buttons">
        <img className="btn-left" src="../../svg/arrow-left.svg" alt="" onClick={() => mover("left")} />
        <img className="btn-rigth" src="../../svg/arow-rigth.svg" alt="" onClick={() => mover("rigth")} />
      </div>
    </div>
  )
}