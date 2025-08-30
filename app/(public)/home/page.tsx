import Image from 'next/image';

import cover from '@/public/images/hang.jpg';

export default function Home() {
  return <>
    <div className='w-full h-min-[100vh] px-[32px] md:max-w-[768px] md:mx-auto'>
      <div className="font-[100] mx-auto pt-[48px]">
        <h1 className="m-0 text-[98px] md:text-[128px]  relative">
          h<span className='font-[noto-sans]'>あ</span>ng
          <span className='bg-[#77FF00] h-[16px] w-[80px] md:w-[96px] 
                              absolute bottom-[24px] md:bottom-[32px] left-[72px] md:left-[96px] z-[-1]'></span>
        </h1>
        <p className="pt-[16px] text-[32px]">Hello world,</p>
      </div>
      <p className="py-[16px] text-justify">
        I'm Hang, a Bridge Software Engineer based in Japan. <br />
        I love coding, music and art.<br />
        This is my personal blog where I may share many aspects of my life.<br />
        Welcome to my world!
      </p>
      <div className="w-full my-lg">
        <Image className="w-full h-auto d-content" src={cover} alt="" />
      </div>
      <div className="my-[48px]">
        <p className="italic">Coming soon...</p>
      </div>
    </div>
  </>
}