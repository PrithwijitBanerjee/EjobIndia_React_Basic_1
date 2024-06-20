
import { useState } from 'react';
import PropsChild from './PropsChild';

const PropsFunctional = () => {
  const [data1, setData1] = useState('hello world');
  const [data2] = useState('welcome to EjobIndia');  
  return (
    <div>
        <PropsChild dt={data1} dt2={data2}/>
        <button onClick={() => setData1('John Doe')}>update data 2</button>
    </div>
  )
}

export default PropsFunctional