import { Element } from "react-scroll"
import Header from "./Header"

const AboutSection = () => {

    const aboutData = {
        title: 'About Us',
        content: 'As a premier digital marketing and branding agency, we specialize in crafting compelling narratives and elevating brands to new heights. Our team of creative visionaries, strategic thinkers, and digital experts collaborates seamlessly to transform your brand into a digital powerhouse.',
        email: 'haroon@iuwe.com',
        number: '+91 84352 95432',
    }

    return (
        <Element name="contact" className='w-full px-8 lg:px-[10vh] xl:px-[20vh] pt-3 pb-6'>
            <div className="w-full grid grid-cols-1 md:flex gap-6">
                <div className="w-full md:max-w-[50%] flex flex-col gap-6">
                    <Header title={aboutData?.title} backgroundColor="color:var(--primary-color)" textColor="white" />
                    <div className='w-full bg-[color:var(--secondary-color)] rounded-[15px] p-8 md:p-10 h-full'>
                        <p className='font-[500] text-[16px] md:text-[18px] md:w-[85%]'>{aboutData?.content}</p>
                    </div>
                </div>
                <div className="w-full md:max-w-[50%]">
                    <div className='w-full bg-[color:var(--secondary-color)] rounded-[15px] flex h-full items-end'>
                        <div className='w-full flex flex-col justify-end p-8 md:p-10 min-h-[25vh] md:min-h-[42vh]'>
                            <h1 className='text-6xl md:text-8xl font-[100] tracking-tight'>Contact us</h1>
                            <div className="w-full flex flex-col">
                            <p className='font-[500] text-[16px] md:text-[18px]'>{aboutData?.email}</p>
                            <p className='font-[500] text-[16px] md:text-[18px]'>{aboutData?.number}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutSection