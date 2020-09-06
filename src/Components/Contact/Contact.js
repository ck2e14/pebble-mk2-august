import React from "react";
import "./Contact-style.css";

const Contact = () => {
   return (
      <div className='contact-container'>
         <div className='contact-contents'>
            Pebble Solutions works with a select number of clients in order to deliver them maximum focus.
            <span><br/>
               If you would like to discuss your situation in confidence, please contact Ted Kennedy at <a href="mailto:ted.kennedy@pebblesolutions.com" className="ted-email">ted.kennedy@pebblesolutions.com</a>
               
            </span>
         </div>
      </div>
   );
};

export default Contact;
