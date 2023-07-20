import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/V.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill,BsFillBellFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import SearchItem from "./search/SearchItem";


const adminEmail=process.env.REACT_APP_ADMIN_EMAIL||'sherazkhan5492@admin.com'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState('');
  const userData = useSelector((state) => state.user);
  const orderData = useSelector((state) => state.product.orderdProducts);

  const dispatch = useDispatch();

  const myOrderStatusArray = orderData.filter((el) => el.email === userData.email);


  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };
  const productData = useSelector((state) => state.product.productList);
  const cartItemNumber = useSelector((state)=>state.product.cartItem)
  
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white" >
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" alt=""/>
            {/* <h1 className="h-full" style={{fontFamily:'cursive'}}> VegiHouse</h1> */}
          </div>
        </Link>
         <div className="max-w-[246px] w-[228px] h-[41px]">
          {/* <SearchItem search={search} setSearch={setSearch} /> */}
         </div>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={`menu/${productData[0]?._id}`}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"order-status"}>
              <BsFillBellFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {myOrderStatusArray?.length}
              </div>
            </Link>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image ===''?  'https://play.google.com/store/apps/details?id=cute.love.dp&hl=en_US':userData.image } className="h-full w-full" alt="" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === adminEmail && (
                  <Link
                    to={"dashboard"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                   Dashboard
                  </Link>
                )}
                {userData.email === adminEmail && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    New product
                  </Link>
                )}
                {userData.email !== adminEmail && (
                  <Link
                    to={"order-status"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Order Status
                  </Link>
                )}

                {userData.email ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName}){" "}
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link
                    to={"menu/63f0fdbb3bcc2f97fa53d25d"}
                    className="px-2 py-1"
                  >
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
