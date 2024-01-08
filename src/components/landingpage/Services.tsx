import Header from "./Header";

const Services = () => {

    const servicesData = {
        title: 'Our services',
        services: [1,2,3,4]
    };

    return (
        <div className="bg-black h-[65vh] md:h-[40vh] pt-5 xl:pt-0 px-8 lg:px-[10vh] xl:px-[20vh]">
        <Header title={servicesData?.title} backgroundColor="color:var(--primary-color)" textColor="white" />
            <div className="w-full grid grid-cols-2 lg:flex gap-6 mt-6">
                {
                    servicesData?.services?.map(() => (
                        <div className="w-full aspect-square bg-white flex flex-col justify-center items-center rounded-[15px]">
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services