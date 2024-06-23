import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GoogleMap from '../components/GoogleMap'

const actions = [
  {
    title: 'London',
    icon: MapPinIcon,
    icon2: PhoneIcon,
    description: '130 Thessaly Rd, Nine Elms, London SW8 5EJ, United Kingdom.',
    description1: '+447901076598',
    description2: [
      'Monday:    8am - 9pm',
      '',
      'Tuesday:   8am - 9pm',
      '',
      'Wednesday: 8am - 9pm',
      '',
      'Thursday:  8am - 9pm',
      '',
      'Friday:    8am - 9pm',
      '',
      'Saturday:  8am - 9pm',
      '',
      'Sunday:    8am - 9pm'
    ]
  },
  {
    title: 'Manchester',
    icon: MapPinIcon,
    description: 'University of, Oxford Rd, Manchester M13 9PL, United Kingdom.',
    icon2: PhoneIcon,
    description1: '+447901076598',
    description2: [
      'Monday:    8am - 9pm',
      '',
      'Tuesday:   8am - 9pm',
      '',
      'Wednesday: 8am - 9pm',
      '',
      'Thursday:  8am - 9pm',
      '',
      'Friday:    8am - 9pm',
      '',
      'Saturday:  8am - 9pm',
      '',
      'Sunday:    8am - 9pm'
    ]
  },
  {
    title: 'Liverpool',
    icon: MapPinIcon,
    description: 'University of, Oxford Rd, Liverpool M13 9PL, United Kingdom.',
    icon2: PhoneIcon,
    description1: '+447901076598',
    description2: [
      'Monday:    8am - 9pm',
      '',
      'Tuesday:   8am - 9pm',
      '',
      'Wednesday: 8am - 9pm',
      '',
      'Thursday:  8am - 9pm',
      '',
      'Friday:    8am - 9pm',
      '',
      'Saturday:  8am - 9pm',
      '',
      'Sunday:    8am - 9pm'
    ]
  },
  {
    title: 'Brighton',
    icon: MapPinIcon,
    description: 'Royal Pavilion Gardens, Brighton and Hove, Brighton BN1 1EE, United Kingdom.',
    icon2: PhoneIcon,
    description1: '+447901076598',
    description2: [
      'Monday:    8am - 9pm',
      '',
      'Tuesday:   8am - 9pm',
      '',
      'Wednesday: 8am - 9pm',
      '',
      'Thursday:  8am - 9pm',
      '',
      'Friday:    8am - 9pm',
      '',
      'Saturday:  8am - 9pm',
      '',
      'Sunday:    8am - 9pm'
    ]
  },
  {
    title: 'Birmingham',
    icon: MapPinIcon,
    description: 'Royal Pavilion Gardens, Brighton and Hove, Birmingham BN1 1EE, United Kingdom.',
    icon2: PhoneIcon,
    description1: '+447901076598',
    description2: [
      'Monday:    8am - 9pm',
      '',
      'Tuesday:   8am - 9pm',
      '',
      'Wednesday: 8am - 9pm',
      '',
      'Thursday:  8am - 9pm',
      '',
      'Friday:    8am - 9pm',
      '',
      'Saturday:  8am - 9pm',
      '',
      'Sunday:    8am - 9pm'
    ]
  },
  {
    title: 'Devon',
    icon: MapPinIcon,
    description: '130 Thessaly Rd, Nine Elms, Devon SW8 5EJ, United Kingdom.',
    icon2: PhoneIcon,
    description1: '+447901076598',
    description2: [
      'Monday:    8am - 9pm',
      '',
      'Tuesday:   8am - 9pm',
      '',
      'Wednesday: 8am - 9pm',
      '',
      'Thursday:  8am - 9pm',
      '',
      'Friday:    8am - 9pm',
      '',
      'Saturday:  8am - 9pm',
      '',
      'Sunday:    8am - 9pm'
    ]
  },
]

const features = [
  {
    name: 'Trendy Fashion',
    description: 'Discover the latest trends and styles for every season.',
  },
  {
    name: 'Quality Fabrics',
    description: 'We use high-quality fabrics to ensure comfort and durability.',
  },
  {
    name: 'Customizable Options',
    description:
      'Customize your clothing with our wide range of sizes, colors, and designs.',
  },
  {
    name: 'Sustainable Practices',
    description: 'We are committed to eco-friendly and sustainable fashion practices.',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Stores() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center my-12">
        <div className="divide-y text-amber-500 overflow-hidden rounded-lg mt-40 bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 w-full max-w-6xl">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none ' : '',
                actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                actionIdx % 2 === 1 ? 'border-t border-gray-300' : '',
                'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span
                    className={classNames(
                      'inline-flex rounded-lg p-3 ring-4 ring-white'
                    )}
                  >
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="ml-4 text-base font-semibold leading-6 text-gray-900">
                    {action.title}
                  </h3>
                </div>
                {action.icon2 && (
                  <div className="flex items-center mr-20">
                    <span
                      className={classNames(
                        'inline-flex rounded-lg p-3 ring-4 ring-white'
                      )}
                    >
                      <action.icon2 className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <p className="ml-4 text-sm text-gray-500">
                      {action.description1}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
              {action.description2 && (
              <div className="mt-4 text-center">
                {action.description2.map((line, index) => (
                  <p key={index} className="text-sm text-gray-500 leading-relaxed ">
                    {line.split(':').map((part, partIndex) => (
                      <span key={partIndex} className={partIndex === 0 ? 'mr-4' : ''}>
                        {part}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            )}
            </div>
          ))}
        </div>
      </div>
      

    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative mt-20">
        <div className="aspect-h-2 aspect-w-3 ml-16 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
        <GoogleMap />
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <p className="mt-4 text-4xl font-bold text-center tracking-tight text-gray-900">Find Us</p>
            <p className="mt-4 text-gray-600 text-lg text-center">
              Zoom the markers to find the closest location of our stores for your convienience!
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-medium text-black text-lg text-center">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500 text-center">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
