'use client'
import React from 'react';
import 'animate.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';



  


      const products = [
      {
        id: 1,
        name: 'Women simple striped and printed casual summer holiday',
        href: '#',
        description: 'Black and White Casual Collar Short Sleeve Woven Fabric Striped Shirt Embellished Non-Stretch Women Clothing.',
        imageSrc: '/womensummer.jpg',
        imageHover: '',
        imageAlt: '',
        price: '$13',
      },
      {
        id: 2,
        name: 'Women simple striped and printed casual summer holiday',
        href: '#',
        description: 'Black and White Casual Collar Short Sleeve Woven Fabric Striped Shirt Embellished Non-Stretch Women Clothing.',
        imageSrc: '/womensummer.jpg',
        imageHover: '',
        imageAlt: '',
        price: '$13',
      },
      {
        id: 3,
        name: 'Women simple striped and printed casual summer holiday',
        href: '#',
        description: 'Black and White Casual Collar Short Sleeve Woven Fabric Striped Shirt Embellished Non-Stretch Women Clothing.',
        imageSrc: '/womensummer.jpg',
        imageHover: '',
        imageAlt: '',
        price: '$13',
      },
      {
        id: 4,
        name: 'Tomboy shirt',
        href: '#',
        description: 'Lond sleeve shirt,chest pocket,classic collar,straight cut length from shoulder 67cm.',
        imageSrc: '/womensummer1.jpg',
        imageHover: '',
        imageAlt: '',
        price: '$13',
        imageObjectPosition: 'center',
        imageZoomClass: 'group-hover:scale-10 transition duration-300 ease-in-out transform-gpu origin-center',
      },
      {
        id: 5,
        name: 'Tomboy shirt',
        href: '#',
        description: 'Lond sleeve shirt,chest pocket,classic collar,straight cut length from shoulder 67cm.',
        imageSrc: '/womensummer1.jpg',
        imageHover: '',
        imageAlt: '',
        price: '$13',
        imageZoomClass: 'group-hover:scale-10 transition duration-300 ease-in-out transform origin-center',
      },
      {
        id: 6,
        name: 'Tomboy shirt',
        href: '#',
        description: 'Lond sleeve shirt,chest pocket,classic collar,straight cut length from shoulder 67cm.',
        imageSrc: '/womensummer1.jpg',
        imageHover: '',
        imageAlt: '',
        price: '$13',
        imageZoomClass: 'group-hover:scale-10 transition duration-300 ease-in-out transform origin-center',
      },
      // More products...
    ]

    export default function SaleMen() {
      return (
        <>
            <Navbar />

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <img 
              src="/summerwomencover.jpg" 
              alt="Placeholder Image" 
              className="w-full h-40 sm:h-56 lg:h-72 xl:h-96 rounded-lg shadow-lg object-cover"/>
            </div>
            
              <h2 className="text-3xl font-bold text-center mt-20  text-gray-900">Summer styles are here!</h2>
              <p className="mt-4 text-gray-600 text-lg text-center max-w-2xl mx-auto">
                Explore our summer styles, find all the summer stylish that suits you better!
              </p>

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