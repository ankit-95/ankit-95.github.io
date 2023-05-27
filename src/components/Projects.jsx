import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Projects = () => {
  const { Projects } = content;
  return (
    <section id="projects" className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[23rem]"
          ></img>
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            modules={[Pagination]}
            spaceBetween={20}
            className="rounded-3xl pb-16 md:max-w-xl max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins"> {content.title}</h5>
                  <p className="font-semibold font-Poppins">
                    {content.subTitle}
                  </p>
                  {content.url == "" && (
                    <button
                      disabled
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end"
                    >
                      Live Demo
                    </button>
                  )}
                  {content.url && (
                    <button
                      onClick={() => window.open(content.url)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end"
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
