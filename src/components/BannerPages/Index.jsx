/* eslint-disable react/prop-types */
import "./bannerPages.css"
import { Line } from "../Line/Index"
import BannerLow from "../../../public/img/banner-low.png"

export const BannerPages = ({ bgImage, encabezado, bg, children }) => {
  return (
    <div className="containerBanner" style={{backgroundImage: bgImage}}>
      <div className="bg-fondo">
        <div className="banner">
          <h1>{encabezado}</h1>
          <Line bg={bg} width="30px"/>
          <p>
            {children} 
          </p>
        </div>
      </div>
      <img src={BannerLow} alt="" />
    </div>
  )
}