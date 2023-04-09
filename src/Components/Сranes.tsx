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
let t: NodeListOf<HTMLElement> = document.querySelectorAll('[data-hoist]');
for (let i = 0; i < t.length; i++) {
  let tt = t[i];
  t[i].addEventListener("click", (event: MouseEvent) => {
    let targetElement = event.target as HTMLElement; // Явное приведение типа
    let x = targetElement.dataset;
    tt.classList.add(s.machine)
    let ansver=x.machine
    console.log(x.machine);
    // tt.style.color='red'
    tt.innerHTML=String( ansver)
    // if (x.w == 66) {
    //   let prev = tt.previousElementSibling ? tt.previousElementSibling.dataset.s : null;
    //   let next = tt.nextElementSibling ? tt.nextElementSibling.dataset.w : null;
    //   if (tt.previousElementSibling) {
    //     tt.previousElementSibling.innerHTML = prev;
    //   }
    //   if (tt.nextElementSibling) {
    //     tt.nextElementSibling.innerHTML = next;
    //   }
    // }
    // Далее делайте что-то с переменной x
  });
}




// let neighbour:NodeListOf<
// HTMLElement
// >
// =document.querySelectorAll('.t')
// for (let i = 0; i < neighbour.length; i++) {

//   let data=neighbour[i].getAttribute('data-machine')
//   console.log( data);


// }
 






for (let j = 0; j<hoist.length ; j++) {
let current=hoist[j]


  if (hoist[j].dataset.hoist==text) 
  {  hoist[j].style.background='aqua';
  let c=hoist[j]
  // console.log(c);
  
  hoist[j].style.zIndex='1'
  // console.log(current.previousElementSibling);
   let prev=hoist[j].previousElementSibling?.getAttribute('data-machine')
  //  console.log(prev);
  
  if
  (current.previousElementSibling !== null) {
    current.previousElementSibling.classList.add(s.new)
     current.previousElementSibling.innerHTML = String(prev)

 ;
   }


//  console.log(prev);
 


hoist[j].classList.add(s.plus)


  //  hoist[j].previousElementSibling?.textContent
}
 else{ hoist[j].classList.add(s.notPlus)}



 
 

 
  
}



  
}
let btn=()=>{hoist();f() ,setText('')}



  return (
  <>
 
<div className={s.parent}>
{/* <div className={[s.div1 ,s.y].join }> e</div> */}
<div data-monorail='51788' className={[s.div1,s.t,s.monorail,'t' ].join(' ') }  > Монорельс <span> №51788</span></div>
<div data-monorail='51837' className={[s.div2,s.t,s.monorail].join(' ')} > Mонорельс<span> №51837</span></div>
{/* <div className={[s.div3,s.t,s.monorail].join(' ')}> Mонорельс<span>№51837</span></div> */}
<div data-monorail="51838" className={[s.div4,s.t,s.monorail].join(' ')}> Монорельс <span>№51838</span></div>
<div className={[s.div5,s.t,s.storeroom].join(' ')}> Кладовые</div>
<div className={[s.div6,s.t,s.wc].join(' ')}> WC/Ж</div>
{/* <div className={[s.div7].join(' ')}> </div> */}
<div className={[s.div8,s.t,s.el].join(' ')}> Електрики</div>
{/* <div className={[s.div9].join(' ')}> </div> */}
<div className={[s.div10,s.t,s.wc].join(' ')}>WC=/M</div>
<div data-hoist='51906' data-machine='2a554-окна' className={[s.div11,s.t,'t'].join(' ') }  >51906</div>
<div data-hoist='52044' data-machine='клепка-правее' data-neighbour="клепка" className={[s.div12,s.t].join(' ')}  >52044</div>
<div data-hoist='51915' data-machine='клепка-левее ' className={[s.div13,s.t,'t'].join(' ')}> 51915</div>
<div data-hoist='51854' data-machine='2a554 стена 'className={[s.div14,s.t,'t'].join(' ')}> 51854</div>
<div data-hoist='51927' data-machine='См2126-Окно' className={[s.div15,s.t,'t'].join(' ')}> 51927</div>
<div className={[s.div16,s.t].join(' ')}> -----------</div>
<div data-hoist='51830' data-machine='клепка-левее' className={[s.div17,s.t,'t'].join(' ')}> 51830</div>
<div data-hoist='51833' data-machine='См2126-стена' className={[s.div18,s.t,'t'].join(' ')}> 51833</div>
<div data-hoist='51832' data-machine='sb833-окно' className={[s.div19,s.t,'t'].join(' ')}> 51832</div>
<div data-hoist='51922' data-machine='2A554' className={[s.div20,s.t,'t'].join(' ')}> 51922</div>
<div data-hoist='51924' data-machine='2H55' className={[s.div21,s.t,'t'].join(' ')}> 51924</div>
<div data-hoist='51770' data-machine='2H55 Стена' className={[s.div22,s.t,'t'].join(' ')}> 51770</div>
<div data-hoist='51871' data-machine='SB972 Окно' className={[s.div23,s.t,'t'].join(' ')}> 51871</div>
<div data-hoist='51926' data-machine='клепка-Семен' className={[s.div24,s.t,'t'].join(' ')}> 51926</div>
<div data-hoist='51925' data-machine='клепка' className={[s.div25,s.t,'t'].join(' ')}> 51925</div>
<div data-hoist='51792' data-machine='SB972' className={[s.div26,s.t,'t'].join(' ')}> 51792</div>
<div className={[s.div27,s.cart].join(' ')} data-carts="051973"> телега№ 051973</div>
<div className={[s.div28,s.t].join(' ')}> Шу Телеги</div>
<div data-hoist='51872'data-machine='AM19176 Балочный' className={[s.div29,s.t,'t'].join(' ')}> 51872</div>
<div data-hoist='51908'data-machine='новый 16-шпиндельный' className={[s.div30,s.t,'t'].join(' ')}> 51908</div>
<div data-hoist='51892'data-machine='Заминированая-клепка' className={[s.div31,s.t,'t'].join(' ')}> 51892</div>
<div className={[s.div32,s.t].join(' ')}> -----------</div>
<div data-hoist='51831' data-machine='2A554 стол Здача' className={[s.div33,s.t,'t'].join(' ')}> 51831</div>
<div data-hoist='51891'data-machine='клепка' className={[s.div34,s.t,'t'].join(' ')}> 51891</div>
<div data-hoist='51834'data-machine='стена-резерв' className={[s.div35,s.t,'t'].join(' ')}> 51834</div>
<div data-hoist='51771'data-machine='стенд-стена' className={[s.div36,s.t,'t'].join(' ')}> 51771</div>
<div className={[s.div37,s.cart].join(' ')} data-carts="051975"> Tелега № 051975</div>
<div className={[s.div38,s.t].join(' ')}> ВС-300</div>
<div className={[s.div39,s.t].join(' ')}> ВДМ</div>
<div className={[s.div44,s.cart].join(' ')} data-carts="052087"> Телега <br/> 052087	</div>
<div data-hoist='51843'data-machine='бурт-балки-середина' className={[s.div41,s.t,'t'].join(' ')}> 51843	</div>
<div data-hoist='51798'data-machine='2A554-салидоломес' className={[s.div42,s.t,'t'].join(' ')}> 51798</div>
<div data-hoist='51888'data-machine='Подпятник-середина' className={[s.div43,s.t,'t'].join(' ')}>  51888</div>
<div data-hoist='52023'data-machine='сливная яма' className={[s.div40,s.t,'t'].join(' ')}>52023	</div>
<div data-hoist='52939'data-machine='скользуны' className={[s.div45,s.t,'t'].join(' ')}> 52939</div>
<div data-hoist='51795'data-machine='клепка-балка' className={[s.div46,s.t,'t'].join(' ')}> 51795</div>
<div data-hoist='51797'data-machine='Подпятник-стена' className={[s.div47,s.t,'t'].join(' ')}>51797</div>
<div data-monorail="52057" className={[s.div48,s.t,s.monorail].join(' ')}> Монорельс <span>52057</span></div>
<div data-monorail="51779" className={[s.div49,s.t,s.monorail].join(' ')}>Монорельс <span>51779</span></div>
<div data-monorail="51691" className={[s.div50,s.t,s.monorail].join(' ')}>Монорельс <span>51691</span></div>
<div className={[s.div51,s.t].join(' ')}> дорога</div>
<div data-hoist='52045' data-machine='2H55-рембаза' className={[s.div52,s.t,'t'].join(' ')}> 52045</div>
<div data-hoist='51800' data-machine='Савелово' className={[s.div53,s.t,'t'].join(' ')}> 51800	</div>
<div data-hoist='51880' data-machine='Скосы' className={[s.div54,s.t,'t'].join(' ')}> 51880</div>
<div data-hoist='51879' data-machine='K0501-подпятник' className={[s.div55,s.t,'t'].join(' ')}>51879</div>
<div className={[s.div56,s.cart].join(' ')}data-carts="cart"> Телега</div>
<div data-hoist='52046' data-machine='возле ГРП' className={[s.div57,s.t,'t'].join(' ')}> №52046</div>
<div data-monorail="51763" className={[s.div58,s.t,s.monorail].join(' ')}>Монорельс <span> №51763</span>	</div>
<div  data-monorail="51690" className={[s.div59,s.t,s.monorail].join(' ')}>Монорельс <span> №51690</span>	</div>

<input value={text} type="text" className={s.inp} onChange={(e)=>setText( e.target.value)}/>
<button className={s.btn} onClick={btn}>Жми</button>
 <h3 className={s.h3}>Малярка</h3>
<div data-hoist='52805' data-machine='тел возле крана'  className={[s.div60,s.t,s.mal,'t'].join(' ')}> 52805</div>
<div data-hoist='52806' data-machine='комната строполей' className={[s.div61,s.t,s.mal,'t'].join(' ')}> 52806</div>
<div data-hoist='52019' data-machine='выход с к' className={[s.div62,s.t,s.ma,'t'].join(' ')}>52019</div>
<div data-hoist='52020' data-machine='погрузка телеги' className={[s.div63,s.t,s.mal,'t'].join(' ')}> 52020</div>

</div> 

</> 
)
}
