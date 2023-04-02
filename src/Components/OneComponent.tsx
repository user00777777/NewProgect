import React, { useEffect } from 'react';
import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';
import { useNavigate } from 'react-router-dom';

import
 
'swiper/css'
;
// import one from '../CssModules/One.module.css';

export default function OneComponent() {
  const navigate = useNavigate();

 
  return (
    <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
    <button type="button" className="btn btn-primary">Left</button>
    <button type="button" className="btn btn-primary">Middle</button>
    <button type="button" className="btn btn-primary">Right</button>
  </div>
  );
}
