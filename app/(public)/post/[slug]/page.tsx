import Image from 'next/image';

import sakura from '@/public/images/posts/sakura.jpg';
import sakura2 from '@/public/images/posts/sakura2.jpg';

export default function Page({
  params,
}: {
  params: { slug: string }
}) {
  console.log(params.slug);
  return (
    <div className="w-full min-h-[90vh] px-[32px] md:max-w-[768px] md:mx-auto">
      <h1 className='mt-8 text-[24px] md:text-[48px] my-4 text-center font-bold'>Nhật Bản Màu Gì Thế?</h1>
      <p className="text-center">On Jan 12, 2026</p>
      <p className='py-2 text-center'>by <span className='font-bold'>Hang Ung</span></p>
      <div>
        <Image className='w-full' src={sakura} alt="sakura" />
      </div>
      <div>
        <p className='text-justify py-4'>
          Nhật Bản có màu gì? Hồng hay đen?
          <br />Đa phần chúng ta đều thấy trên các phương tiện truyền thông, Nhật Bản hiện lên với những hình ảnh tươi đẹp, rực rỡ. Cảnh vật thiên nhiên phong phú, văn hóa và đa dạng lễ hội đặc sắc, con người thân thiện, văn minh, lịch sự. Sẽ không nói quá nếu cho rằng khi nhắc đến đất nước này, sẽ có không ít những lời ngưỡng mộ.
          <br />Cũng chính vì sự ngưỡng mộ ấy, sự mơ màng về màu hồng ấy, đã kéo tôi đến gần với Nhật Bản. Lúc ấy, Nhật Bản trong tôi đẹp thơ mộng.
        </p>
        <p className='text-justify py-4'>
          Tuổi 20, lần tôi đặt chân đến Nhật Bản, mọi thứ đối với tôi thật mới mẻ, lạ lẫm. Mọi thứ, mọi chi tiết trong đời sống, người Nhật làm việc gì cũng đều tỉ mỉ và công phu. Mỗi cái mới đối với tôi đều là sự bất ngờ.
          <br />Lần đầu thưởng thức mì ramen chỉ có bắp cải và giá, nhưng ngon đến khó tả.
          <br />Lần đầu biết đến cái lạnh tê tái đôi tay đến mức không thể cầm lái xe đạp.
          <br />Lần đầu biết cái nắng nóng của mùa hè làm ướt sũng áo, sau một buổi chiều đạp xe. Và cũng là lần đầu được ngắm nhìn cảnh sắc mùa xuân đẹp nhất bằng chính đôi mắt mình, mùa hoa anh đào mãn khai. Không biết phải dùng từ ngữ nào có thể mô tả được ấn tượng lúc ấy, tôi đã không tin nổi cảnh đẹp vừa hiện ra trước mắt. Chỉ vừa đi qua một con phố, hàng cây hoa anh đào chợt hiện ra, màu hoa phủ kín cả một vùng, cơn gió cuốn vô số cánh hoa vụt qua trước mắt, khung cảnh đẹp đến mức cảm động.
        </p>
        <div>
          <Image className='w-full' src={sakura2} alt="sakura" />
        </div>
        <p className='text-justify py-4'>
          Không thể phủ nhận Nhật Bản đẹp, song cũng như bao xã hội khác, Nhật Bản cũng tồn tại những vùng tối.
        </p>
        <p className='text-justify py-4'>
          Đối với người ngoại quốc như chúng ta, để tồn tại trong xã hội này, bắt buộc phải nói được tiếng Nhật, một trong những ngôn ngữ xếp hạng khó học nhất trên thế giới. Nếu bắt đầu từ con số 0, bạn bắt buộc phải tốn 2 đến 2.5 năm học theo chương trình tập trung để học hết từ sơ cấp đến thượng cấp. Có thể bạn phải đi du học trường tiếng, bạn sẽ đánh đổi thời gian, khi nhìn bạn bè khác đã tốt nghiệp ĐH, có công việc ổn định, thu nhập tốt. Và có thể, bạn sẽ mang món nợ lớn vì học phí, nếu tài chính gia đình không khá. Đây sẽ là một ván cược lớn nếu bạn không thành công.
        </p>
        <p className='text-justify py-4'>
          Một bộ phận người Nhật không thích người nước ngoài, có thể nói là nặng là kì thị người ngoại quốc. Thời làm baito phát báo,  tôi vẫn nhớ vì phát nhầm tờ báo, một ông bác trong tiệm tức giận đến mức đấm tay xuống bàn và quát lớn “ベトナムにかえれ！” , tức là “Cút về Việt Nam!”. Còn một ông bác khác không bao giờ bắt chuyện với mấy đứa Việt Nam cùng tiệm. Ai cũng đi làm vì cuộc sống mà, sao khắc nghiệt thế.
        </p>
        <p className='text-justify py-4'>
          Nhìn chung về con người, người Nhật tử tế, lịch sự, song cũng có người sống lạnh lùng và đơn độc. Văn hóa “không làm phiền đến ai” buộc họ phải xử lý tất cả mọi vấn đề trong cuộc sống một mình. Không ai làm phiền đến bất kỳ ai, bạn bè không làm phiền nhau, đồng nghiệp không làm phiền nhau. Bạn không thể gõ cửa nhà hàng xóm nhờ giúp đỡ nếu bạn chưa thử hết mọi cách để giải quyết sự cố nào đó. Kể cả là gia đình, cha mẹ cũng không làm phiền con cái, và ngược lại. Cũng có những bậc cha mẹ tuổi về già cũng sống trong đơn độc mà không có con cháu bên cạnh. Một bác khách hàng lớn tuổi ở buổi nomikai (tiệc nhậu) đã từng kể với giọng vui rằng nếu không nhận được cuộc điện thoại nào từ con cái, thì đó là tín hiệu chúng đang sống tốt và khỏe mạnh, nhưng nếu chúng gọi về nhà thì ắt hẳn đã xả ra chuyện gì đó lớn, sẽ phiền đây. Đối với người Việt, với văn hóa sống quây quần bên gia đình ông bà, cha mẹ, con cháu, đây có thể là điều rất khó hiểu, tại sao kể cả là người nhà, người Nhật lại sống tách biệt nhau đến thế.
        </p>
        <p className='text-justify py-4'>
          Đến cả trẻ em, chúng cũng được giáo dục để hành động và xử lý nhiều thứ một cách độc lập từ khi còn nhỏ. Sẽ không quá khó để bắt gặp đám nhóc mẫu giáo đi bộ đến trường mỗi buổi sáng mà không có cha mẹ đi cùng, hay cũng không ít lần tôi bắt những cu nhóc lon ton đi tàu điện một mình. Có phải vì quá độc lập nên khi trưởng thành, mỗi cá nhân lại càng trở nên tách biệt nhau đến thế không?

        </p>
        <p className='text-justify py-4'>
          Nếu sinh sống trong một xã hội ít kết nối con người như vậy, bạn có suy nghĩ như thế nào? Ở môi trường như Việt Nam, chỉ cần bước ra khỏi cửa đâu đâu cũng thấy người, náo nhiệt và vui vẻ. So với một môi trường chỉ cần đi khỏi bán kính 500m từ các nhà ga, sẽ không còn bóng người. Bạn có sợ sự cô độc này không?
        </p>
        <p className='text-justify py-4'>
          Nhìn chùng, ở trong môi trường cô độc và nếu để cho bản thân trở nên cô đơn, sớm muộn nó cũng sẽ hạ gục bạn. Hãy nhìn về hướng tích cực hơn, sự cô độc này cho ta nhiều thứ hơn ta nghĩ, không bị ai quấy rầy, bạn có nhiều thời gian hơn để tập trung vào những kế hoạch của bạn. Bạn sẽ thấy thật tự do để khám phá bản thân, làm những điều bạn có thể nghĩ ra. Với tôi, thích nghi được với sự cô độc của đất nước này, không đồng nghĩa rằng tôi thích nó, nhưng khi đặt lên so sánh bàn cân so sánh những thứ được và mất, tôi đã lựa chọn.
        </p>
        <p className='text-justify py-4'>
          Thích nghi và sống được ở đây, bạn sẽ sống được ở bất kì đâu, thấy tự do và không còn sợ ràng buộc nữa.
        </p>
        <p className='text-justify py-4'>
          Nhật Bản đối với tôi, có hồng và đen như thế.
          <br />Còn Nhật Bản trong bạn màu gì?
        </p>
        <p className='text-justify'></p>
      </div>
    </div>
  );
}
