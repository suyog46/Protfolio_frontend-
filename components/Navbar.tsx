'use client';
import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import Contact from './Contact'
function Navbar() {
    
  const [isScrolled, setIsScrolled] = useState(false);
const navigation = [

    { name: 'Home', href: '/', current: true },
    { name: 'About Me', href: '#aboutme', current: false },
    // { name: 'Services', href: '#', current: false },
    { name: 'Work', href: '#project', current: false },
  ]
  
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
  }
  

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
//     var navLinks = document.querySelectorAll('.navbar-expand-lg .navbar-nav .nav-link');
// window.addEventListener('scroll', function () {
//     let sc = scrollY;
 
//     if (sc > 50) {
//         document.querySelector('header').style.backgroundColor = 'white'

//         navLinks.forEach(function (link) {
//             link.style.color = 'black';
//         });
//     }
//     else{
//         document.querySelector('header').style.backgroundColor = 'transparent'
//         navLinks.forEach(function (link) {
//             link.style.color = 'white';
//         })
//     };
// })
  return (
    <>
     <Disclosure as="nav" className={`bg-transparent transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}  `}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden z-[99]" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1  items-center justify-center sm:items-7 tretch sm:justify-between">
            <div className="flex flex-shrink-0  items-center  me-12">
             <h1 className='text-gray-300 hover:text-white text-3xl font-bold'>It'sSuyog</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-32">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-emerald-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-lg font-medium',
                    )}
                  >
                    {item.name}
                  </a>
             ))}
           <Contact/>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </>
  )
}

export default Navbar