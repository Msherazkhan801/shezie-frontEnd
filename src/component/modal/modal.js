import React, { useState } from 'react';
import Modal from 'react-modal';
import {GrView} from 'react-icons/gr'
import './modal.css'
import ProductCard from '../card/Card';
const MyModal = ({data ,variant}) => {
    const [isModalOpen, setIsModalOpen]=useState(false)
  console.log(data,"data");
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className='w-full'>
       <div className=".text-white">
        <GrView onClick={openModal} />
      </div>
        <Modal
          isOpen={isModalOpen}
          className="modal"
          overlayClassName="modal-overlay"
          contentLabel="Example Modal"
        >
          <div className="p-4">
            <h1 className='text-center font-bold'><span >Customer Name:</span><br/>{data.fname}{data.lname}</h1>
            <div className='flex flex-wrap gap-[10px]' >
            {data.cartItem.map((ele,i)=>{
                return(
          <ProductCard data={ele}/>
          
          )
        })
    }
    </div>
          </div>
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-3 p-1 text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </Modal>
      </div>
    );
  };
  export default MyModal