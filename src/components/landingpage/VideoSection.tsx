import video from '../../assets/videos/video.webm'

const VideoSection = () => {

  const handleButtonClick = () => {
    window.location.href = 'mailto:example@example.com';
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      <video muted={true} autoPlay={true} loop src={video} className='w-full object-cover h-full z-0'></video>
      <div className='w-full h-[30vh] absolute bottom-0 flex justify-center items-center bg-gradient-to-t   from-black to-transparent'>
        <button onClick={handleButtonClick} className={`bg-white text-black py-2 px-14 rounded-[7px] font-manrope hover:bg-black hover:text-white text-[17px] font-[600] transition-all duration-150 ease-in-out active:scale-95`}>Book a free consultation</button>
      </div>
    </div>
  )
}

export default VideoSection