'use client';
import fb from '@/public/images/facebook-logo.svg';

function Footer() {
  return <>
    <div className="w-full mt-[32px] h-[72px] border-t border-[#000000]">
      <div className="p-[32px] md:max-w-[768px] lg:mx-auto">
        <a className="hover:cursor-pointer" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img className="w-[32px] h-[32px]" src={fb} alt="" />
        </a>
      </div>
    </div>
  </>
}

export default Footer;