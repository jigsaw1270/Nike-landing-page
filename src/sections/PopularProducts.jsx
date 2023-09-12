import PopularProductCard from "../Components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
   <section id="products" className="max-container max-sm:mt-12">
    <div className="flex flex-col justify-start gap-5">
    <h2 className="text-4xl font-bold font-palanquin">Our  <span className="text-coral-red">Popular</span> products</h2>
    <p className="mt-2 lg:max-w-lg font-montserrat text-slate-500"> Elevate your footwear game with our handpicked selection of the season's trendiest and most sought-after shoes. At <span className="font-bold text-coral-red">Nike</span> , we understand that the right pair of shoes can make a world of difference in your overall style and comfort. </p>

    </div>
    <div className="grid grid-cols-1 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-14">
      {products.map((product)=>(
        <PopularProductCard key={product.name} {...product}/>
      ))}
    </div>
   </section>
  )
}

export default PopularProducts