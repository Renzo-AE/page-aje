/* eslint-disable react/prop-types */
import './optionNav.css'

export const OptionNav = ({ namePage, menuSelect, isOpen, onToggle }) => {

  return (
    <li className='li'>
      <div className='li-page' onClick={onToggle}>
        <div className={`line-title ${namePage.option == menuSelect && 'select-line-title'}`} />
        <p className={`title ${namePage.option == menuSelect && 'select-title'}`}>{namePage.option}</p> 
      </div>
      <ul className={`container-subtitle ${namePage.subOptions && isOpen&&'subOption'}`} >
        {
          namePage.subOptions && namePage.subOptions.map(subTitle =>
            <li key={subTitle}>
              <div className='line-subtitle'></div>
              <p className='subtitle'>{subTitle}</p>
            </li>
          )
        }
      </ul>
    </li>
  )
}