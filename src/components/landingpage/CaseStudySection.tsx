import Header from "./Header";

const CaseStudySection = () => {

    const caseStudyData = {
        title: 'Case studies',
        studies: [
            {
                id: 0,
                title: 'Sakurafresh',
                content: 'lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho',
                main: true,
            },
            {
                id: 2,
                title: 'Inventure',
                content: 'lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho',
                main: false,
            },
            {
                id: 0,
                title: 'Sakurafresh',
                content: 'lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho lorem ipsum dolor sit amet sho',
                main: false,
            },
        ],
    };

    return (
        <div className="w-full bg-black pt-5 lg:pt-16 pb-6 px-8 lg:px-[10vh] xl:px-[20vh]">
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
                        <div key={data?.id} className={`w-full rounded-[15px] bg-[color:var(--primary-color)] flex items-end  ${i == 1 || i == 2 ? 'col-start-2' : ''} ${i == 1 ? 'row-start-1 row-end-2' : ''} ${i == 0 ? 'row-start-1 row-end-3 aspect-square' : ''}`}>
                            <div className="w-full flex justify-between gap-4 items-end p-8">
                                <div className="w-fit flex flex-col">
                                    <h1 className="text-3xl text-white font-[500]">{data?.title}</h1>
                                    {
                                        data?.main ? (
                                            <p className="text-white max-w-[60%]">{data?.content}</p>
                                        ) : null
                                    }
                                </div>
                                <button className="w-fit min-w-[120px] flex gap-2 justify-center items-center text-white">view study <span>{`>`}</span></button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="bg-white flex justify-end items-center group px-9 h-[6rem] rounded-[15px] mt-6 cursor-pointer transition-all duration-150 ease-in-out active:scale-95">
                <h1 className="text-[19px] group-hover:text-[22px] transition-all duration-150 ease-in-out font-[600] w-fit flex gap-2">View all case studies<span>{`>`}</span></h1>
            </div>
        </div>
    )
}

export default CaseStudySection