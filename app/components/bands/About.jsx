import React from 'react'

const About = () => {
  const brands = [
    { name: "Audi", year: "2020-2024", models: "A3, A4, A6, Q5, Q7" },
    { name: "Audi", year: "2015-2019", models: "A3, A4, A6, Q5, Q7" },
    { name: "Audi", year: "2010-2014", models: "A4, A6, Q5, Q7, TT" },
    { name: "Audi", year: "2005-2009", models: "A4, A6, Q7, TT" },
    { name: "Audi", year: "2000-2004", models: "A4, A6, TT" },
     { name: "Audi", year: "2010-2014", models: "A4, A6, Q5, Q7, TT" },
    { name: "Audi", year: "2005-2009", models: "A4, A6, Q7, TT" },
    { name: "Audi", year: "2000-2004", models: "A4, A6, TT" },
  ]
  return (
    <div className='py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950  dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
      <div className='w-[90%] md:w-[85%] mx-auto'>
        
        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-12'>
          
          {/* Left Section - Text Content */}
          <div className='w-full lg:w-1/2 flex flex-col gap-y-4 md:gap-y-6'>
            
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight'>
              Get Your Audi Auto Repair Service in Dubai
            </h1>
            
            <div className='flex flex-col gap-y-4 mt-2'>
              <p className='text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam officiis quod officia voluptatum dolorum nisi pariatur, sed amet quia nulla iure, ipsa sapiente maxime mollitia! Tempore perferendis sed consequatur?
              </p>
              <p className='text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam officiis quod officia voluptatum dolorum nisi pariatur, sed amet quia nulla iure, ipsa sapiente maxime mollitia! Tempore perferendis sed consequatur?
              </p>
              <p className='text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam officiis quod officia voluptatum dolorum nisi pariatur, sed amet quia nulla iure, ipsa sapiente maxime mollitia! Tempore perferendis sed consequatur?
              </p>
            </div>

  
          </div>

          {/* Right Section - Table */}
          <div className='w-full lg:w-1/2'>
            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
              
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead className='bg-gray-50 dark:bg-gray-900'>
                    <tr>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300'>Brand</th>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300'>Year Range</th>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300'>Models</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    {brands.map((brand, index) => (
                      <tr key={index} className='hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors'>
                        <td className='px-6 py-3 text-sm font-medium text-gray-900 dark:text-white'>
                          <div className='flex items-center gap-2'>
                            {brand.name}
                          </div>
                        </td>
                        <td className='px-6 py-3 text-sm text-gray-600 dark:text-gray-400'>{brand.year}</td>
                        <td className='px-6 py-3 text-sm text-gray-600 dark:text-gray-400'>{brand.models}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About