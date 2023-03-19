import React from 'react';
import work from'../CssModules/r.module.css'
interface EmployeeProps {
  work1: () => string;
  work2: () => string;
}

const Employee: React.FC<EmployeeProps> = ({ work1, work2 }) => {
  return (
    <div className={work.wrap} >
      <p className={work.work1}>{work1()}</p>
      <p className={work.work2}>{work2()}</p>
    </div>
  );
};

export default Employee;
