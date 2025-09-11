import Image from 'next/image';

import ueno11 from '@/public/images/ueno1/row-1-column-1.jpg';
import ueno12 from '@/public/images/ueno1/row-1-column-2.jpg';
import ueno13 from '@/public/images/ueno1/row-1-column-3.jpg';
import ueno21 from '@/public/images/ueno1/row-2-column-1.jpg';
import ueno22 from '@/public/images/ueno1/row-2-column-2.jpg';
import ueno23 from '@/public/images/ueno1/row-2-column-3.jpg';
import ueno31 from '@/public/images/ueno1/row-3-column-1.jpg';
import ueno32 from '@/public/images/ueno1/row-3-column-2.jpg';
import ueno33 from '@/public/images/ueno1/row-3-column-3.jpg';
import ueno41 from '@/public/images/ueno1/row-4-column-1.jpg';
import ueno42 from '@/public/images/ueno1/row-4-column-2.jpg';
import ueno43 from '@/public/images/ueno1/row-4-column-3.jpg';

import ueno211 from '@/public/images/ueno2/row-1-column-1.jpg';
import ueno212 from '@/public/images/ueno2/row-1-column-2.jpg';
import ueno213 from '@/public/images/ueno2/row-1-column-3.jpg';
import ueno221 from '@/public/images/ueno2/row-2-column-1.jpg';
import ueno222 from '@/public/images/ueno2/row-2-column-2.jpg';
import ueno223 from '@/public/images/ueno2/row-2-column-3.jpg';

export default function Gallery() {
  return <>
    <div className='w-full min-h-[90vh] px-[32px] md:max-w-[768px] md:mx-auto'>
      <h1 className="mt-8">Welcome to My</h1>
      <h1 className='text-[48px] italic font-bold'><span className="">が</span>allery,</h1>
      <h1 className="">where I share my favorite moments captured in time.</h1>

      <div>
        <div className="grid grid-cols-3 gap-1 my-8">
          <div>
            <Image className='w-full h-auto'
                  src={ueno11}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno12}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno13}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno21}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno22}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno23}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno31}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno32}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno33}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno41}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno42}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno43}
                  alt="Gallery coming soon" />
          </div>  
          <div>
            <Image className='w-full h-auto'
                  src={ueno211}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno212}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno213}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno221}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno222}
                  alt="Gallery coming soon" />
          </div>
          <div>
            <Image className='w-full h-auto'
                  src={ueno223}
                  alt="Gallery coming soon" />
          </div>  
        </div>
        <div className="my-[48px]">
          <p className="italic">More coming soon...</p> 
        </div>
      </div>
    </div>
  </>
}