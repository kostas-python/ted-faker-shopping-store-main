'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const faqs = [
  {
    question: "My Account",
    subcategories: [
        {
          title: 'How do i acceess my account?', 
          description: 'You can simply sign in to your account on top right of the page and save all your personal and bank details for faster check out.'
        },
        {
          title: 'How do i unsubscribeor update my marketing preferences?',
          description: 'If you would like to update your marketing preferences, please log in to your account and just untick the subscribe box under the newsletter section.  You can also email us on ask.ted@tedfaker.com and we will update your preferences for you. Please note that it may take up to 7 days for any changes to take effect.'
        },
        {
          title: 'Shipping costs',
          description: 'We cover the cost of return shipping within the first 30 days.'
        }
      ],
  },
  {
    question: "Delivery",
    subcategories: [
        {
          title: 'Which delivery options are available for me?', 
          description: 'Here at Ted, we are working around the clock to keep our online services ticking over smoothly.We are very busy right now, and our team is working tirelessly to ensure all customers orders are delivered. Some orders may take slightly longer than expected - please allow an additional 2-3 days for your parcel to arrive. Please be aware that Customer Service response times are also a little stretched at the moment so please allow for 48-72 hours for a response.',
        },
        {
          title: 'Can i track my order?',
          description: 'You can track your Ted Baker online order using your order number and email address in your account page. If you have not yet received an Order Dispatch email do not fret, it will be with you soon (up to 5 days after you have placed your order).If you need any help, you can Contact Us.'
        },
        {
          title: 'Shipping costs',
          description: 'Standard delivery 9.95£, free for oders over 100£, 5-10 working days',
          description1: 'Express delivery 17.95£, 2-4 working days',
          
        }
      ],
  },
  {
    question: "Returns",
    answer:
    'Returns have never been easier, just pop up to your nearest local store and just your order with the return printed label.',
  },
  {
    question: "Payments",
    answer:
      'You can pay for your items using the following payment methods: Mastercard,   Visa,  Paypal',
  },
  {
    question: "Careers",
    answer:
      'We often looking for modern people to work for us,  please drop you CV through our contact us page and we will come back to you in 5 working days.'
  },
  
  // More questions...
]

export default function Help() {
  return (
    <>

    <Navbar />

  <div className="bg-white">
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    {faq.subcategories && (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <div className="mt-4">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                <h3 className="text-base font-semibold">Information</h3>
                                <span className="ml-6 flex h-7 items-center">
                                  {open ? (
                                    <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                                  ) : (
                                    <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </div>
                            
                            <Disclosure.Panel as="div" className="mt-2 pl-6">
                              <ul className="ml-4 list-disc space-y-2 text-base leading-7 text-gray-600">
                                {faq.subcategories.map((subcategory, index) => (
                                  <li key={index}>
                                    <div className="flex items-start">
                                      <div className="ml-3">
                                        <p className="text-base font-semibold leading-7 text-gray-600">{subcategory.title}</p>
                                        <p className="mt-2 text-base leading-7 text-gray-600">
                                          {subcategory.description}
                                        </p>
                                        <p className="mt-2 text-base leading-7 text-gray-600">
                                          {subcategory.description1}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  </div>



    <Footer />
    </>
  )
}
