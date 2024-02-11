import { useEffect, useState } from 'react'

const Preloader = () => {

    const [progress, setProgress] = useState<number>(0);
    const [progressEnd, setProgressEnd] = useState<boolean>(false);

    const increments: number[] = [20, 40, 60];

    useEffect(() => {
        const shuffledIncrements: number[] = shuffleArray(increments);

        let counter = 0;
        let interval: number;

        const updateProgress = () => {
            if (counter < shuffledIncrements.length) {
                const incrementValue = shuffledIncrements[counter];
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + incrementValue;
                    return newProgress <= 100 ? newProgress : prevProgress;
                });
                counter++;
            } else {
                clearInterval(interval);
                setProgressEnd(true);
            }
        };

        interval = setInterval(updateProgress, 350);

        return () => clearInterval(interval);
    }, [increments, progress]);


    const shuffleArray = (array: number[]) => {
        let currentIndex = array.length,
            temporaryValue: number,
            randomIndex: number;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    return (
        <div className={`w-full h-screen fixed z-[500] ${!progressEnd ? '' : '-translate-y-[105vh]'} transition-all duration-300 ease-out flex items-end bg-black pb-[20vh] md:pb-[100px] px-5 md:px-10`}>
            <div className="w-full flex flex-col">
                <h1 className='text-[120px] text-white'>{progress}%</h1>
                <div className="h-2 bg-white rounded-[3px] transition-all duration-150 ease-in-out" style={{ width: `${progress}%` }}>
                </div>
            </div>
        </div>
    )
}

export default Preloader