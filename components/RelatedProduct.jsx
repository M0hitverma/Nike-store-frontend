import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCart from './ProductCart';
import { AiOutlineLeft } from 'react-icons/ai';
const RelatedProduct = ({products}) => {
   
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



  return (
    <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
        <div className='text-2xl font-bold mb-5'>You Might Also Like</div>
      <Carousel  responsive={responsive} itemClass="px-5 hover:scale-110 transition easy-in-out delay-50  duration-300" 
      
      customLeftArrow={
        <div className="absolute right-[30px] md:right-[53px] top-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px]  bg-black/[0.5] hover:bg-black/[0.8] z-10 flex items-center justify-center cursor-pointer hover: opacity-90 rounded-full">
          <AiOutlineLeft className="text-sm md:text-lg text-white"  />
        </div>
      }
      customRightArrow={
        <div  className="absolute right-0 top-0
        w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black/[0.5]  hover:bg-black/[0.8]  z-10 flex items-center justify-center cursor-pointer hover: opacity-9 rounded-full">
          <AiOutlineLeft className=" rotate-180 text-sm md:text-lg text-white "  />
        </div>
      }
      >

       {products?.data?.map((product)=>(
        <ProductCart key={product.id} data={product}/>
       ))}
      </Carousel>
    </div>
  )
}

export default RelatedProduct
