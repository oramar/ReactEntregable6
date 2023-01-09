import React from 'react'
import logo from '/img/logo_academlo.png'
import './styles/footer.css'
const Footer = () => {
  return (
    <footer className='footer-container'>
      <section className="grupo-1">
        <div className="box">
          <figure className='box__figure'>
            <a href="#">
              <img className='box__img' src={logo} alt="Logo de SLee Dw" />
            </a>
          </figure>
        </div>

        <div className="box">
          <h2 className='box__title'>SOBRE MI</h2>
          <p className='box__paragraf'>Soy desarrollador web, apasionado por la tecnología y la programación.</p>
          <p className='box__paragraf'> Programador Full Stack, con 4 años de experiencia en gestión de proyectos. Conocimientos de arquitectura, diseño e infraestructura de sistemas. Gracias a mi conocimiento, he logrado reducir los tiempos de entrega de proyectos en un 10%. Busco utilizar mis conocimientos para optimizar los procesos de desarrollo.</p>
        </div>
        <div className="box">
          <h2 className='box__title'>SIGUEME</h2>
          <div className="box__red-social">
            <a href="#" className="fa fa-facebook box__red"></a>
            <a href="#" className="fa fa-instagram box__red"></a>
            <a href="#" className="fa fa-twitter box__red"></a>
            <a href="#" className="fa fa-youtube box__red"></a>
          </div>
        </div>

      </section>
      <section className="grupo-2">
        <small className='small'>&copy; 2023 <b>Academlo</b> - Todos los Derechos Reservados.</small>
      </section>
    </footer>
  )
}

export default Footer