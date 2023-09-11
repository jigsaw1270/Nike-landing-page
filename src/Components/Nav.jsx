import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'



const Nav = () => {


    function toggleDropdown() {
        const dropdown = document.getElementById('dropdown');
        dropdown.classList.toggle('hidden');
      }
      document.addEventListener('DOMContentLoaded', () => {
        const hamburgerImage = document.querySelector('#hamburger-menu img');
        hamburgerImage.addEventListener('click', toggleDropdown);
      });

  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
        <a href="/">
            <img src={headerLogo} alt="logo" width={130}  height={29}/>
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href}
                    className='font-montserrat leading-normal text-lg text-red-400 border-1 p-2 rounded-md border-b-gray-400 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-300 to-gray-500 '> {item.label}</a>
                </li>
            ))}
        </ul>
        <div id='hamburger-menu'> <img src={hamburger} alt="hamburger" width={25} height={25} className='hidden max-lg:block'  onClick={toggleDropdown}/>
        <ul id="dropdown" className="hidden  absolute mt-4 bg-white  rounded-lg py-5 text-slate-gray font-montserrat">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className='block px-4 py-3  border-4 border-b-gray-400 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-300 to-gray-500  text-red-400 rounded-md gap-5'>{item.label}</a>
          </li>
        ))}
      </ul></div>
    </nav>
   </header>
  )
}

export default Nav