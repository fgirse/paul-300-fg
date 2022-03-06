/* eslint-disable prettier/prettier */
import React from 'react'
import LogoNeu from '../data/SvgLogoNeu'
import { PhoneIcon } from 'heroicons-react'
import { AtSymbolIcon } from 'heroicons-react'


const InfoBar = () => {
  return (
    <>
      <section className="bg-slate-900 h-auto border-b-2 border-slate-100 md:flex md:flex-row md:bg-amber-800 md:py-1 md:mx-auto md:justify-around md:items-end md:w-full">
        <div className=" w-full flex flex-col md:flex-row md:items-baseline md:justify-start md:gap-x-5">
          <div className=" mt-4 flex flex-col items-center justify-start w-12/12">
            <LogoNeu className=""></LogoNeu>
          </div>

          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <p className="font-sans font-bold text-lg text-gray-100 md:text-sm lg:text-sm xl:text-sm 2xl:text-lg ">
              0761 38386747
            </p>
          </div>

         
          <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
</svg>
            
            <p className=" font-sans font-bold text-lg  text-gray-100 md:text-sm lg:text-sm xl:text-sm 2xl:text-lg">
              rettungsanker-freiburg@gmx.de
            </p>
          </div>
        </div>

        <div className="hidden md:block md:mr-10">
          <div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default InfoBar