import Image from 'next/image';

import sakura from '@/public/images/posts/sakura.jpg';

export default function Post() {
	return (
		<div className='w-full min-h-[90vh] px-[32px] md:max-w-[768px] md:mx-auto'>
			<h1 className='text-[48px] my-4 italic font-bold'><span className=""></span>Stories of sharing</h1>
			<h1 className="">Where my little mind makes small talk</h1>

			{/* List of posts */}
			<div className='my-8'>
				<ul>
					<li>
						<div>
							<Image className='w-full' src={sakura} alt="sakura" />
							<span>On Jan 12, 2026</span>
							<h2 className='text-[24px] font-bold my-2'>Nhật Bản có màu gì thế?</h2>
							<p className='py-2'>by <span className='font-bold'>Hang Ung</span></p>
							<p className='mb-4 text-justify'>
								Nhật Bản có màu gì? Hồng hay đen?
								Đa phần chúng ta đều thấy trên các phương tiện truyền thông, Nhật Bản hiện lên với những hình ảnh tươi đẹp, rực rỡ. Cảnh vật thiên nhiên phong phú, văn hóa và đa dạng lễ hội đặc sắc, con người thân thiện, văn minh, lịch sự. Sẽ không nói quá nếu cho rằng khi nhắc đến đất nước này, sẽ có không ít những lời ngưỡng mộ
							</p>
							<a href="/post/nhat-ban-mau-gi-the" className='underline font-bold'>
								Read more...
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

