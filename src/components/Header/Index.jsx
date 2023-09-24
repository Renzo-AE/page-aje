import "./header.css"
import { optionNav } from "../../data/optionNav"
import { OptionNav } from "../OptionNav/Index"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuSelect, setMenuSelect] = useState("")

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClear = () => {
    setIsOpen(!isOpen)
    setMenuSelect("")
    setActiveIndex(null)
  } 

  const handleAccordionToggle = (index) => {
    if (optionNav[index].subOptions) setMenuSelect(optionNav[index].option)
    else setMenuSelect("")

    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <header>
      <div className={`contenedor ${isOpen&&"blank"}`}>
        <div className={`open-menu ${isOpen&&"move-icon"}`} onClick={handleClear}>
          <img src={`../../svg/${isOpen?"close":"amburguesa"}.svg`} alt="" />
        </div>
        <div className={`language ${isOpen&&"desaparecer-lenguaje"}`}>
          <p>Elegir idioma</p>
          <p className="">Español</p>
          <img src="../../svg/icon-down.svg" alt="" />
        </div>
      </div>
      <div className={`container-menu ${isOpen&&"mostrar-menu"}`}>
        <div className="contenedor-menu">
          <div className="">
            <Link to="/" onClick={handleClear}><img src="../../img/LOGO-AJE.png" alt="" width="150px" /></Link>
            <ul className="menu container-title">
              {optionNav.map((option, i) => 
                <OptionNav
                  key={i}
                  namePage={option}
                  menuSelect={menuSelect}
                  isOpen={activeIndex == i}
                  onToggle={() => handleAccordionToggle(i)}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}