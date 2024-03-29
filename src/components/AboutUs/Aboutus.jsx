import React from 'react'
import Image from '../../assets/portfolio/about.png'

const Aboutus = () => {
    return (
        <div className="bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center mr-20">

                    <div>
                        <div className="space-y-5 sm:p-16 pb-6">
                            <h1
                                data-aos="fade-up"
                                className="text-3xl sm:text-4xl font-bold font-serif md:p-10 "
                            >
                                About us
                            </h1>
                            <p data-aos="fade-up" className='w-500xl'>
                                GramTarang is a forward-thinking company incubated by Centurion University. We specialize in cutting-edge technology platforms and provide Industry 4.0 solutions to heavy industries, encompassing digital product design, digital manufacturing line, digital automation, the design of intricate automotive components, Software as a Service, and on-demand customized digital products.
                            </p>
                            <p data-aos="fade-up">
                                GramTarang has a strong track record of excelling in scientific consulting and driving digital transformation in various client environments. Additionally, we are deeply involved in the ever-growing fields of manufacturing electric vehicles (EVs) in various configurations and researching digital automation-based products for the agricultural sector.
                            </p>
                            <p data-aos="fade-up">
                                Our overarching vision at GRAMTARANG is to develop cost-effective, sustainable, and high-impact products and accelerators to address complex and urgent societal challenges. We achieve this by harnessing local engineering talent and leveraging state-of-the-art technology platforms.
                            </p>
                        </div>
                    </div>
                    <div data-aos="slide-right" data-aos-duration="1500">
                        <img
                            src={Image}
                            alt=""
                            className="sm:scale-125 sm:-translate-x-11 max-h-[500px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus