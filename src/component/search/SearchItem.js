import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../../redux/productSlide'
const SearchItem = ({search,setSearch}) => {
    const dispatch = useDispatch()
    const handleChange=(e)=>{
     setSearch(e.target.value)
    dispatch(searchProduct(search))
    }
  return (
    <div className='w-full h-[41px]'>
        <input type='text' placeholder='Search your fav Items' value={search} onChange={handleChange} className="w-full h-[41px] border-[1px] border-black rounded-[30px] mx-20 px-[25px]"/>
    </div>
  )
}

export default SearchItem