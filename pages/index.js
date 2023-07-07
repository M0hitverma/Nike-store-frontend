import Herobanner from "@/components/Herobanner";
import Wrapper from "@/components/Wrapper";
import ProductCart from "@/components/ProductCart";
import { fetchDataFromApi } from "@/utils/api";



export default function Home({products}) { 
  
    return <main >

        <Herobanner/>
       
        <Wrapper>
                {/*Heading start*/}
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">

            <div className="text-[40px] md:text-[70px] mb-1 font-extrabold leading-tight uppercase font-urbanist tracking-tight">
            Never before
            <br/>
            Forever after
            </div>
            
            <div className="text-md md:text-l font-medium text-black/[0.8]">Match day or any day, show up for your team in style with 2023 Nike National Team Collection</div>
          
          </div>
           {/*Heading end*/}
            {/*Product Cart start*/}
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
             {products?.data?.map((product)=>(
                <ProductCart key={product?.id} data={product}/>
             ))}
             {/* <ProductCart/>
             <ProductCart/>
             <ProductCart/>
             <ProductCart/>
             <ProductCart/>

              <ProductCart/>
              <ProductCart/>
              <ProductCart/>
              <ProductCart/>
              <ProductCart/> */}
           </div>
            {/*Product Cart end*/}
        </Wrapper>
         
        </main>;
}

export async function getStaticProps() {
   
  const products = await fetchDataFromApi('/api/products?populate=*');

  return {
    props:{products}
  }

}