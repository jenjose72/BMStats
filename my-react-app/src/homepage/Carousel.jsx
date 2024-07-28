import React from "react";

function Carousel(){
    return(
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/pexels-scgough-13434565.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/Manchester_City__Premier_League_2023_24_Win__Etihad_Stadium__May_19_2024__AP_Photo.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/imago1038280250h.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel;