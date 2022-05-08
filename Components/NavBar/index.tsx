import React, { useState } from 'react'

const index : React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
   
  const changeTransparency = () => {
    if (window.scrollY >= 40) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  }
  
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeTransparency)
  } 

  return (
    <nav style={{backgroundColor: isTransparent ? 'transparent' : 'white'}} className="border-gray-200 px-2 sm:px-4 py-2.5 z-20 fixed top-0 w-full navBar">
      {/* Help me out here, I need the navbar to be correctly displayed in tablet mode. Thanks! */}
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <img src="./Images/logo.svg" className="ml-5 h-40 w-40 -my-10 -mx-10" alt="ECC's Logo" />
        </div>
        <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <img src="./Images/Hamburger.svg" alt="" className="h-8 w-8"/>
        </button>
        <div className="hidden w-full md:block md:w-auto mt-5">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="#" className="transition-all block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-[#0B63C5] md:p-0 dark:text-black md:dark:hover:text-[#0B63C5] dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Complaints</a>
            </li>
            <li>
              <a href="#" className="transition-all block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0B63C5] md:p-0 dark:text-black md:dark:hover:text-[#0B63C5] dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Scam Statistics</a>
            </li>
            <li>
              <a href="#" className="transition-all block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-[#0B63C5] md:p-0 dark:text-black md:dark:hover:text-[#0B63C5] dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">For Law Practitioners</a>
            </li>
            <li>
              <a href="#" className="transition-all block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-[#0B63C5] md:p-0 dark:text-black md:dark:hover:text-[#0B63C5] dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">FAQs</a>
            </li>
            <li>
              <a href="#"><img src="./Images/search.svg" alt="" className="-mt-1 block pr-4 pl-3 hover:text-blue-600" /></a>
            </li>
            <li>
              <button className="bg-[#0B63C5] -mt-[14px] rounded-[10px]">
                <img src="./Images/fac.svg" alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default index