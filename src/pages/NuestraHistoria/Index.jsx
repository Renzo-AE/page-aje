import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BannerPages } from "../../components/BannerPages/Index";
import { NavHistoria } from "../../components/NavHistoria/Index";
import { data } from "../../data/dataCarruselHistoria";
import "./nuestraHistoria.css";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export const NuestraHistoria = ({ pageSelect }) => {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const urlBgImage = "url('../../../public/img/banner-historia.jpg')";
  const encabezado = "Más de 34 años haciendo posible lo imposible";

  const timeViewRef = useRef(null);

  console.log(timeViewRef.current, "timeViewRef")

  return (
    <div>
      <BannerPages bgImage={urlBgImage} encabezado={encabezado} bg="#ef7834">
        Queremos <strong>crecer de forma estrategica,</strong>
        siempre comprometedios con la sociedad para hacer del mundo un espacio
        más sostenible y solidario.
      </BannerPages>

      <NavHistoria pageSelect={pageSelect} />

      <h1
        style={{
          textAlign: "center",
          fontSize: "2.3rem",
          margin: "25px 0 60px",
        }}
      >
        Nuestra Historia
      </h1>

      <strong
        style={{
          width: "80%",
          maxWidth: "652px",
          display: "block",
          margin: "auto",
          textAlign: "center",
          color: "#98989c",
          lineHeight: 1.5,
        }}
      >
        AJE nació en Ayacucho – Perú, hace más de 30 años. El compromiso con el
        medio ambiente y con la naturaleza, para esta compañía, es parte de su
        ADN. Es el medio natural en el que crecimos, en el que nos criamos y en
        el que empezamos a dar nuestros primeros pasos.
      </strong>
      <div className="slider-wrapper">
        <div className="contenedor-slider">
          <Splide
            onMove={(event) => {
              console.log(event, "event");
              setCurrentSlideIndex(event.index);
              timeViewRef?.current?.go(event.index);
              if (event.index !== 0) {
                setIsFirstPage(false);
              } else {
                setIsFirstPage(true);
              }
            }}
            options={{
              perPage: isFirstPage ? 2 : 1,
              gap: "1rem",
              focus: "center",
              padding: isFirstPage ? "0" : {
                left: "22rem",
                right: "22rem",
              },
              pagination: false,
            }}
          >
            {data.map((fact, index) => (
              <SplideSlide key={fact.id}>
                <img
                  key={fact.id}
                  src={fact.img}
                  className={`img-slider ${
                    currentSlideIndex === index ? "active" : ""
                  }`}
                  alt=""
                />
              </SplideSlide>
            ))}
          </Splide>
          <Splide
            options={{
              pagination: false,
              arrows: false,
            }}
            ref={timeViewRef}
          >
            {data.map((item, index) => (
              <SplideSlide key={item.id}>
                <div className="contenedor-slider-info">
                  <h2 className="contenedor-slider-info__title">
                    {item.year}
                  </h2>
                  <h3 className="contenedor-slider-info__subtitle">
                    {item.title}
                  </h3>
                  <p className="contenedor-slider-info__description">
                    {item.description}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};
