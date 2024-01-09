const AboutSection = () => {
    return (
        <div className='w-full px-8 lg:px-[10vh] xl:px-[20vh] pt-[5rem] sm:pt-[16rem] md:pt-[39rem] lg:pt-[5rem] xl:pt-[8rem] 2xl:pt-[10rem] pb-6'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="flex justify-center items-center">
                    <div className={`w-full bg-[color:var(--primary-color)] flex justify-start items-center rounded-[15px] p-10`}>
                        <h1 className={`text-white text-3xl font-[600] font-montserat`}>About Us</h1>
                    </div>
                </div>
                <div className='w-full col-start-1 md:row-start-2 bg-[color:var(--secondary-color)] rounded-[15px] p-10'>
                    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='w-full md:cols-start-2 md:row-start-1 md:row-end-3 bg-[color:var(--secondary-color)] rounded-[15px] flex items-end'>
                    <div className='w-full flex flex-col justify-end p-10 min-h-[42vh]'>
                        <h1 className=' text-3xl font-[600]'>Contact us</h1>
                        <p className='font-[500]'>haroon@iuwe.com</p>
                        <p className='font-[500]'>+91 84352 95432</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection