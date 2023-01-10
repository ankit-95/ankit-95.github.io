import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="md:container px-5 pt-14">
        <div>
          <h2 className="title" data-aos="fade-down">
            {" "}
            {Testimonials.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {" "}
            {Testimonials.subtitle}
          </h4>
          <br />
          <Swiper
            direction="vertical"
            loop={true}
            data-aos="fade-up"
            slidesPerView={1.7}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={20}
            onSlideChange={(e) => {
              console.log(e.realIndex);
              setActiveIndex(e.realIndex);
            }}
            className="md:h-96 h-[40rem] max-w-3xl"
          >
            {Testimonials.testimonials_content.map((content, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className={` duration-500 bg-bg_light_primary mx-8 border-2 
                p-8 h-full rounded-2xl flex items-center gap-6
                 border-slate-200 md:flex-row flex-col
                  ${activeIndex !== i && "scale-75 blur-sm"}`}
                  >
                    <img src={content.img} alt="..." className="h-24"></img>
                    <div>
                      <p className="sm:text-base text-sm">{content.review}</p>
                      <br />
                      <h6>{content.name}</h6>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
