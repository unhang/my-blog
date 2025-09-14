'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { Eye, ChevronRight, ChevronLeft, X } from 'lucide-react';

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

import hanabi1 from '@/public/images/hanabi/DSC04342.jpg';
import hanabi2 from '@/public/images/hanabi/DSC04357.jpg';
import hanabi3 from '@/public/images/hanabi/DSC04452.jpg';
import hanabi4 from '@/public/images/hanabi/DSC04461.jpg';
import hanabi5 from '@/public/images/hanabi/DSC04479.jpg';
import hanabi6 from '@/public/images/hanabi/DSC04500.jpg';


type ImageItem = {
  src: StaticImageData;
  alt: string;
};

const images: ImageItem[] = [
  { src: hanabi1, alt: 'one pixel of gallery' },
  { src: hanabi2, alt: 'one pixel of gallery' },
  { src: hanabi4, alt: 'one pixel of gallery' },
  { src: hanabi3, alt: 'one pixel of gallery' },
  { src: hanabi5, alt: 'one pixel of gallery' },
  { src: hanabi6, alt: 'one pixel of gallery' },
  // Ueno
  { src: ueno11, alt: 'one pixel of gallery' },
  { src: ueno12, alt: 'one pixel of gallery' },
  { src: ueno13, alt: 'one pixel of gallery' },
  { src: ueno21, alt: 'one pixel of gallery' },
  { src: ueno22, alt: 'one pixel of gallery' },
  { src: ueno23, alt: 'one pixel of gallery' },
  { src: ueno31, alt: 'one pixel of gallery' },
  { src: ueno32, alt: 'one pixel of gallery' },
  { src: ueno33, alt: 'one pixel of gallery' },
  { src: ueno41, alt: 'one pixel of gallery' },
  { src: ueno42, alt: 'one pixel of gallery' },
  { src: ueno43, alt: 'one pixel of gallery' },
  { src: ueno211, alt: 'one pixel of gallery' },
  { src: ueno212, alt: 'one pixel of gallery' },
  { src: ueno213, alt: 'one pixel of gallery' },
  { src: ueno221, alt: 'one pixel of gallery' },
  { src: ueno222, alt: 'one pixel of gallery' },
  { src: ueno223, alt: 'one pixel of gallery' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const handleImageClick = (image: ImageItem) => {
    console.log('Image clicked:', image);
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  const handleNextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.src === selectedImage.src);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  }

  const handlePrevImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.src === selectedImage.src);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  }

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // restore background scrolling
  }

  // close modal on escape key press
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
      if (e.key === 'ArrowRight' && selectedImage) {
        handleNextImage();
      }
      if (e.key === 'ArrowLeft' && selectedImage) {
        handlePrevImage();
      }
    });
  }


  return <>
    {/* image floating modal */}
    {selectedImage && (
      <div className='fixed inset-0 z-50 bg-black/90 overscroll-none'>
        <div className='mx-auto min-h-screen md:max-w-[768px]'>
          <div className='flex min-h-screen items-center justify-center'>
            <Image className='max-w-full max-h-full' src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
        <div className='absolute mx-auto md:max-w-[880px] inset-0 flex items-center justify-between p-4'>
          <button className='bg-white/75 p-2 rounded-full'>
            <ChevronLeft className='w-6 h-6 text-black' onClick={handlePrevImage} />
          </button>
          <button className='bg-white/75 p-2 rounded-full'>
            <ChevronRight className='w-6 h-6 text-black' onClick={handleNextImage} />
          </button>
        </div>
        <div className='absolute top-4 right-4'>
          <button onClick={closeModal} className='bg-black/50 p-2 rounded-full'>
            <X className='w-6 h-6 text-white' />
          </button>
        </div>
      </div>
    )}
    {/* image grid */}
    <div className='w-full min-h-[90vh] md:max-w-[768px] md:mx-auto'>
      <div className='px-[32px]'>
        <h1 className='text-[48px] my-4 italic font-bold'><span className="">が</span>allery,</h1>
        <h1 className="">where I share my favorite moments captured in time.</h1>
      </div>


      <div>
        <div className="grid grid-cols-3 gap-[1px] my-8">
          {images.map((image, index) => (
            <div 
              className='group hover:cursor-pointer h-auto aspect-square overflow-hidden relative'
              key={index} 
              onClick={() => handleImageClick(image)}
            >
              <Image className='w-full h-full object-cover'
                src={image.src}
                alt={image.alt} />
              <div className='absolute inset-0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center'>
                <div className='opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <Eye className='w-8 h-8 text-white' />
                  <p className='text-white font-bold'>View</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-[48px]">
          <p className="italic">More coming soon...</p>
        </div>
      </div>
    </div>
  </>
}