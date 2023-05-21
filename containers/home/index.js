import React from 'react'
import Image from 'next/image'
import { SlArrowDown } from 'react-icons/sl';
import { Button, Carousel, Input, Title, AnimateNumber } from '@/components'
import { CardsSoon, Cards } from '@/mocks'



function Page() {
    return (
        <main>
            <div className='relative mb-10'>
                <div className='w-full h-60 lg:h-full'>
                    <Image width={1920} height={1080} src="/home/hero/hero.svg" className='w-full h-full object-cover' />
                </div>
                <p className='lg:w-[1000px] md:w-[650px] lg:text-7xl md:text-5xl text-4xl w-[300px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-black font-[Jost] text-[#4f4cee]'>Deneyimlerin Sınırını Zorla!</p>
            </div>


            <div className='md:w-[90%] mx-auto'>



                <div className="my-10">
                    <div>
                        <Carousel title="Yaklaşan Etkinlikler" soonCardData={CardsSoon} soon={true} />
                    </div>
                </div>

                <div className='mx-auto my-10'>
                    <div className='flex flex-col items-center'>
                        <p className='text-4xl text-[#4F4CEE] font-[Jost] font-bold'> Şu Ana Kadar </p>
                        <SlArrowDown className='text-4xl animate-bounce inline-flex' />
                    </div>
                    <div className='md:flex-row md:w-full md:justify-between md:mt-5 flex flex-col text-center w-60 mx-auto'>
                        <div className='mb-10 text-center mx-auto'>
                            <AnimateNumber number={1852} delay={.5} />
                            <p className='text-5xl text-[#000000a4] font-[Jost] font-bold'>Üye</p>
                        </div>
                        <div className='mb-10 text-center mx-auto'>
                            <AnimateNumber number={51} delay={20} />
                            <p className='text-5xl text-[#000000a4] font-[Jost] font-bold'>Kulüp</p>
                        </div>
                        <div className=' text-center mx-auto'>
                            <AnimateNumber number={173} delay={20} />
                            <p className='text-5xl text-[#000000a4] font-[Jost] font-bold'>Etkinlik</p>
                        </div>
                    </div>
                </div>



                <div>
                    <div>
                        <Carousel title="Öne Çıkan Etkinlikler" cardData={Cards} soon={false} />
                    </div>
                </div>


                <div className='px-4 mt-16 mb-20 text-center'>
                    <p className='mb-4 text-4xl text-[#4f4cee] font-[Jost] font-medium'>Subscribe To Our Newsletter</p>
                    <p className='mb-5 text-lg font-[Jost] text-[#5C5C5F]'>Yayınlanan etkinliklerden ilk senin haberin olsun! <br /> Bültenimize abone olarak tüm etkinliklerden anında haberdar olabilirsin.</p>
                    <form>
                        <div className='lg:w-2/6 w-4/6 mx-auto'>
                            <Input placeholder="Enter Your Email" className="text-center" type="email" />
                        </div>
                        <div className='lg:w-1/6 w-1/3 mx-auto mt-3'>
                            <Button>Abone Ol</Button>
                        </div>
                    </form>

                </div>

            </div>
        </main >
    )
}




export default Page