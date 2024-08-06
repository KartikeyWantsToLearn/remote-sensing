import React from 'react'


const Carousel = () => {
  return (
  <>
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{ padding:'0'}}>
      <img src="https://marketplace.canva.com/EAFsxtB6cxM/1/0/1600w/canva-blue-night-sky-cute-whale-desktop-wallpaper-eweyyMLqlDU.jpg " class="d-block w-100" alt="..." style={{ maxHeight:'70vh'}}/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8Iw62vS5lsOBJl4X00AKOYULEt-evaSkLA&s" class="d-block w-100" alt="..." style={{ maxHeight:'70vh'}}/>
    </div>
    <div class="carousel-item">
      <img src=" https://i.pinimg.com/originals/d9/e3/c4/d9e3c47736b67051378f4a242072c1c6.png" class="d-block w-100" alt="..." style={{ maxHeight:'70vh'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Carousel