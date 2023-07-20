import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { GrView } from 'react-icons/gr';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { FcApprove } from 'react-icons/fc';
import { FcDisapprove } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { orderdProduct } from '../redux/productSlide';
import Pagination from './pagination';
import { toast } from 'react-hot-toast';
import MyModal from './modal/modal';
import loading from '../assest/loading.gif';

const envFile = process.env.REACT_APP_SERVER_DOMIN || 'http://localhost:8000';

const CTable = ({ data, handleDelete, handleApprove, status }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className='w-full pl-[100px] pt-[20px]'>
      <div>
        <div className='w-8 h-8'>
          <Link to={status ? '/' : '/dashboard'}>
            <BiArrowBack className='h-6 w-6 text-gray-800' />
          </Link>
        </div>
        <h1 className='text-center mr-40 mb-10 font-bold text-3xl  '>
          {status ? 'Your Product Status' : 'Ordered Products Detail'}
        </h1>
      </div>
      <div className='overflow-x-auto'>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='text-left w-[120px]'>Name</th>
              <th className='text-left w-[120px]'>Email</th>
              <th className='text-left w-[190px]'>Phone Number</th>
              <th className='text-left w-[120px]'>City</th>
              <th className='text-left w-[190px]'>House Address</th>
              <th className='text-left w-[120px]'>ZIP</th>
              <th className='text-left w-[120px]'>State</th>
              <th className='text-left w-[120px]'>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td className='text-left w-[140px]'>
                      {ele.fname} {ele.lname}
                    </td>
                    <td className='text-left w-[120px]'>
                      <a href={`mailto:${ele.email}`}>{ele.email}</a>
                    </td>
                    <td className='text-left w-[190px]'>{ele.phone}</td>
                    <td className='text-left w-[120px]'>{ele.city}</td>
                    <td className='text-left w-[190px]'>{ele.houseadd}</td>
                    <td className='text-left w-[120px]'>{ele.zip}</td>
                    <td className='text-left w-[120px]'>{ele.state}</td>
                    <td className='text-left w-full flex gap-[5px]'>
                      {!ele.approved ? (
                        <>
                          <button className='bg-green-700 p-2 border-gray-300 rounded-md text-white'>
                            <MyModal data={ele} />
                          </button>
                          {!status && (
                            <>
                              {' '}
                              <button
                                className='bg-green-700 p-2 border-gray-300 rounded-md text-white'
                                onClick={() => handleApprove(ele._id)}
                              >
                                <TiTick />
                              </button>
                              <button
                                className='bg-red-700 p-2 border border-gray-300 rounded-md text-white'
                                onClick={() => handleDelete(ele._id)}
                              >
                                <RxCross2 />
                              </button>{' '}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <button
                            className='bg-green-300 p-2 border border-gray-300 rounded-md text-white'
                            onClick={() => toast('this order is approved ')}
                          >
                            <FcApprove />
                          </button>
                          <button className='bg-green-700 p-2 border-gray-300 rounded-md text-white'>
                            <MyModal data={ele} />
                          </button>
                          {!status && (
                            <button
                              className='bg-red-700 p-2 border border-gray-300 rounded-md text-white'
                              onClick={() => handleDelete(ele._id)}
                            >
                              <FcDisapprove />
                            </button>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div className='flex justify-center items-center h-full w-full'>
                    <img src={loading} alt='Loading...' className='w-20 h-20' />
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className='float-right mr-[10%]'>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CTable;
