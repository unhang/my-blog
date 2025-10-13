'use client';
import { useCallback, useEffect, useState } from 'react';
import { Eye, ChevronRight, ChevronLeft, X } from 'lucide-react';

import { ImageItem } from '@/type/ImageItem';
import Image from 'next/image';

export default function GalleryScroll({ imagesProp }: { imagesProp?: ImageItem[] }) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }


  const handleNextImage = useCallback(() => {
    if (selectedImage && imagesProp) {
      const currentIndex = imagesProp.findIndex(img => img.src === selectedImage.src);
      const nextIndex = (currentIndex + 1) % imagesProp.length;
      setSelectedImage(imagesProp[nextIndex]);
    }
  }, [selectedImage, imagesProp]);

  const handlePrevImage = useCallback(() => {
    if (selectedImage && imagesProp) {
      const currentIndex = imagesProp.findIndex(img => img.src === selectedImage.src);
      const prevIndex = (currentIndex - 1 + imagesProp.length) % imagesProp.length;
      setSelectedImage(imagesProp[prevIndex]);
    }
  }, [selectedImage, imagesProp]);

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // restore background scrolling
  }

  // close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'ArrowLeft':
          handlePrevImage();
          break;
        default:
          break;
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }

  }, [selectedImage, imagesProp]);

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
      {imagesProp && imagesProp.length > 0 ? (<div className="grid grid-cols-3 gap-[1px] my-8">
        {imagesProp.map((image, index) => (
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
      </div>) : null}

      <div className="my-[48px]">
        <p className="italic">More coming soon...</p>
      </div>

    </div>
  </>
}