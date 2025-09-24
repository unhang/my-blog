import Image from 'next/image';

import aboutme from '@/public/images/about.jpg';
import pmpCert from '@/public/images/pmi_certification.jpg';
import awsSaa from '@/public/images/AWS_SAA.jpg';

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
        <p className="text-[24px] md:text-[32px] text-end font-bold">Ung Nhat Hang</p>
        <p className="italic text-[16px] md:text-[24px] text-end">Tokyo, Japan</p>
      </div>
      {/* Experience */}
      <div className="mt-8 md:text-[24px]">
        <h1 className="text-[24px] text-center leading-[48px] font-bold border-y-[1px] border-y-[#000000]">Working Experience</h1>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px]'>Nov 2023 - Present</p>
          {/* <a className='text-[16px] md:text-[20px] underline' href="https://fptsoftware.jp/about-us/fpt-software-japan" target="_blank">FPT Software Japan</a> */}
          <p className='mt-2 italic text-[16px] md:text-[20px] font-bold'>Bridge Software Engineer</p>
          <ul className="list-disc text-[16px] md:text-[20px] list-inside mt-2">
            <li>Manage project contracts and deliverables.</li>
            <li>Collaborating with cross-functional teams to deliver high-quality software solutions.</li>
            <li>Consulting customers on AWS cloud architecture for their systems</li>
          </ul>
        </div>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px]'>April 2020 - Oct 2023</p>
          {/* <a className='text-[16px] md:text-[20px] underline' href="hhttps://executionlab.asia/" target="_blank">Executionlab Asia</a> */}
          <p className='mt-2 italic text-[16px] md:text-[20px] font-bold'>Bridge Software Engineer</p>
          <ul className="list-disc text-[16px] md:text-[20px] list-inside mt-2">
            <li>Manage and tracking project tickets and deliverables.</li>
            <li>Collaborating with customers to gather requirements and provide technical solutions.</li>
            <li>Creating Basic Design, documenting technical specifications.</li>
          </ul>
        </div>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px]'>Mar 2019 - Feb 2020</p>
          {/* <a className='text-[16px] md:text-[20px] underline' href="https://vn.goalist-group.com/" target="_blank">Goalsit Vietnam</a> */}
          <p className='mt-2 italic text-[16px] md:text-[20px] font-bold'>Fullstack Web Developer</p>
          <ul className="list-disc text-[16px] md:text-[20px] list-inside mt-2">
            <li>Build new frontend features using Angular and TypeScript.</li>
            <li>Optimize rendering performance.</li>
            <li>Maintain existing Java backend services and troubleshoot issues. </li>
          </ul>
        </div>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px]'>Nov 2018 - Feb 2020</p>
          {/* <a className='text-[16px] md:text-[20px] underline' href="https://executionlab.asia/" target="_blank">Sutrix Solutions</a> */}
          <p className='mt-2 italic text-[16px] md:text-[20px] font-bold'>IT Comtor</p>
          <ul className="list-disc text-[16px] md:text-[20px] list-inside mt-2">
            <li>Translate requirements documents.</li>
            <li>Support communication between development teams and Japanese PM</li>
          </ul>
        </div>
      </div>
      {/* Certifications */}
      <div className="mt-16 md:text-[24px]">
        
        <h1 className="text-[24px] text-center leading-[48px] font-bold border-y-[1px] border-y-[#000000]">Certifications</h1>
        <div className='my-8'>
          <Image className='w-full h-auto'
                src={awsSaa}
                alt="AWS Certified Solutions Architect - Associate" />
        </div>
        <div className='my-8' >
          <Image className='w-full h-auto'
                src={pmpCert}
                alt="PMI PMP Professional Project Management" />
        </div>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px] font-bold'>AWS Certified Solutions Architect - Associate</p>
          <p className='text-[16px] md:text-[20px]'>Issued: Dev 2024</p>
        </div>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px] font-bold'>PMI PMP Professional Project Management</p>
          <p className='text-[16px] md:text-[20px]'>Issued: Feb 2024</p>
        </div>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px] font-bold'>IPA FE - Fundamental Information Technology Engineer</p>
          <p className='text-[16px] md:text-[20px]'>Issued: Oct 2023</p>
        </div>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px] font-bold'>JLPT N2</p>
          <p className='text-[16px] md:text-[20px]'>Issued: Dec 2017</p>
        </div>
      </div>
      {/* Educations */}
      {/* <div className="mt-16 md:text-[24px]">
        <h1 className="text-[24px] text-center leading-[48px] font-bold border-y-[1px] border-y-[#000000]">Educations</h1>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px] font-bold'>Thai Nguyen University (TNU)</p>
          <p className='text-[16px] md:text-[20px]'>Bachelor of Information Technology, Graduated 2024</p>
        </div>
        <div className="my-8">
          <p className='text-[16px] md:text-[20px] font-bold'>FPT Polytechnic College</p>
          <p className='text-[16px] md:text-[20px]'>Advanced Diploma in Web Development, Graduated 2020</p>
        </div>
      </div> */}
      {/* Tech Stack */}
      <div className="mt-16 mb-32 md:text-[24px]">
        <h1 className="text-[24px] text-center leading-[48px] font-bold border-y-[1px] border-y-[#000000]">Tech Stack</h1>
        <div className="my-8">
          <ul className="list-disc text-[16px] md:text-[20px] list-inside mt-2">
            <li>Languages: JavaScript, TypeScript, Java</li>
            <li>Frontend: React, Next.js, Angular</li>
            <li>Backend: Node.js, Express, Spring Boot</li>
            <li>Databases: PostgreSQL, MongoDB</li>
            <li>Cloud: AWS (EC2, S3, RDS, Lambda)</li>
            <li>Version Control: Git, GitHub</li>
            <li>Project Management: Jira, Backlog</li>
          </ul>
        </div>
      </div>
    </div>
  </>
}