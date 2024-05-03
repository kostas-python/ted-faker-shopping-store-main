

export default function Sale() {
  return (
    <div className="bg-white">
      <div className="overflow-hidden pt-32 sm:pt-14">
        <div className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative pb-16 pt-48 sm:pb-24 flex flex-col justify-center items-center">
              <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl text-center">
                Final Stock.
                <br />
                Up to 50% off.
              </h2>
              <div className="mt-6 text-base">
                <a href="/Sale" className="font-semibold text-white">
                  Shop the sale
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
