import React from 'react'

export default function First() {
  let c: NodeListOf<HTMLElement>=document.querySelectorAll('[data-cart]')
for (let i = 0; i <c.length ; i++) {
if (c[i].dataset.cart=='pd') {
  c[i].style.background='red'
  c[i].textContent="123098ыыыыыыыыыыыыыыыы";

}
  
}

  return (
    <div data-cart='pd' className='p'>First</div>
  )
}
