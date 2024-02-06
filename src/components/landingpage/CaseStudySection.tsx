import Header from "./Header";
import sakurafresh from '../../assets/images/sakura.webp';
import andal from '../../assets/images/andal.webp';
import beemg from '../../assets/images/beemg.webp';
import { Element } from "react-scroll";

const CaseStudySection = () => {

    const caseStudyData = {
        title: 'Case studies',
        studies: [
            {
                id: 0,
                title: 'Sakurafresh',
                content: 'lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho',
                contents: [`web design`],
                image: sakurafresh,
                main: true,
            },
            {
                id: 2,
                title: 'BeeMG',
                content: 'lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho',
                contents: [`web design`, `brand identity`],
                image: beemg,
                main: false,
            },
            {
                id: 0,
                title: 'Andal',
                content: 'lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho',
                contents: [`web design`, `social media marketing`],
                image: andal,
                main: false,
            },
        ],
    };

    return (
        <Element name='case-studies' className="w-full bg-black pt-5 lg:pt-16 pb-6 px-8 lg:px-[10vh] xl:px-[20vh]">
            <Header title="Case Studies" backgroundColor="color:var(--primary-color)" textColor="white" />

            {/* mobile */}
            <div className="grid lg:hidden grid-cols-1 grid-rows-3 gap-6 mt-6">
                {
                    caseStudyData?.studies?.map((data, i) => (
                        <div key={data?.id} className={`w-full rounded-[15px] bg-[color:var(--primary-color)] flex items-end ${i == 0 ? 'pt-20' : ''}`}>
                            <div className="w-full flex flex-col justify-start md:flex-row md:justify-between gap-4 items-start md:items-end p-8">
                                <div className="w-fit flex flex-col">
                                    <h1 className="text-3xl text-white font-[500]">{data?.title}</h1>
                                    {
                                        data?.main ? (
                                            <p className="text-white mr-3">{data?.content}</p>
                                        ) : null
                                    }
                                </div>
                                <button className="w-fit min-w-[120px] flex gap-2 justify-center items-center text-white">view study <span>{`>`}</span></button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* desktop */}
            <div className="hidden lg:grid grid-cols-2 md:grid-rows-2 gap-6 mt-6">
                {
                    caseStudyData?.studies?.map((data, i) => (
                        <div key={data?.id} className={`w-full relative group rounded-[15px] overflow-hidden bg-[color:var(--primary-color)] grayscale hover:grayscale-0 flex items-end  ${i == 1 || i == 2 ? 'col-start-2' : ''} ${i == 1 ? 'row-start-1 row-end-2' : ''} ${i == 0 ? 'row-start-1 row-end-3 aspect-square' : ''}`}>
                            <div className="w-full flex justify-between gap-4 items-end p-8 z-10">
                                <div className="w-fit flex flex-col">
                                    <h1 className="text-3xl text-white font-[500] mb-2">{data?.title}</h1>
                                    <div className="w-full flex justify-start items-center gap-5">
                                        {
                                            data?.contents?.map((sub_data, i) => (
                                                <p key={i} className="text-white"> <span className="mr-1">|</span> {sub_data}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <button className="w-fit min-w-[120px] flex gap-2 justify-center items-center text-white hover:text-[20px] transition-all duration-150 ease-in-out ">view study <span>{`>`}</span></button>
                            </div>
                            <div className="absolute inset-0 z-0">
                                <img src={data?.image} className={`w-full rounded-[15px] group-hover:scale-[120%] transition-all duration-500 ease-in-out ${i == 0 ? 'aspect-square' : ''}`} alt="" />
                            </div>
                            <div className="w-full absolute bottom-0 z-0 left-0 h-[60%] bg-gradient-to-b from-transparent to-black">

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="bg-white flex justify-end items-center group px-9 h-[6rem] rounded-[15px] mt-6 cursor-pointer transition-all duration-150 ease-in-out active:scale-95">
                <h1 className="text-[19px] group-hover:text-[22px] transition-all duration-150 ease-in-out font-[600] w-fit flex gap-2">View all case studies<span>{`>`}</span></h1>
            </div>
        </Element>
    )
}

export default CaseStudySection