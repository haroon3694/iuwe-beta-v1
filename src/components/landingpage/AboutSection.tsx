import { Element } from "react-scroll"

const AboutSection = () => {

    const aboutData = {
        title: 'About Us',
        content: 'As a premier digital marketing and branding agency, we specialize in crafting compelling narratives and elevating brands to new heights. Our team of creative visionaries, strategic thinkers, and digital experts collaborates seamlessly to transform your brand into a digital powerhouse.',
        email: 'haroon@iuwe.com',
        number: '+91 84352 95432',
    }

    return (
        <Element name="contact" className='w-full px-8 lg:px-[10vh] xl:px-[20vh] pt-[4rem] md:pt-[14rem] lg:pt-[10rem] xl:pt-[8rem] 2xl:pt-[7rem] pb-6'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="flex justify-center items-center">
                    <div className={`w-full bg-[color:var(--primary-color)] h-full flex justify-start items-center rounded-[15px] p-10`}>
                        <h1 className={`text-white text-4xl font-[600] font-montserat`}>{aboutData?.title}</h1>
                    </div>
                </div>
                <div className='w-full col-start-1 md:row-start-2 bg-[color:var(--secondary-color)] rounded-[15px] p-10'>
                    <p className='font-[500]'>{aboutData?.content}</p>
                </div>
                <div className='w-full md:cols-start-2 md:row-start-1 md:row-end-3 bg-[color:var(--secondary-color)] rounded-[15px] flex items-end'>
                    <div className='w-full flex flex-col justify-end p-10 min-h-[42vh]'>
                        <h1 className=' text-3xl font-[600]'>Contact us</h1>
                        <p className='font-[500]'>{aboutData?.email}</p>
                        <p className='font-[500]'>{aboutData?.number}</p>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutSection