import React from 'react';

const Header = () => {
  return (
    <>
     <div>
      <span className='heading'>Finderr</span>    
    </div> 

    <div id="carouselExampleDark" className="carousel carousel-dark slide mt-2 my-3">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://media.istockphoto.com/id/1150453308/photo/happy-curly-african-american-woman-sitting-in-yellow-dress-on-chair-and-smiling-on-orange.webp?b=1&s=170667a&w=0&k=20&c=VnuaoBobesEtxMY24hHwwiKpSfiUYPm8-608WCXjwW0=" 
       alt="img"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://media.istockphoto.com/id/1005624354/photo/beautiful-woman-presenting-a-copyspace.webp?b=1&s=170667a&w=0&k=20&c=ztriurr7Y6iIKbkgCfefYKP6g4Op52IOidfrqqKZfxY="
      alt="img"/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.webp?b=1&s=170667a&w=0&k=20&c=YQEq3Bmwk8wNjeyTVpj4tHU7kVmMzsHZlhm-UUnSPEE=" 
      alt="img"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Header;
