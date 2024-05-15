'use client'
import React from 'react';
import 'animate.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';



  


      const products = [
      {
        id: 1,
        name: 'Green short sleeve shirt mens',
        href: '#',
        description: 'Printed graphic pattern scale design,Japanese inspired light cotton shirt.',
        imageSrc: '/summermen2.jpg',
        imageHover: '/summermen3.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        price: '$13',
      },
      {
        id: 2,
        name: 'Green short sleeve shirt mens',
        href: '#',
        description: 'Printed graphic pattern scale design,Japanese inspired light cotton shirt.',
        imageSrc: '/summermen2.jpg',
        imageHover: '/summermen3.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        price: '$13',
      },
      {
        id: 3,
        name: 'Classic polo shirt in burgundy',
        href: '#',
        description: 'Unisex',
        imageSrc: '/summermen2.jpg',
        imageHover: '/summermen3.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        price: '$13',
      },
      {
        id: 4,
        name: 'Classic polo shirt in burgundy',
        href: '#',
        description: 'Unisex',
        imageSrc: '/summermen4.jpg',
        imageHover: '/summermen5.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        price: '$13',
        imageObjectPosition: 'center',
        imageZoomClass: 'group-hover:scale-150 transition duration-300 ease-in-out transform-gpu origin-center',
      },
      {
        id: 5,
        name: 'Classic polo shirt in burgundy',
        href: '#',
        description: 'Unisex',
        imageSrc: '/summermen4.jpg',
        imageHover: '/summermen5.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        price: '$13',
        imageZoomClass: 'group-hover:scale-110 transition duration-300 ease-in-out transform origin-center',
      },
      {
        id: 6,
        name: 'Classic polo shirt in burgundy',
        href: '#',
        description: 'Unisex',
        imageSrc: '/summermen4.jpg',
        imageHover: '/summermen5.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        price: '$13',
        imageZoomClass: 'group-hover:scale-110 transition duration-300 ease-in-out transform origin-center',
      },
      // More products...
    ]

    export default function SaleMen() {
      return (
        <>
            <Navbar />
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className={`h-full w-full object-cover object-${product.imageObjectPosition} group-hover:opacity-75 group-hover:bg-gray-200 ${product.imageZoomClass}`}
                  />
                  <img
                    src={product.imageHover}
                    alt={product.imageAlt}
                    className={`h-full w-full object-cover object-${product.imageObjectPosition} absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform-gpu origin-center`}
                  />
                </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Footer />
        </>
      )
  }
