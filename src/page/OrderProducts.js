import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CTable from '../component/Table';
import {
  approvedProduct,
  deleteorderItem,
  orderdProduct,
} from '../redux/productSlide';

const envFile = process.env.REACT_APP_SERVER_DOMIN || 'http://localhost:8000';

const OrderProducts = () => {

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.orderdProducts);

  console.log("productData",productData);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(`${envFile}/order-products`);
  //     const resData = await res.json();
  //     dispatch(orderdProduct(resData));
  //   })();
  // }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`${envFile}/order-products/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      dispatch(deleteorderItem(id));
    }
  };

  // const handleApprove = async (id) => {
  //   const res = await fetch(`${envFile}/order-products/${id}/aprove`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ approved: true }),
  //   });

  //   if (res.ok) {
  //     const updatedOrder = await res.json();

  //     const updatedData = productData.map((ele) => {
  //       if (ele._id === updatedOrder._id) {
  //         return { ...ele, approved: updatedOrder.approved };
  //       }
  //       return ele;
  //     });
  //     console.log(updatedData,"<<update");

  //     if (Array.isArray(productData)) {
  //       console.log("shshshs");
  //       dispatch(orderdProduct(updatedData));
  //     }
  //   }
  // };

  const handleApprove = async (id) => {
    console.log(id,"id");
    const res = await fetch(`${envFile}/order-products/${id}/aprove`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ approved: true }),
    });
    if (res.ok) {
      const updatedOrder = await res.json();
      console.log(updatedOrder,"<<<latest");
      // setApprovedItems([...approvedItems, id]);
      // const updatedData = productData.map((ele) =>
      //   ele._id === updatedOrder._id ? updatedOrder : ele
      // );
      dispatch(approvedProduct(updatedOrder));
    }
  };
  return (
    <div>
      <CTable
        data={productData}
        handleDelete={handleDelete}
        handleApprove={handleApprove}
      />
    </div>
  );
};

export default OrderProducts;
