import React from 'react'

const Benifits = () => {
    const services = [
        {
            paragraph: "Looking for a reliable Audi mechanic in Dubai? Our certified experts provide professional diagnostics, repairs, and maintenance for all Audi models."
        },
        {
            paragraph: "We offer complete Audi repair services using advanced tools and genuine parts to ensure top performance and reliability."
        },
        {
            paragraph: "Visit our trusted Audi service center for routine maintenance, inspections, and high-quality servicing across Dubai."
        },
        {
            paragraph: "Expert Audi engine diagnostics and repair services to restore power, efficiency, and smooth performance."
        },
        {
            paragraph: "Stay cool with our professional Audi AC repair services designed for UAE's extreme weather conditions."
        },
        {
            paragraph: "Ensure safety with our reliable Audi brake inspection, repair, and replacement services."
        },
        {
            paragraph: "We specialize in diagnosing and fixing Audi transmission issues for smooth and responsive driving."
        },
        {
            paragraph: "Premium oil change service using manufacturer-approved oils for maximum engine protection."
        },
        {
            paragraph: "Quick and efficient Audi battery replacement with high-performance batteries suited for UAE climate."
        },
        {
            paragraph: "Professional tyre replacement, balancing, and repair services for all Audi vehicles."
        },
        {
            paragraph: "Improve ride comfort with expert suspension diagnostics and repair services."
        },

          {
            paragraph: "Improve ride comfort with expert suspension diagnostics and repair services."
        },


    ]

    return (
       <div className=' dark:bg-gray-950 dark:py-20  dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
           <div className='flex flex-col items-center justify-center my-20 dark:my-0 gap-y-8 w-[90%] mx-auto'>
            <div className='text-center space-y-4'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold '>
                    Benefits of 800 Motor Guru as Your Audi Service Center in Dubai
                </h1>
                <p className='text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, molestias veniam adipisci, voluptate laboriosam cupiditate quisquam nobis voluptates dolorem id quae facilis nam consequatur. Sequi impedit repellendus nihil mollitia nam?
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                {services.map((item, index) => (
                    <div key={index} className='group border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-y-4 p-6 hover:-translate-y-1 bg-white dark:bg-gray-900'>
                        <p className='text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed'>
                            {item.paragraph}
                        </p>
                    </div>
                ))}
            </div>

             <div className='group border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center dark:bg-gray-900 gap-y-4 p-6 hover:-translate-y-1 bg-white '>
                        <p className='text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla asperiores est rem. Cumque iusto eos reiciendis alias labore maiores laudantium dolor sint consequuntur. Explicabo error amet minus totam! Eum.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla asperiores est rem. Cumque iusto eos reiciendis alias labore maiores laudantium dolor sint consequuntur. Explicabo error amet minus totam! Eum.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla asperiores est rem. Cumque iusto eos reiciendis alias labore maiores laudantium dolor sint consequuntur. Explicabo error amet minus totam! Eum.
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla asperiores est rem. Cumque iusto eos reiciendis alias labore maiores laudantium dolor sint consequuntur. Explicabo error amet minus totam! Eum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla asperiores est rem. Cumque iusto eos reiciendis alias labore maiores laudantium dolor sint consequuntur. Explicabo error amet minus totam! Eum.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla asperiores est rem. Cumque iusto eos reiciendis alias labore maiores laudantium dolor sint consequuntur. Explicabo error amet minus totam! Eum.
                        </p>
                    </div>
        </div>
       </div>
    )
}

export default Benifits