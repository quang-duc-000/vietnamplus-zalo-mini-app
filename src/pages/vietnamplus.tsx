import React, { createRef, useEffect, useRef, useState } from "react";
import { List, Page, Icon, useNavigate, Button, Swiper } from "zmp-ui";
import { openWebview } from "zmp-sdk/apis"
import SVGFire from "../assets/icons/local_fire_department.svg?react";
import SVGBalance from "../assets/icons/account_balance.svg?react";
import SVGSport from "../assets/icons/sports_handball.svg?react";
import SVGCurrency from "../assets/icons/currency_exchange.svg?react";
import SVGFlowsheet from "../assets/icons/flowsheet.svg?react";
import SVGVolunteer from "../assets/icons/volunteer_activism.svg?react";
import { SwiperRefObject } from "zmp-ui/swiper";

const VietnamPlusPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [currentBanner, setBanner] = useState(0)
  const swiperEl = useRef<SwiperRefObject>(null)

  const ItemsNavigate = [
    {
      logo: <SVGFire className="w-6 h-6 text-primary" />,
      title: "Tin nổi bật",
    },
    {
      logo: <SVGBalance className="w-6 h-6 text-primary" />,
      title: "Chính trị",
    },
    { logo: <SVGSport className="w-6 h-6 text-primary" />, title: "Thể thao" },
    {
      logo: <SVGCurrency className="w-6 h-6 text-primary" />,
      title: "Kinh tế",
    },
    {
      logo: <SVGFlowsheet className="w-6 h-6 text-primary" />,
      title: "Công nghệ",
    },
    {
      logo: <SVGVolunteer className="w-6 h-6 text-primary" />,
      title: "Đời sống",
    },
  ];

  const SwtichBanner = [
    {
      img: 'https://cdnimg.vietnamplus.vn/t690/Uploaded/ngtnnn/2023_09_27/TTXVN_2709Binhphuoc2.jpg',
      title: 'Chủ tịch nước Võ Văn Thưởng làm việc với Tỉnh ủy Bình Phước',
      subTitle: 'Chiều 27/9/2023, tại tỉnh Bình Phước, Chủ tịch nước Võ Văn Thưởng làm việc với Tỉnh ủy Bình Phước về Công tác Quốc phòng-An ninh, Đối ngoại và Cải cách Tư pháp.'
    },
    {
      img: 'https://cdnimg.vietnamplus.vn/t375/Uploaded/thpwoht/2023_09_27/ttx3.jpg',
      title: 'Tuyển sinh ĐH 2024: Hoàn thiện phương thức theo hướng đơn giản hóa',
      subTitle: 'Một nhiệm vụ trọng tâm của các cơ sở đào tạo được Bộ Giáo dục và Đào tạo chỉ rõ là hoàn thiện đề án, phương thức tuyển sinh năm 2024, khắc phục bất cập hiện nay.'
    },
    {
      img: 'https://cdnimg.vietnamplus.vn/t620/uploaded/thpwoht/2023_09_27/vna_potal_dai_hoi_thanh_nien_tien_tien_lam_theo_loi_bac_toan_quoc_lan_thu_vii__nam_2023_7002139.jpg', title: 'Tuyên dương 420 thanh niên tiêu biểu học tập và làm theo lời Bác', subTitle: 'Theo Bí thư Trung ương Đoàn Bùi Quang Huy 420 gương mặt được vinh doanh là 420 câu chuyện khác nhau nhưng mẫu số chung là đam mê, nhiệt huyết, sáng tạo của tuổi trẻ, lấy lời Bác dạy là kim chỉ nam.'
    },
    {
      img: 'https://cdnimg.vietnamplus.vn/t620/uploaded/pcfo/2023_09_27/ttxvn_2709_nong_do_con.jpg', title: 'Cảnh sát Giao thông ra quân xử lý quyết liệt vi phạm nồng độ cồn', subTitle: 'Việc xử lý vi phạm về trật tự, an toàn giao thông đặc biệt là vi phạm về nồng độ cồn một trong những nguyên nhân chính dẫn đến tai nạn giao thông là xuyên suốt, không có vùng cấm, không có ngoại lệ.'
    },
    {
      img: 'https://cdnimg.vietnamplus.vn/t620/uploaded/bokttj/2023_09_27/niger_sylvain_itte.jpg', title: 'Đại sứ Pháp rời khỏi Niger sau khi bị chính quyền quân sự trục xuất', subTitle: 'Hôm 31/8, chính quyền quân sự Niger đã lệnh cho Đại sứ Pháp tại Niger Sylvain Itte phải rời khỏi trong vòng 48 giờ để đáp trả hành động của Chính phủ Pháp mà họ cho là đi ngược lại lợi ích của Niger.'
    },
  ]

  function nextBanner() {
    if (!swiperEl.current) return;
    const currentActive = swiperEl.current.activeIndex

    if (currentActive < SwtichBanner.length - 1) {
      swiperEl.current.next()
      setBanner(currentActive + 1)
    } else if (currentActive === SwtichBanner.length - 1) {
      swiperEl.current.goTo(0)
      setBanner(0)
    }
  }

  useEffect(() => {
    const intervel = setInterval(nextBanner, 3000)
    return () => clearInterval(intervel)
  }, [])

  return (
    <Page className="px-4 py-10 min-h-screen" hideScrollbar>
      <h1 className="text-2xl font-black text-primary mb-5">Vietnamplus</h1>

      <Swiper ref={swiperEl} className="mb-4" afterChange={(i) => setBanner(i)}>
        {SwtichBanner.map((item, i) => (<Swiper.Slide>
          <img
            key={i}
            className="slide-img w-full h-full object-cover"
            src={item.img}
            alt="slide-1"
          />
        </Swiper.Slide>))}
      </Swiper>

      <h3 className="text-lg font-semibold mb-[6px]">
        {SwtichBanner[currentBanner].title}
      </h3>
      <p className="text-black text-opacity-50 mb-[30px]">
        {SwtichBanner[currentBanner].subTitle}
      </p>

      <div className="grid grid-cols-3 gap-x-[30px] gap-y-5 mb-[60px]">
        {ItemsNavigate.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-[22px] items-center rounded-[10px] py-5 bg-white cursor-pointer"
            style={{ filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))" }}
          >
            {item.logo}
            <p className="text-center text-sm font-bold">{item.title}</p>
          </div>
        ))}
      </div>

      <a href='https://www.vietnamplus.vn/' target="_blank">
        <button className="btn-primary text-2xl font-bold w-full">
          Khám phá
        </button>
      </a>

      <p className="text-center text-sm font-black mt-8">Phiên bản 1.0.0</p>
    </Page >
  );
};

export default VietnamPlusPage;
