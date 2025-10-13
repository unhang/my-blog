import { ImageItem } from '@/type/ImageItem';

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
import GalleryScroll from '@/ui/gallery';

const images: ImageItem[] = [
  // { src: hanabi1, alt: 'one pixel of gallery' },
  // { src: hanabi2, alt: 'one pixel of gallery' },
  // { src: hanabi4, alt: 'one pixel of gallery' },
  // { src: hanabi3, alt: 'one pixel of gallery' },
  // { src: hanabi5, alt: 'one pixel of gallery' },
  // { src: hanabi6, alt: 'one pixel of gallery' },
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

// export const getServerSideProps = (async () => {
//   // Fetch data from external API
//   const galleryImages: ImageItem[] = images
//   // Pass data to the page via props
//   return { props: { galleryImages } }
// }) satisfies GetServerSideProps<{ galleryImages: ImageItem[] }>

// export default function Gallery({ galleryImages }: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function Gallery() {
  // const [galleryImages, setGalleryImages] = useState<ImageItem[]>(images);

  // useEffect(() => { 
  //   setGalleryImages(images);
  //  }, []);   
  return <>
    {/* image grid */}
    <div className='w-full min-h-[90vh] md:max-w-[768px] md:mx-auto'>
      <div className='px-[32px]'>
        <h1 className='text-[48px] my-4 italic font-bold'><span className="">が</span>allery,</h1>
        <h1 className="">where I share my favorite moments captured in time.</h1>
      </div>
      {images && images.length > 0 && <GalleryScroll imagesProp={images} />}
    </div>
  </>
}