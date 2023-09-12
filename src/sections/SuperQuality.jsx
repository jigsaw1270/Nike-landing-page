import Button from "../Components/Button"
import { shoe8 } from "../assets/images"



const SuperQuality = () => {
  return (
    <section id="about-us" className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container">
      <div className="flex flex-col flex-1">
   
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg"> We Provide Your <br />
        <span className="text-coral-red">Super</span> 
        <span className="text-coral-red"> Quality</span> Shoes</h2>
        <p className="mt-4 lg:max-w-lg info-text">Elevate your look with our exquisite heels, designed to add a touch of sophistication to any outfit. Choose from a variety of heights and styles to match your personality. <br />
        Stay active and on-trend with our athletic footwear. Whether you're hitting the gym or going for a morning run, we have the perfect sneakers to support your active lifestyle.</p>

        <div className="mt-11">
        <Button  label="View details" ></Button>
        </div>
        
      </div>

      <div>
        <img className="flex items-center justify-center flex-1 " src={shoe8} alt="shoe8" width={570}  height={522}/>
      </div>
    </section>
  )
}

export default SuperQuality