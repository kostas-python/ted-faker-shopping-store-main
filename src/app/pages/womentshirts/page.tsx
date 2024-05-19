'use client'

import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import { StarIcon } from '@heroicons/react/20/solid'
import classNames from "classnames"
import "animate.css"



const products = [
    {
      id: 1,
      name: 'Black Basic Tee',
      price: '$32',
      href: 'products/whitebasictee',
      rating: 5,
      reviewCount: 38,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
      imageAlt: "Model wearing women's black cotton crewneck tee.",
      animation: 'animate__rollIn'
    },
    {
        id: 2,
        name: 'Off-White Basic Tee',
        price: '$32',
        rating: 5,
        reviewCount: 18,
        href: '/products/whitebasictee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
        animation: 'animate__rollIn'
      },
      {
        id: 3,
        name: 'Mountains Artwork Tee',
        price: '$36',
        rating: 5,
        reviewCount: 76,
        href: '/products/mountainartoworktee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
        animation: 'animate__rollIn'
      },
      {
        id: 4,
        name: 'Black Basic Tee',
        price: '$32',
        href: '#',
        rating: 5,
        reviewCount: 28,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
        animation: 'animate__rollIn'
      },
      {
        id: 5,
        name: 'Off-White Basic Tee',
        price: '$32',
        rating: 5,
        reviewCount: 78,
        href: '/products/whitebasictee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
        animation: 'animate__rollIn'
      },
      {
        id: 6,
        name: 'Mountains Artwork Tee',
        price: '$36',
        rating: 5,
        reviewCount: 98,
        href: '/products/mountainartoworktee',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
        animation: 'animate__rollIn'
      },
    // More products...
  ]
  
  export default function womentshirts() {


    return (
      <>
        <Navbar />
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Favorites</h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all favorites
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
  
            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className={`h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto ${product.animation} animate__animated`}>
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="pb-4 pt-10 text-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <div className="mt-3 flex flex-col items-center">
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p>
                    </div>
                    <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all favorites
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  