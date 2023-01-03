import React from 'react'
import "./Announcement.css";
import Marquee from "react-fast-marquee"
// import { Announcement } from '@mui/icons-material';

const Announcement = () => {
  
  return (
    <>
        <div className="announcment">
            <Marquee speed={60} gradient={false} pauseOnHover>
                 <div className="announcment">
                    <span>INDUCTIONS NOW CLOSED</span>
                    <span>INDUCTIONS NOW CLOSED</span>
                    <span>INDUCTIONS NOW CLOSED</span>
                    <span>INDUCTIONS NOW CLOSED</span>
                    <span>INDUCTIONS NOW CLOSED</span>
                    </div>
            </Marquee>
        </div>
      
      
    </>
  );
};

export default Announcement