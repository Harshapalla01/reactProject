import React from "react";
import pic1 from './Images/Kiran.jpg';
// import pic2 from './Images/movies.jpg';
import pic2 from './Images/weather7.jpg';
import pic3 from './Images/news.jpg'
import pic4 from './Images/food.jpg';
import pic5 from  './Images/movies.jpg'
import pic6 from  './Images/products.jpg'
import react from './Images/react2.jpg'
import html from './Images/html.jpg'
import js from './Images/js.jpg'

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic2} className="d-block" style={{height:'450px',width:'100%'}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={pic3} className="d-block" style={{height:'450px',width:'100%'}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={pic4} className="d-block" style={{height:'450px',width:'100%'}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={pic5} className="d-block" style={{height:'450px',width:'100%'}} alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={pic6} className="d-block" style={{height:'450px',width:'100%'}} alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid" style={{marginTop:20}}>
          <div className="row">
            <div className="col-md-8" style={{marginTop:20}}>
              <h1 style={{color:'green'}}>HI 👋</h1>
              <h1><span style={{color:'black'}}>I'm Harsha</span></h1>
              <h1 className="Pt-1">I'm FRONT-END DEVELOPER</h1>
              <h5 className="pt-1" style={{fontFamily:'italic'}}>The year 2015 has been a milestone for global development as governments have adopted <br/>The 2030 Agenda for Sustainable Development, along with the Sustainable Development Goals .<br/> The bold agenda sets out a global framework to end extreme poverty, fight inequality and injustice, and fix climate change until 2030.</h5>
              
              
              {/* <button style={{backgroundColor:'green',color:'white'}}>Start now</button><br/> */}
            </div>
            <div className="col-md-4">
              <img src={pic1} alt='' style={{marginTop:20}}/>
            </div>
          </div>
         < div className='row m-2'>
          <center><h1 style={{ fontSize: '70px', color: 'red' }}>Skills</h1></center>
 
          <div className='col-md-4'>
            <div class="card"  style={{height:'500px'}}>
              <img src={js} class="card-img-top" alt="..." id="img" />
              <div class="card-body"  >
                <h5 class="card-title">java Script</h5>
                <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the</p>
                <a href="#" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card"  style={{height:'500px'}}>
              <img src={html} class="card-img-top"style={{height:'300px'}} alt="..." id="img" />
              <div class="card-body">
                <h5 class="card-title">HTML & CSS</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://www.w3schools.com/html/" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card"  style={{height:'500px'}} >
              <img src={react} class="card-img-top" style={{height:'300px'}} alt="..." id="img" />
              <div class="card-body">
                <h5 class="card-title">React Js</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div>
                <div className="footer">
                  <h5 style={{backgroundColor:'black', color:'white', padding:'20px', fontFamily:"italic"}}>Harsha Vardhan,
                  Kiran Kumar Reddy, Jahnavi
                  <h5>Social Media</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16">
  <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
</svg>
</h5>
                </div>
              </div>
              {/* <h4 className="p-3" style={{fontFamily:'serif'}}>Send us a message<b>@treine.me</b></h4> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
