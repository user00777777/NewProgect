import React from 'react'
import s from '../CssModules/Cranes.module.css'

export default function Сranes() {


//   let c:NodeListOf<HTMLElement>=document.querySelectorAll("[data-cart]")
//  for (let i = 0; i < c.length; i++) {
//   console.log(c[i].dataset.cart);
//   if (c[i].dataset.cart=='cart') {
//   c[i].style.fontSize="40px"
//   c[i].textContent="123098"

 
//   }
// }
// let c:NodeListOf<HTMLElement>=document.querySelectorAll("[data-cart]");

// for (let i = 0; i < c.length; i++) {
//   // console.log(c[i].dataset.cart);
//   if (c[i].dataset.cart=='pe') {
//     c[i].style.fontSize="40px";
//     c[i].textContent="123098ыыыыыыыыыыыыыыыы";
//   }
// }
console.log(1);

function f() {
let monorail: NodeListOf<HTMLElement>=document.querySelectorAll('[data-monorail]')
for (let i = 0; i <monorail.length ; i++) {
  console.log(monorail);
  
if (monorail[i].dataset.monorail=='51788') {
  monorail[i].style.background='white'
  monorail[i].textContent="Окна";
  monorail[i].style.fontSize='30px'

 

}
if (monorail[i].dataset.monorail=='51837') {
  monorail[i].style.background='white'
  monorail[i].textContent="Средние ряды";
  monorail[i].style.fontSize='20px'
  monorail[i].style.width='200px'

 

}
if (monorail[i].dataset.monorail=='51838') {
  monorail[i].style.background='white'
  monorail[i].textContent="Стена";
  monorail[i].style.fontSize='20px'

 

}
if (monorail[i].dataset.monorail=='51763') {
  monorail[i].style.background='white'
  monorail[i].textContent="Скосы";
  monorail[i].style.fontSize='20px'

 

}
if (monorail[i].dataset.monorail=="51690") {
  monorail[i].style.background='white'
  monorail[i].textContent="Савелово";
  monorail[i].style.fontSize='20px'

 

}
if (monorail[i].dataset.monorail=="51779") {
  monorail[i].style.background='white'
  monorail[i].textContent="Подпятник середина";
  monorail[i].style.fontSize='1rem'

 

}
if (monorail[i].dataset.monorail=="51691") {
  monorail[i].style.background='white'
  monorail[i].textContent="Подпятник стена";
  monorail[i].style.fontSize='1rem'

 

}
if (monorail[i].dataset.monorail=="52057") {
  monorail[i].style.background='white'
  monorail[i].textContent="Сливная Яма";
  monorail[i].style.fontSize='17px'

 

}
  
}}




  return (
   
 
<div className={s.parent}>
{/* <div className={[s.div1 ,s.y].join }> e</div> */}
<div data-monorail='51788' className={[s.div1,s.t,s.monorail ].join(' ')} onClick={f} > Монорельс <span> №51788</span></div>
<div data-monorail='51837' className={[s.div2,s.t,s.monorail].join(' ')}> Mонорельс<span> №51837</span></div>
{/* <div className={[s.div3,s.t,s.monorail].join(' ')}> Mонорельс<span>№51837</span></div> */}
<div data-monorail="51838" className={[s.div4,s.t,s.monorail].join(' ')}> Монорельс <span>№51838</span></div>
<div className={[s.div5,s.t,s.storeroom].join(' ')}> Кладовые</div>
<div className={[s.div6,s.t,s.wc].join(' ')}> WC/Ж</div>
{/* <div className={[s.div7].join(' ')}> </div> */}
<div className={[s.div8,s.t,s.el].join(' ')}> Електрики</div>
{/* <div className={[s.div9].join(' ')}> </div> */}
<div className={[s.div10,s.t,s.wc].join(' ')}>WC=/M</div>
<div className={[s.div11,s.t].join(' ') } data-id='51906' >51906</div>
<div className={[s.div12,s.t].join(' ')}  > №52044</div>
<div className={[s.div13,s.t].join(' ')}> №51915</div>
<div className={[s.div14,s.t].join(' ')}> №51854</div>
<div className={[s.div15,s.t].join(' ')}> №51927</div>
<div className={[s.div16,s.t].join(' ')}> -----------</div>
<div className={[s.div17,s.t].join(' ')}> №51830</div>
<div className={[s.div18,s.t].join(' ')}> №51833</div>
<div className={[s.div19,s.t].join(' ')}> №51832</div>
<div className={[s.div20,s.t].join(' ')}> №51922</div>
<div className={[s.div21,s.t].join(' ')}> №51924</div>
<div className={[s.div22,s.t].join(' ')}> №51770</div>
<div className={[s.div23,s.t].join(' ')}> №51871</div>
<div className={[s.div24,s.t].join(' ')}> №51926</div>
<div className={[s.div25,s.t].join(' ')}> №51925</div>
<div className={[s.div26,s.t].join(' ')}> №51792</div>
<div className={[s.div27,s.cart].join(' ')} data-carts="051973"> телега№ 051973</div>
<div className={[s.div28,s.t].join(' ')}> Шу Телеги</div>
<div className={[s.div29,s.t].join(' ')}> №51872</div>
<div className={[s.div30,s.t].join(' ')}> №51908</div>
<div className={[s.div31,s.t].join(' ')}> №51892</div>
<div className={[s.div32,s.t].join(' ')}> -----------</div>
<div className={[s.div33,s.t].join(' ')}> №51831</div>
<div className={[s.div34,s.t].join(' ')}> №51891</div>
<div className={[s.div35,s.t].join(' ')}> №51834</div>
<div className={[s.div36,s.t].join(' ')}> №51771</div>
<div className={[s.div37,s.cart].join(' ')} data-carts="051975"> Tелега № 051975</div>
<div className={[s.div38,s.t].join(' ')}> ВС-300</div>
<div className={[s.div39,s.t].join(' ')}> ВДМ</div>
<div className={[s.div40,s.cart].join(' ')}data-carts="052087"> Телега <br/> №052087	</div>
<div className={[s.div41,s.t].join(' ')}> №51843	</div>
<div className={[s.div42,s.t].join(' ')}> № 51798</div>
<div className={[s.div43,s.t].join(' ')}> № 51888</div>
<div className={[s.div44,s.t].join(' ')}> № 52023	</div>
<div className={[s.div45,s.t].join(' ')}> №   52939</div>
<div className={[s.div46,s.t].join(' ')}> № 51795</div>
<div className={[s.div47,s.t].join(' ')}> № 51797</div>
<div data-monorail="52057" className={[s.div48,s.t,s.monorail].join(' ')}> Монорельс <span>№52057</span></div>
<div data-monorail="51779" className={[s.div49,s.t,s.monorail].join(' ')}>Монорельс <span>№51779</span></div>
<div data-monorail="51691" className={[s.div50,s.t,s.monorail].join(' ')}>Монорельс <span>№51691</span></div>
<div className={[s.div51,s.t].join(' ')}> дорога</div>
<div className={[s.div52,s.t].join(' ')}> №52045</div>
<div className={[s.div53,s.t].join(' ')}> №51800	</div>
<div className={[s.div54,s.t].join(' ')}> №51880</div>
<div className={[s.div55,s.t].join(' ')}> №51879</div>
<div className={[s.div56,s.cart].join(' ')}data-carts="cart"> Телега</div>
<div className={[s.div57,s.t].join(' ')}> №52046</div>
<div data-monorail="51763" className={[s.div58,s.t,s.monorail].join(' ')}>Монорельс <span> №51763</span>	</div>
<div  data-monorail="51690" className={[s.div59,s.t,s.monorail].join(' ')}>Монорельс <span> №51690</span>	</div>



</div> 
)
}
