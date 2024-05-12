'use client'
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import 'animate.css';


const products = [
    {
      id: 1,
      name: 'Basic Tee 8-Pack',
      href: '#',
      price: '$256',
      discount: '$186',
      description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
      options: '8 colors',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
      imageAnimation: {
        enter: 'animate__animated animate__fadeInDown',
      },
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      price: '$32',
      discount: '$28',
      description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
      options: 'Black',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
      imageAlt: 'Front of plain black t-shirt.',
      imageAnimation: {
        enter: 'animate__animated animate__fadeInDown',
      },
    },
    {
      id: 3,
      name: 'Kinda Whit Basic Tee',
      href: '#',
      price: '$32',
      discount: '$26',
      description: 'Its probably, like ,5000 Kelvin instead of 6000 K.',
      options: 'White',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-03.jpg',
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
      imageAnimation: {
        enter: 'animate__animated animate__fadeInDown',
      },
    },
    {
      id: 4,
      name: 'Stone Basic Tee',
      href: '#',
      price: '$32',
      discount: '$28',
      description: 'White tees stain easily, and black tees fade. This is going to be gray for a while. ',
      options: 'Charcoal',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-04.jpg',
      imageAlt: 'Front of plain black t-shirt.',
      imageAnimation: {
        enter: 'animate__animated animate__fadeInUp',
      },
    },
    {
      id: 5,
      name: 'Fall Basic Tee 3-Pack',
      href: '#',
      price: '$96',
      discount: '$86',
      description: 'Who need stark minimalism when you could have earth tones? Embrace the season.',
      options: '3 colors',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-05.jpg',
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
      imageAnimation: {
        enter: 'animate__animated animate__fadeInUp',
      },
    },
    {
      id: 6,
      name: 'Linework Artwork Tee 3-Pack',
      href: '#',
      price: '$108',
      discount: '$92',
      description: 'Get all 3 colors of our popular Linework design and some variety to your monotonous life.',
      options: '3 colors',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
      imageAnimation: {
        enter: 'animate__animated animate__fadeInUp',
      },
      imageAlt: 'Front of plain black t-shirt.',
    },
    // More products...
  ]
  
  export default function Sale1() {
    return (
      <>
        <Navbar />
  
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
  
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                >
                  <div
                    className={`aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96 ${product.imageAnimation?.enter}`}
                  >
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="text-sm italic text-gray-500">{product.options}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-base font-medium text-gray-900 line-through">
                        {product.price}
                      </p>
                      <p className="text-base font-medium text-red-500 ml-4">
                        {product.discount}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  