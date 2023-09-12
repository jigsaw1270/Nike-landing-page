import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"


const SpecialOffer = () => {
  return (
   <section className="flex items-center gap-10 max-xl:flex-col-reverse max-container">
    <div className="flex-1 ">
      <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
    </div>
    <div className="flex flex-col flex-1">
    <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg"> 
        <span className="text-coral-red">Special</span> 
        <span className="text-coral-red"> Offer</span> </h2>
        <p className="mt-4 lg:max-w-lg info-text">Step into style and discover the perfect pair of shoes that suits your lifestyle and personality. Browse our exclusive collection today and make a statement with your footwear. Experience the essence of <span className="font-extrabold text-coral-red">Nike</span> where fashion meets comfort. <br />
        Stay active and on-trend with our athletic footwear. Whether you're hitting the gym or going for a morning run, we have the perfect sneakers to support your active lifestyle.</p>

        <div className="flex flex-wrap gap-4 mt-11">
        <Button  label="Shop now" iconURL={arrowRight} ></Button>
        <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"></Button>
        </div>
        </div>
   </section>
  )
}

export default SpecialOffer