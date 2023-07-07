import React from 'react'
import {ImMobile} from 'react-icons/im'
import {RiMessage2Fill} from 'react-icons/ri'
import {BiMailSend} from 'react-icons/bi'
const contact = () => {
  return (
    <div>  

     <div className='w-[85vw] m-auto [word-spacing:-1px] mt-20'>
        <div className='w-full my-8 border-b-2 m-auto'>
            <div className='uppercase text-2xl font-bold'>Quick Assists</div>
            <div className=' font-normal mb-3'> Answers to our most frequently asked questions are just one click away.</div>
            </div>

            <div className='grid   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  justify-between leading-tight m-auto gap-4'>
                <div className=' mb-12 '>
                    <div className=' font-semibold  text-lg'>DISPATCH & DELIVERY</div>
                    <div div className='text-md  text-black leading-7 font-medium  '>
                    <div >What are Nike's delivery options?</div>
                    <div>Can my Nike order be dispatched internationally?</div>
                    <div> How do I get free delivery on Nike orders?</div>
                    </div>
                </div>
                <div className=' mb-12 '>
                    <div className=' font-semibold  text-lg'>RETURNS</div>
                    <div div className='text-md  text-black leading-7 font-medium'>
                    <div >How do I return my Nike order?</div>
                    <div>What is Nike's returns policy?</div>
                    <div> Where is my refund?</div>
                    </div>
                </div>
                <div className=' mb-12 '>
                    <div className=' font-semibold  text-lg'>NIKE MEMBERSHIP</div>
                    <div div className='text-md  text-black leading-7 font-medium'>
                    <div >What is Nike Membership?</div>
                    <div>How do I become a Nike Member?
                </div>
                    <div>How do I get the most out of NRC and NTC?</div>
                    </div>
                </div>
                <div className=' mb-12 '>
                    <div className=' font-semibold  text-lg'>ORDERS</div>
                    <div div className='text-md  text-black leading-7 font-medium'>
                    <div >Where is my Nike order?</div>
                    <div>Can I cancel or change my Nike order?</div>
                    <div>What payment options can I use on Nike orders?</div>
                    </div>
                </div>
                <div className=' mb-12 '>
                    <div className=' font-semibold  text-lg'>PRODUCT INFO</div>
                    <div div className='text-md  text-black leading-7 font-medium'>
                    <div >How do I get Nike’s newest sneaker releases?</div>
                    <div>How do I find the right size and fit?</div>
                    <div>What is the Nike By You personalisation policy?</div>
                    <div>Do Nike shoes have a warranty?</div>
                    </div>
                </div>
                <div className=' mb-12 '>
                    <div className=' font-semibold  text-lg'>CORPORATE</div>
                    <div div className='text-md  text-black leading-7 font-medium'>
                    <div >Where can I learn more about Nike, Inc.?</div>
                    <div>Where is the Nike store closest to me?</div>
                    
                    </div>
                </div>


            </div>
       
            </div>







        {/* CONTACT US START */}
        <div  className='w-[80vw] m-auto mb-20 [word-spacing:-1px]'>
        <div className=' w-full my-8  py-3 border-b-2 m-auto'>
        <div className=' text-2xl font-bold'> Contact Us </div>
        </div>
        <div className='flex  flex-col md:flex-row m-auto w-[80vw] px-5 justify-between leading-tight'>

            <div className='flex flex-col p-2 md:w-[25vw]'>
                <ImMobile className="m-auto w-14 h-14 mb-9" />
                <div className='text-lg font-semibold text-center mb-2'>
                000 800 919 0566</div>
                <div className=' text-md font-medium text-center mb-2 text-black/[0.8] '>
                Products & Orders: 24 hours a day, 7 days a week
                </div>
                <div className='text-md font-medium text-center text-black/[0.8]'>
                Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </div>
            </div>

             <div className='flex flex-col p-2 md:w-[25vw]'>
                <RiMessage2Fill className="m-auto w-14 h-14 mb-9 mt-0" />
                <div className='text-lg font-medium text-center mb-2'>
                    24 hours a day
                    </div>
                <div className=' text-md font-medium text-center mb-2 text-black/[0.8]'>
                  7 days a week
                </div>
                
            </div>

            <div className='flex flex-col p-2 md:w-[25vw]'>
                <BiMailSend className="m-auto w-14 h-14 mb-9 mt-0" />
                <div className='text-lg font-medium text-center mb-2 text-black'>
                We'll reply within
                   </div>
                <div className=' text-md font-medium text-center mb-2 text-black/[0.8]'>
                five business days
                </div>
                
            </div>
            
        </div>
        </div>
        {/* CONTACT US END */}
    </div>
  )
}

export default contact
