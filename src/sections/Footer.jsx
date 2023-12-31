import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
import Marquee from "react-fast-marquee";


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-center justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
        
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for new tern at nearest Nike shoe . Find your perfect size in strore . Get rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map((icon)=>(
                <div key={icon.src} className="flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full hover:bg-white"><img src={icon.src} alt={icon.alt} width={24} height={24} /> </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
        {
          footerLinks.map((section)=>(
            <div key={section}>
            <h4 className="text-2xl font-medium leading-normal text-white font-montserrat">{section.title}</h4>
            <ul>
              {section.links.map((link)=>(
                <li key={link.name} className="mt-3 text-base leading-normal cursor-pointer font-montserrat text-slate-gray hover:text-white">
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>

            </div>
          ))
        }

        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
      <div className="flex items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat">
        <img src={copyrightSign} alt="copyright" width={20} height={20} className="m-0 rounded-full" />
        <p>Copyright . All rights reserved .</p>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>

      </div>
    </footer>
  )
}

export default Footer