import React from "react";
import "../../styles/global.css"
import "../../styles/ProfileInfoSection.css"

export function ProfileInfoSection() {
  return (
    <>
    <section className="container mt-64">
      <div className="profile-info-header" >
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="profile-info-photo" />
        
        <div className="profile-info-title">
            <div>
              <h4 className="profile-name">Rocío del Valle Maneiro</h4>
              <p className="profile-subtitle">Nacionalidad: Venezolana</p>
              <p className="profile-subtitle">Sector: Todos los sectores</p>
              <p>Diplomática y política venezolana que se desempeñó como Embajadora de Venezuela ante la República Popular China entre los años 2004 y 2013, período en el cual se conformaron los Fondos Chinos venezolanos. Posteriormente, el presidente Nicolás Maduro la nombró Embajadora ante el Reino Unido de la Gran Bretaña e Irlanda del Norte, cargo que conserva hasta la actualidad.</p>
            </div>
        </div>
      </div>
      <div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
            ADSCRIPCIÓN INSTITUCIONAL
          </h3>
          <p className="profile-contents">
            Ministerio del Poder Popular para las Relaciones Exteriores
          </p>
        </div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
            CARGO O RESPONSABILIDAD
          </h3>
          <p className="profile-contents">
            Embajadora de Venezuela ante la República Popular China (2004-2013)
          </p>
        </div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
            OTROS CARGOS OCUPADOS
          </h3>
          <p className="profile-contents">
            Embajadora de Venezuela ante el Reino Unido de la Gran Bretaña e Irlanda del Norte (2014-actualidad)
          </p>
        </div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
           HITOS - RELACIONAMIENTO RPCh
          </h3>
            <ul  className="profile-contents">
              <li className="profile-list mb-16">
          26/03/2007: Formó parte de la Delegación venezolana que recibió la visita de Li Changchun, miembro del Buró Político del Partido Comunista de China. 
            </li>
            <li className="profile-list mb-16"> 06/11/2007: Formó parte de la Delegación venezolana que participó en la VI Comisión Mixta de Alto Nivel China-Venezuela (CMAN). En este encuentro se firmaron el Acuerdo de Seis Partes y el Acuerdo de Cuatro Partes, que sirvieron de marco jurídico para la conformación de los Fondos Chinos venezolanos.
              </li> 
              <li className="profile-list mb-16">09/05/2008: Estuvo presente en la firma de los acuerdos que dieron origen al Fondo Conjunto Chino Venezolano (FCCV). En esta fecha, la embajadora Maneiro no firmó acuerdo alguno, pero si participó de forma protocolar.
              </li>   
              <li className="profile-list mb-16">17/04/2010: Estuvo presente en la firma de los acuerdos que dieron origen al Fondo de Gan Volumen a Largo Plazo (FGVLP). En esta fecha, la embajadora Maneiro no firmó acuerdo alguno, pero si participó de forma protocolar.
              </li>
              <li className="profile-list mb-16">24/11/2011: Estuvo presente en la X Comisión Mixta de Alto Nivel China-Venezuela (CMAN). En este encuentro, se firmó una renovación del Tramo A del FCCV, el cual implicó un nuevo financiamiento por parte del Banco de Desarrollo de China por el orden de 4000 millones de dólares.
              </li>
              <li className="profile-list mb-16">24/02/2012: Estuvo presente en el acto de firma de la renovación del Tramo B del FCCV, lo cual permitió una renovación de la línea de crédito de este mecanismo financiero en 6000 millones de dólares (4000 provenientes del Banco de Desarrollo de China).
              </li>
            </ul> 
        </div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
            VINCULACIÓN PROYECTOS FCV
          </h3>
          <p className="profile-contents">
            Todos los proyectos durante su cargo
          </p>
        </div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
          VINCULACIÓN COMPRA DE BIENES Y SERVICIOS FCV
          </h3>
          <p className="profile-contents">
            Todos los proyectos durante su cargo
          </p>
        </div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
          VINCULACIÓN COMPRA DE BIENES Y SERVICIOS FCV
          </h3>
          <p className="profile-contents">
            NO
          </p>
        </div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
          IRREGULARIDADES
          </h3>
          <p className="profile-contents">
          2010: Posible irregularidad en la participación de Venezuela en la Exposición Internacional de Shanghai
          </p>
        </div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
          CASOS DE CORRUPCIÓN
          </h3>
          <p className="profile-contents">
            2019: Acusación por presunto soborno recibido en la banca de Andorra
          </p>
        </div>
        <div className="profile-texts mt-40">
          <h3 className=".profile-subtitles-contents">
          LINKS SITE 
          </h3>
          <p className="profile-contents">
            <a className="box-header-link font-m-p" href="https://fundacionandresbello.org/wp-content/uploads/2023/03/perfil-personas-rocio-maneiro.pdf
            ">https://fundacionandresbello.org/wp-content/uploads/2023/03/perfil-personas-rocio-maneiro.pdf
              </a> 
          </p>
        </div>
      </div>
    </section>  
    </>
  );
}
