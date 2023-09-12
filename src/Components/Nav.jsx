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
   <header className='absolute z-10 w-full py-8 padding-x'>
    <nav className='flex items-center justify-between max-container'>
        <a href="/">
            <img src={headerLogo} alt="logo" width={130}  height={29}/>
        </a>
        <ul className='flex items-center justify-center flex-1 gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href}
                    className='p-2 text-lg leading-normal text-red-400 rounded-md font-montserrat border-1 border-b-gray-400 hover:text-black'> {item.label}</a>
                </li>
            ))}
        </ul>
        <div id='hamburger-menu'> <img src={hamburger} alt="hamburger" width={25} height={25} className='hidden max-lg:block'  onClick={toggleDropdown}/>
        <ul id="dropdown" className="absolute hidden py-5 mt-4 bg-white rounded-lg text-slate-gray font-montserrat">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className='block gap-5 px-4 py-3 text-red-400 border-4 rounded-md border-b-gray-400 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-300 to-gray-500 hover:text-black'>{item.label}</a>
          </li>
        ))}
      </ul></div>
    </nav>
   </header>
  )
}

export default Nav