import React, { FC } from 'react'
import s from'../CssModules/Employee.module.css'
type Props = {
  work1: () => string,
  work2: () => string
}

const Employee: FC<Props> = ({ work1, work2 }) => {
  console.log(work1());
  
    return (
    <div className={s.wrapper}><div className={s.work1}>{work1()}</div >
    <div>{work2()}</div>
    
    <div>1</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
  )
}

export default Employee