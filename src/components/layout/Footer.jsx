import React from 'react';
import { FaHome, FaPhone, FaMailBulk} from "react-icons/fa";
import { MDBFooter} from 'mdb-react-ui-kit';
import "./Footer.css"

export default function Footer() {
  return (
    <>
       <div className="foot d-flex text-white justify-content-around " >
          <div className="left ">
            <div className="location">
            <h5>  
            <h6><b><a href="">News</a> </b>  </h6>
              </h5>
              
            </div>
            <div className="phone">
              <h5>
              <h6><b><a href="">Customer Services</a> </b>  </h6>
              </h5>
              </div>
                <div className="email">
                  <h5>
                  <h6><b><a href="">Careers</a> </b>  </h6>
                  </h5>
                </div>
              </div>
              <div className="fo-right">
              <div>
              <h6><b><a href="">Privacy Policy</a> </b>  </h6>
              <h6><b> <a href="">Links</a> </b>  </h6>
              <h6><b> <a href="">Activities</a></b>  </h6>
              </div>
              </div>
               
        </div>
        <footer className='d-flex flex-column '>
     <MDBFooter className='bottom-foot text-center text-white  '>
        
 
       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 1, 0, 0.2)' }}>
       Copyright © 2023 
         <a className='text-white' href='#'>
           <span> Gorakhpur, India</span>  
         </a>
       </div>
     </MDBFooter>
     </footer>
    </>
    
  );
}
