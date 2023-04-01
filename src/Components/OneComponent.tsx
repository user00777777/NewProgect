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
    <div className="swiper">
    <div className="form-floating">
    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
      <option selected="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <label for="floatingSelect">Works with selects</label>
  </div>
    </div>
  );
}
