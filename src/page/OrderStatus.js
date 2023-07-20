import { Button } from '@material-tailwind/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CTable from '../component/Table';


const OrderStatus = () => {
    const navigate=useNavigate()
  const productData = useSelector((state) => state.product.orderdProducts);
const userData = useSelector((state) => state.user);

console.log(productData,"productData");

    const myOrderStatusArray = productData.filter((el) => el.email === userData.email);
console.log(myOrderStatusArray.approved);
const handleLogin=()=>{
    navigate('/login')
}

  return (
    <div>
        {userData.email && myOrderStatusArray? (
       <>
       <CTable data={myOrderStatusArray} status={true}/>
       <h2 className=' text-center p-10 font-bold  mx-auto'><span className='text-red-800'>Note:</span><span className='text-black-500'>Your status is {myOrderStatusArray[0]?.approved  ? 'Approved':'Cancle'} will let you know on SMS</span></h2>
        <Button className='w-[20%] ml-[40%] text-center ' onClick={()=>navigate('/contact')}>Contact Us</Button>
       </>
        
     ):(
      <>
      <h1 className='text-center p-10 font-bold'>Login First</h1>
      <Button className='text-center p-5 font-bold flex justify-content-center mx-auto  border ' onClick={handleLogin}>Login</Button>
      </>)}
    </div>
  )
}

export default OrderStatus