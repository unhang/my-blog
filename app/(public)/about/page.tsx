import Image from 'next/image';

import aboutme from '@/public/images/about.jpg';

export default function About() {
  return <>
    <div className='w-full h-min-[100vh] px-[32px] md:max-w-[768px] md:mx-auto'>
      <div className="mt-16 md:mb-8 grid grid-cols-4 gap-4">
        <div>
          <h1 className="text-[44px] md:text-[48px] font-[600] text-center leading-[56px] md:leading-[64px] align-top">
            <span className="border-l-[8px] border-[#77FF00] font-[noto-sans]">あ</span>
          </h1>
          <h1 className="text-[44px] md:text-[48px] font-[600] text-center leading-[56px] md:leading-[64px] align-top">B</h1>
          <h1 className="text-[44px] md:text-[48px] font-[600] text-center leading-[56px] md:leading-[64px] align-top">O</h1>
          <h1 className="text-[44px] md:text-[48px] font-[600] text-center leading-[56px] md:leading-[64px] align-top">U</h1>
          <h1 className="text-[44px] md:text-[48px] font-[600] text-center leading-[56px] md:leading-[64px] align-top">T</h1>
          <br />
          <h1 className="text-[44px] md:text-[48px] font-[600] text-center leading-[56px] md:leading-[64px] align-top">M</h1>
          <h1 className="text-[44px] md:text-[48px] font-[600] text-center leading-[56px] md:leading-[64px] align-top">E</h1>
        </div>
        <div className="col-span-3">
          <Image src={aboutme} className="w-full h-auto" alt="about" />
        </div>
      </div>

      <div className="mt-4 md:mt-8">
        <p className="text-[24px] md:text-[32px] text-end">Ung Nhat Hang</p>
        <p className="italic text-[16px] md:text-[24px] text-end">Tokyo, Japan</p>
      </div>
      {/* Experience */}
      <div className="mt-8">
        <h1 className="text-[24px] text-center leading-[48px] font-bold border-y-[1px] border-y-[#000000]">Working Experience</h1>
        <div className="my-8">
          <p>Nov 2023 - Present</p>
          <a href="https://fptsoftware.jp/about-us/fpt-software-japan" target="_blank" className="underline">FPT Software Japan</a>
          <p className="mt-2 italic font-bold">Bridge Software Engineer</p>
          <ul className="list-disc list-inside mt-2">
            <li>Manage project contracts and deliverables.</li>
            <li>Collaborating with cross-functional teams to deliver high-quality software solutions.</li>
            <li>Consulting customers on AWS cloud architecture for their systems</li>
          </ul>
        </div>
        <div className="my-8">
          <p>April 2020 - Oct 2023</p>
          <a href="hhttps://executionlab.asia/" target="_blank" className="underline">Executionlab Asia</a>
          <p className="mt-2 italic font-bold">Bridge Software Engineer</p>
          <ul className="list-disc list-inside mt-2">
            <li>Manage and tracking project tickets and deliverables.</li>
            <li>Collaborating with customers to gather requirements and provide technical solutions.</li>
            <li>Creating Basic Design, documenting technical specifications.</li>
          </ul>
        </div>
         <div className="my-8">
          <p>Mar 2019 - Jeb 2020</p>
          <a href="hhttps://executionlab.asia/" target="_blank" className="underline">Executionlab Asia</a>
          <p className="mt-2 italic font-bold">Fullstack Web Developer</p>
          <ul className="list-disc list-inside mt-2">
            <li>Build new frontend features using Angular and TypeScript.</li>
            <li>Implement responsive design and ensure cross-browser compatibility. Optimize rendering performance.</li>
            <li>Maintain existing Java backend services and troubleshoot issues. </li>
          </ul>
        </div>
      </div>

    </div>
  </>
}