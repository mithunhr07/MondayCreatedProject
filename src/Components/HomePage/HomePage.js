import React, { Component } from 'react';
import agri_img from '../Images/office.jpg';
import './HomePage.css';
import service_img from '../Images/service_img.jpeg';
import corn_cutter from '../Images/corn_cutter_img.jpeg';
import mini_tractor from '../Images/mini_tractor_img.jpeg';
import tiller from '../Images/tiller_img.jpeg';
import FooterPage from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';




class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
                 <Navbar/>
                <img id="homepage_img" src={agri_img}/> 
                    <h2 class="text-block">Creating Machinery World</h2>
                    </div><br></br><br></br>
                    <div class="row">
                    <div class="col-md-2">
         <div class="card mb-2 text-white bg-dark">
            <img class="card-img-top" src={service_img}></img>
            <div class="card-body">
               <h5 class="card-title">SERVICES</h5>
               <p class="card-text">Use Machine For Better Improvement</p>
               <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-light btn-sm">DISCOVER</a>
            </div>
       </div> 
      </div>
      <div class="col-md-8">
                <div>
                    <img src="https://mdbootstrap.com/img/Photos/Others/portrait.jpg" class="img-fluid" alt="photo"></img>
                </div>
                </div>
                </div><br></br><br></br>
                <div>
                <i class="fa fa-quote-right" id="inverted_comma_icon"></i>
                <div className="services">
                <h2>Focused on the needs of the farmer.</h2>
                <p>We have placed a set of services and tools for farmers at your disposal
                   to help<br></br> make your day-to-day work easier,in order to optimise profits from your investment and<br></br>
                    allow you to find out the requirements of your land in greater detail.
                </p>
                </div>
                </div><br></br><br></br><br></br><br></br><br></br><br></br>
    <div class="row">
    <div class="col-md-4">
    <div id="demo" class="carousel slide" data-ride="carousel">





<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={corn_cutter}></img>
  </div>
  <div class="carousel-item">
    <img src={mini_tractor}></img>
  </div>
  <div class="carousel-item">
    <img src={tiller}></img>
  </div>
</div>


<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
</div>
    
    
    <div class="card mb-4 text-white bg-dark">
            <img class="card-img-top" src={service_img}></img>
            <div class="card-body">
               <h5 class="card-title">Machines with New Technology</h5>
               <p class="card-text">Newly Invented Machines</p>
               <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-light btn-sm">DISCOVER</a>
            </div>
       </div> 
    </div>
    <FooterPage/>
    </div>
          
            
        );
    }
}

export default HomePage;