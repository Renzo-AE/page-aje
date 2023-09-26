import { BannerPages } from "../../components/BannerPages/Index"
import { NavHistoria } from "../../components/NavHistoria/Index"
import { data } from "../../data/dataCarruselHistoria"
import "./nuestraHistoria.css"


// eslint-disable-next-line react/prop-types
export const NuestraHistoria = ({ pageSelect }) => {
  const urlBgImage = "url('../../../public/img/banner-historia.jpg')"
  const encabezado = "Más de 34 años haciendo posible lo imposible"
  console.log(data)

  return (
    <div>
      <BannerPages
        bgImage={urlBgImage}
        encabezado={encabezado}
        bg="#ef7834"
      >
        Queremos <strong>crecer de forma estrategica, </strong>
        siempre comprometedios con la sociedad para hacer del mundo un espacio más sostenible
        y solidario.
      </BannerPages>

      <NavHistoria pageSelect={pageSelect} />

      <h1 style={{
        textAlign:"center",
        fontSize: "2.3rem",
        margin : "25px 0 60px"}}
      >
        Nuestra Historia
      </h1>

      <strong style={{
        width: "80%",
        maxWidth:"652px",
        display:"block", 
        margin: "auto", 
        textAlign:"center", 
        color:"#98989c",
        lineHeight: 1.5}}
      >
          AJE nació en Ayacucho – Perú, hace más de 30 años. El compromiso con el medio ambiente y con la naturaleza, para esta compañía, es parte de su ADN. Es el medio natural en el que crecimos, en el que nos criamos y en el que empezamos a dar nuestros primeros pasos.
      </strong>
      <div style={{maxWidth:"1210px", padding:"0 20px", margin:"auto"}}>
        <div></div>
        <div className="contenedor-slider">
          <div className="contenedor-slider-img">
            {
              data.map((fact) => (
                <img key={fact.id} id={`img-${fact.id}`} src={fact.img} className="img-slider" alt="" />
              ))
            }
          </div>
          <div className="contenedor-slider-info">
            {
              data.map((fact) => (
                <div key={fact.id} id={`img-${fact.id}`} src={fact.img} className="info-slider" alt="" ></div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}