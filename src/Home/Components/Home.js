import React from 'react';
import '../Components/Home.css';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate=useNavigate()
    const handlePickup=()=>{
        navigate('/pickup')
    }
    return (
        <div className='rcb-div'>
     
            {/* <img src='/Images/home_banner.jpg' className="image-background" alt="Stadium" /> */}
            <Row>
                <Col xs={12} md={6}>
                                <h4 className="top-layer">
             WE OFFER TRANSPORT <br/>QUICK & POWERFUL SOLUTION<br/> <span className="red-text">CAR</span><span className="red-text2">G</span><span className="red-text3">O</span>
            </h4>
            <br/>
            <br/>

            <p className="top-layer-p">Our experience in this industry has allowed us to constantly<br/> provide reliable from Qatar to all over the world.</p>
            <div className='home-contact' >
            <div className='discover'>
                <p onClick={handlePickup}>Pickup Request</p>
            </div>

                <div className='contact'>
                    <p>Contact Us</p>
                </div>
            </div>
                </Col>
                <Col xs={12} md={6}>
                <div className='rcb-card'>
                {/* <img src='/Images/delivery.png'/> */}
                <h5>Track Your Order</h5>
                <input
                placeholder='Enter your TrackID'
                />
                <Button>Track My Order</Button>
           
            </div>
                </Col>
            </Row>

          
          
            
        </div>
    );
}

export default Home;
