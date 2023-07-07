import React,{useMemo} from 'react'
import Image from 'next/image'
import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import CartItem from '@/components/CartItem'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
   

   const {cartItems}= useSelector((state) => state.cart);
   const subTotal = useMemo( () => {
            return cartItems.reduce((total,val) => total + val.attributes.price,0)
   },[cartItems] );


  return (
    <div>

      <Wrapper>
        {cartItems.length > 0 && (
                    <>
                    {/* HEADING START */}
                    <div className='text-center mx-auto max-w-[800px] mt-8 md:mt-12'>
                     <div className='text-[24px] md:text-[34px] mb-5 font-semibold leading-tight'>Shoping Cart</div>
                   </div>
         
                 {/* HEADING END */}
         
                 {/* CART CONTECT START */}
                 <div className='flex flex-col lg:flex-row gap-12 py-10'>
                   {/* Left div */}
                     <div className='flex-[2]'>
                         <div className='text-lg font-bold'> 
                         Cart Items </div>

                         {cartItems.map((item) => (
                           <CartItem key={item.id} data={item}/>
                         ))}
         
                          
                           
                     </div>
         
                     {/* Right div */}
         
                     <div className='flex-[1]' >
                         <div className='text-lg font-bold'>Summary    </div>
         
                         <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
         
                             <div className='flex justify-between'>
                                 <div className='uppercase text-sm font-medium text-black'>
                                   Subtotal
                                 </div>
         
                                 <div className='text-sm text-black  font-medium'> &#8377; {subTotal}</div>
                             </div>
         
                             <div className='flex justify-between my-5 '>
                                 <div className='uppercase text-md md:text-sm font-medium text-black'>
                                 Estimated Delivery & Handling
                                 </div>
         
                                 <div className='text-sm text-black  font-medium'> Free</div>
                             </div>
         
                             <div className='flex justify-between my-5 border-t-2 border-b-2 py-5'>
                                 <div className='uppercase text-md md:text-sm font-medium text-black'>
                                  Total
                                 </div>
         
                                 <div className='text-sm text-black  font-medium'> &#8377;{subTotal}</div>
                             </div>
               
         
         
                             <div className='text-sm md:text-md py-5  mt-5'>
                             The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.
                             </div>
                             
                             
                             
                        </div>
         
                        <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75  ' 
                        >
                         Checkout
    
                        </button>
                           
                         
                         
                      
                     </div>
                 </div>
                   </>
        )}
        {/* EMPTY SCREEN */}
        { cartItems.length ==0 && (
        <div className='flex-[2] flex flex-col items-center pb-[50px] md:mt-8'>
            <Image src="/empty-cart.jpg" width={300} height={300} className="w-[300px] md:w-[400px]"/>
            <span className='text-xl font-bold'>
                Your cart is empty
            </span>
            <span className='text-center mt-4'>
                Looks like you have not added anything in our cart.
                <br/>
                Go ahead and explore top categories.
            </span>
            <Link href="/" className='cursor-pointer bg-black text-white px-8 py-4 rounded-full  text-lg font-medium transition-transform active:scale-95 hover:bg-black/[0.5] mb-3 mt-8'>Continue Shopping</Link>
        </div>
)}

      </Wrapper>
      
    </div>
  )
}

export default Cart
