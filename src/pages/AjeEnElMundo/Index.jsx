import { BannerPages } from "../../components/BannerPages/Index"
import { NavHistoria } from "../../components/NavHistoria/Index"

export const AjeEnElMundo = ({ pageSelect }) => {
  const urlBgImage = "url('../../../public/img/banner-historia.jpg')"
  const encabezado = "Más de 34 años haciendo posible lo imposible"

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
    </div>
    
  )
}