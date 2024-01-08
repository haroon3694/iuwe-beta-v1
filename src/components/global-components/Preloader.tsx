import { useEffect, useState } from 'react'

const Preloader = () => {

    const [progress, setProgress] = useState(0);
    const increments = [20, 40, 60]; // Define the sequence of increments


    useEffect(() => {
        const shuffledIncrements = shuffleArray(increments); // Shuffle the increments array

        let counter = 0;

        const updateProgress = () => {
            if (counter < shuffledIncrements.length) {
                const incrementValue = shuffledIncrements[counter];
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + incrementValue;
                    return newProgress <= 100 ? newProgress : prevProgress;
                });
                counter++;
            }
        };

        const interval = setInterval(updateProgress, 700); // Interval to update progress

        return () => clearInterval(interval);
    }, [increments]);

    // Function to shuffle array elements
    const shuffleArray = (array: any[]) => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

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
        <div className={`w-full h-screen fixed z-[500] ${progress < 100 ? '' : '-translate-y-[105vh]'} transition-all duration-300 ease-out flex items-end bg-black pb-[20vh] md:pb-[100px] px-10`}>
            <div className="w-full flex flex-col">
                <h1 className='text-[120px] text-white'>{progress}%</h1>
                <div className="h-2 bg-white rounded-[3px] transition-all duration-150 ease-in-out" style={{ width: `${progress}%` }}>
                </div>
            </div>
        </div>
    )
}

export default Preloader