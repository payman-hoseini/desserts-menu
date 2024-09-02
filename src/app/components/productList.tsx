'use client'
import { useEffect, useState } from "react";
import { Product } from "../Contract";
import { addToCart, removeFromCart, selectList, updateList } from "./store/cartSlice";
import { useAppDispatch } from "./store/hooks";
import { useSelector } from "react-redux";

export default function ProductList({product} : {product : Product}){
    const dispatch = useAppDispatch()
    const [win , setWin] = useState(0)
    function addtoCart(){
        dispatch(addToCart(product))
    }

    function removefromCart(){
        dispatch(removeFromCart(product))
    }

    useEffect (()=>{
        dispatch(updateList(product))
        setWin(window.innerWidth)
        const handleResize = () => {
            setWin(window.innerWidth);
          };
      
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[])

    const list = useSelector(selectList)
    let productCount = list.find(p => {
        if(p.product.name == product.name){
            if(p.count>0){
                return p.count
            }
        }
    })
    return (
        <>
        {/* koli */}
                {/* mahsol */}
                <div>
                    <div className="relative">
                        <img src={(win < 768 ) ? product.image.mobile : (win>=768 && win<1024) ? product.image.tablet : product.image.desktop} alt={product.name} className={`rounded-lg ${productCount?.count == undefined ? '' : 'border-[3px] border-Red'}`}/>
                        {/*  */}
                        {
                            (productCount?.count == undefined) ?
                            <button onClick={addtoCart} className="bg-white lg:left-[25%] md:left-[10%]  left-[25%] flex items-center  px-5 py-2 mx-auto rounded-full border border-Rose-500 absolute  -bottom-5  hover:text-Red hover:border-Red">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clipPath="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
                                <span className="text-sm md:text-xs lg:text-sm font-semibold ml-2">Add to Cart</span>
                            </button>
                            :
                            <div className="bg-Red lg:left-[25%] md:left-[5%] left-[25%] flex items-center space-x-10  px-2 py-2 mx-auto rounded-full border border-Red absolute -bottom-5">
                                <button onClick={removefromCart} className="border px-[4px] py-[8px] rounded-full hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="10" height="2" fill="none" viewBox="0 0 10 2"><path className="hover:fill-Red" fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
                                </button>
                                <p className="text-white text-sm font-semibold">{productCount?.count}</p>
                                <button onClick={addtoCart} className="border p-1 rounded-full hover:bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="10" height="10" fill="none" viewBox="0 0 10 10"><path className="hover:fill-Red" fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                                </button>
                            </div>
                        }

                    </div>
                    <div className="font-RedHat mt-8">
                        <p className="text-sm text-Rose-400">{product.category}</p>
                        <p className="font-semibold text-Rose-5900">{product.name}</p>
                        <p className="font-semibold text-Red">${product.price}</p>
                    </div>
                </div>
        </>
    )
}