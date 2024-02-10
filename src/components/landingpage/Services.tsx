import Header from "./Header";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import { Element } from "react-scroll";

const Services = () => {

    const servicesData = {
        title: 'Our services',
        services: [
            {
                id: 0,
                title: `Social Media Marketing`,
            },
            {
                id: 1,
                title: `Search Engine Marketing`,
            },
            {
                id: 2,
                title: `Search Engine Optimisation`,
            },
            {
                id: 3,
                title: `Content / Copy Writing`,
            },
            {
                id: 4,
                title: `Product Photography Videography`,
            },
            {
                id: 5,
                title: `Influencer Marketing`,
            },
            {
                id: 6,
                title: `Email Campaigns`,
            },
        ]
    };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                },
            },
        ]
    };

    return (
        <Element name='services' className="bg-black pt-5 xl:pt-0 px-8 lg:px-[10vh] xl:px-[20vh] relative">
        {/* <Element name='services' className="bg-black h-auto md:h-[40vh] lg:h-[50vh] xl:h-[40vh] pt-5 xl:pt-0 px-8 lg:px-[10vh] xl:px-[20vh]"> */}
            <Header title={servicesData?.title} backgroundColor="color:var(--primary-color)" textColor="white" />
            <div className="min-w-[100vw] relative z-10">
                <Slider className="mt-3 w-full" {...settings}>
                    {
                        servicesData?.services?.map((data) => (
                            <ServiceCard title={data?.title} />
                        ))
                    }
                </Slider>
            </div>
            <div className="h-[30%] w-full bg-[#fff] z-0 absolute bottom-0 left-0" />
        </Element>
    )
}

export default Services