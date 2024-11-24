import React from 'react'
import Image from 'next/image'


const SplashScreen = () => {
  return (
    <div className='py-16'>
      
      <Image 
        className='fade w-full'
        src="/img/IMG_6535 copy.png"
        alt="self image"
        width={0}
        height={0}
        sizes="100vw"
        />
    </div>
  )
}

export default SplashScreen
