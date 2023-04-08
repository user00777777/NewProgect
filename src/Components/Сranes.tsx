import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import s from '../CssModules/Cranes.module.css'
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { setData } from '../Store/tableSlice';

export default function Сranes() {
  const[text,setText]=useState('')
const dispatch=useAppDispatch()
const selector=useAppSelector((state)=>state.table)


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

function f() {
let monorail: NodeListOf<HTMLElement>=document.querySelectorAll('[data-monorail]')
for (let i = 0; i <monorail.length ; i++) {
  const monoRialValue = monorail[i].dataset.monorail;
// console.log(typeof monoRialValue);

  if (monoRialValue) {
    dispatch(setData(monoRialValue));
  }
  

if (monorail[i].dataset.monorail=='51788') {
  // monorail[i].style.background='white'
  monorail[i].textContent="Окна";
  monorail[i].classList.add(s.pp)}
if (monorail[i].dataset.monorail=='51837') {
  monorail[i].classList.add(s.pp,s.p)
  monorail[i].textContent="Средние ряды";}
if (monorail[i].dataset.monorail=='51838') {
 monorail[i].textContent="Стена";
  monorail[i].classList.add(s.pp)}
if (monorail[i].dataset.monorail=='51763') {
  monorail[i].textContent="Скосы";
  monorail[i].classList.add(s.pp)}
if (monorail[i].dataset.monorail=="51690") {
  monorail[i].textContent="Савелово";
  monorail[i].classList.add(s.pp)}
if (monorail[i].dataset.monorail=="51779") {
  monorail[i].classList.add(s.pp)
    monorail[i].textContent="Подпятник середина";}
if (monorail[i].dataset.monorail=="51691") {
  monorail[i].classList.add(s.pp)
  monorail[i].textContent="Подпятник стена";}
if (monorail[i].dataset.monorail=="52057") {
monorail[i].textContent="Сливная Яма"
monorail[i].classList.add(s.pp)  
}


}}
function hoist() {

let hoist:NodeListOf<HTMLElement>=document.querySelectorAll('[data-hoist]')

console.log(text);

for (let i = 0; i<hoist.length ; i++) {

  if (hoist[i].dataset.hoist==text) 
  {  hoist[i].style.background='blue'}
 else{ hoist[i].classList.add(s.notPlus)}



 
 

 
  
  
}


  
}
let btn=()=>{hoist();f() ,setText('')}



  return (
  <>
 
<div className={s.parent}>
{/* <div className={[s.div1 ,s.y].join }> e</div> */}
<div data-monorail='51788' className={[s.div1,s.t,s.monorail ].join(' ')}  > Монорельс <span> №51788</span></div>
<div data-monorail='51837' className={[s.div2,s.t,s.monorail].join(' ')} > Mонорельс<span> №51837</span></div>
{/* <div className={[s.div3,s.t,s.monorail].join(' ')}> Mонорельс<span>№51837</span></div> */}
<div data-monorail="51838" className={[s.div4,s.t,s.monorail].join(' ')}> Монорельс <span>№51838</span></div>
<div className={[s.div5,s.t,s.storeroom].join(' ')}> Кладовые</div>
<div className={[s.div6,s.t,s.wc].join(' ')}> WC/Ж</div>
{/* <div className={[s.div7].join(' ')}> </div> */}
<div className={[s.div8,s.t,s.el].join(' ')}> Електрики</div>
{/* <div className={[s.div9].join(' ')}> </div> */}
<div className={[s.div10,s.t,s.wc].join(' ')}>WC=/M</div>
<div data-hoist='51906' className={[s.div11,s.t].join(' ') }  >51906</div>
<div data-hoist='52044' className={[s.div12,s.t].join(' ')}  > №52044</div>
<div data-hoist='51915' className={[s.div13,s.t].join(' ')}> №51915</div>
<div data-hoist='51854' className={[s.div14,s.t].join(' ')}> №51854</div>
<div data-hoist='51927' className={[s.div15,s.t].join(' ')}> №51927</div>
<div className={[s.div16,s.t].join(' ')}> -----------</div>
<div data-hoist='51830' className={[s.div17,s.t].join(' ')}> №51830</div>
<div data-hoist='51833' className={[s.div18,s.t].join(' ')}> №51833</div>
<div data-hoist='51832' className={[s.div19,s.t].join(' ')}> №51832</div>
<div data-hoist='51922' className={[s.div20,s.t].join(' ')}> №51922</div>
<div data-hoist='51924' className={[s.div21,s.t].join(' ')}> №51924</div>
<div data-hoist='51770' className={[s.div22,s.t].join(' ')}> №51770</div>
<div data-hoist='51871' className={[s.div23,s.t].join(' ')}> №51871</div>
<div data-hoist='51926' className={[s.div24,s.t].join(' ')}> №51926</div>
<div data-hoist='51925' className={[s.div25,s.t].join(' ')}> №51925</div>
<div data-hoist='51792' className={[s.div26,s.t].join(' ')}> №51792</div>
<div className={[s.div27,s.cart].join(' ')} data-carts="051973"> телега№ 051973</div>
<div className={[s.div28,s.t].join(' ')}> Шу Телеги</div>
<div data-hoist='51872' className={[s.div29,s.t].join(' ')}> №51872</div>
<div data-hoist='51908' className={[s.div30,s.t].join(' ')}> №51908</div>
<div data-hoist='51892' className={[s.div31,s.t].join(' ')}> №51892</div>
<div className={[s.div32,s.t].join(' ')}> -----------</div>
<div data-hoist='51831' className={[s.div33,s.t].join(' ')}> №51831</div>
<div data-hoist='51891' className={[s.div34,s.t].join(' ')}> №51891</div>
<div data-hoist='51834' className={[s.div35,s.t].join(' ')}> №51834</div>
<div data-hoist='51771' className={[s.div36,s.t].join(' ')}> №51771</div>
<div className={[s.div37,s.cart].join(' ')} data-carts="051975"> Tелега № 051975</div>
<div className={[s.div38,s.t].join(' ')}> ВС-300</div>
<div className={[s.div39,s.t].join(' ')}> ВДМ</div>
<div className={[s.div44,s.cart].join(' ')} data-carts="052087"> Телега <br/> №052087	</div>
<div data-hoist='51843' className={[s.div41,s.t].join(' ')}> №51843	</div>
<div data-hoist='51798' className={[s.div42,s.t].join(' ')}> № 51798</div>
<div data-hoist='51888' className={[s.div43,s.t].join(' ')}> № 51888</div>
<div data-hoist='52023' className={[s.div40,s.t].join(' ')}> № 52023	</div>
<div data-hoist='52939' className={[s.div45,s.t].join(' ')}> №   52939</div>
<div data-hoist='51795' className={[s.div46,s.t].join(' ')}> № 51795</div>
<div data-hoist='51797' className={[s.div47,s.t].join(' ')}> № 51797</div>
<div data-monorail="52057" className={[s.div48,s.t,s.monorail].join(' ')}> Монорельс <span>№52057</span></div>
<div data-monorail="51779" className={[s.div49,s.t,s.monorail].join(' ')}>Монорельс <span>№51779</span></div>
<div data-monorail="51691" className={[s.div50,s.t,s.monorail].join(' ')}>Монорельс <span>№51691</span></div>
<div className={[s.div51,s.t].join(' ')}> дорога</div>
<div data-hoist='52045' className={[s.div52,s.t].join(' ')}> №52045</div>
<div data-hoist='51800' className={[s.div53,s.t].join(' ')}> №51800	</div>
<div data-hoist='51880' className={[s.div54,s.t].join(' ')}> №51880</div>
<div data-hoist='51879' className={[s.div55,s.t].join(' ')}> №51879</div>
<div className={[s.div56,s.cart].join(' ')}data-carts="cart"> Телега</div>
<div data-hoist='' className={[s.div57,s.t].join(' ')}> №52046</div>
<div data-monorail="51763" className={[s.div58,s.t,s.monorail].join(' ')}>Монорельс <span> №51763</span>	</div>
<div  data-monorail="51690" className={[s.div59,s.t,s.monorail].join(' ')}>Монорельс <span> №51690</span>	</div>

<input value={text} type="text" className={s.inp} onChange={(e)=>setText( e.target.value)}/>
<button className={s.btn} onClick={btn}>Жми</button>
 <h3 className={s.h3}>Малярка</h3>
<div data-hoist='52805' className={[s.div60,s.t,s.mal].join(' ')}> #52805</div>
<div data-hoist='52806' className={[s.div61,s.t,s.mal].join(' ')}> №52806</div>
<div data-hoist='52019' className={[s.div62,s.t,s.mal].join(' ')}>№52019</div>
<div data-hoist='52020' className={[s.div63,s.t,s.mal].join(' ')}> №52020</div>

</div> 

</> 
)
}
