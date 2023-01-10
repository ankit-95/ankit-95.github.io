import { content } from "../Content";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q2bsx0y",
        "template_yv0jztp",
        form.current,
        "lg2yOuC7mTTHNEO3g"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email send SuccessFully.");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-dark_primary text-white">
      <Toaster />
      <div className="md:container px-5 pt-14">
        <div>
          <h2 className="title !text-white" data-aos="fade-down">
            {" "}
            {Contact.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {" "}
            {Contact.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            data-aos="fade-up"
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required=""
            ></textarea>
            <button
              className="btn self-start
 bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 430}
                  className="flex items-center gap-2 "
                >
                  <h4 className="text-white">
                    {React.createElement(content.icon)}
                  </h4>
                  <a
                    className="font-Poppins"
                    href={content.link}
                    target="_blank"
                  >
                    {content.text}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Contact;
