import React, { Fragment } from 'react'
import '../Pages.css'
import './Home.css'

let images = [
  {
    id:'1',
    image : "https://ecart.com/assets/images/hero/Ecart_Banner2.2.webp"
  },
  {
    id:'2',
    image : "https://ecart.com/assets/images/hero/ecart_tiktok_900x450_EN.webp"
  },
  {
    id:'3',
    image : "https://ecart.com/assets/images/hero/belleza_movil_ing.webp"
  }
]
const Home = () => {
  return (
    <>
     <div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
   {images.map(item => (<Fragment key={item.id}>

    <div className= {item.id ==='1' ? 'carousel-item active' : 'carousel-item '}>
      <img src= {item.image} className="d-block slider-img" alt="..." />
    </div>
   </Fragment>))}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Home