import dev from '../../assets/images/dev.svg'
import back from '../../assets/icons/back.svg'
import { useNavigate } from 'react-router-dom'

const UnderDev = () => {

    const navigate = useNavigate();

  return (
    <div className='w-full h-screnn flex justify-center items-center relative'>
        <button className='absolute top-10 left-10 z-[100]' onClick={() => navigate(-1)}>
            <img src={back} className='max-w-[50px]' alt="" />
        </button>
        <img src={dev} className='max-w-[1000px]' alt="" />
    </div>
  )
}

export default UnderDev