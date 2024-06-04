import React from "react";
import Step1Img from "../../assets/images/step1-img.png";
import FadeIn from "./FadeIn";
const steps = [
  {
    id: 1,
    title: "Step 1",
    heading: "Fill Out the Form",
    description: "Enter your home address and details in the form on our website to get started.",
    img: Step1Img,
    imgPosition: "right",
  },
  {
    id: 2,
    title: "Step 2",
    heading: "Schedule a Free Consultation",
    description: "We will contact you to schedule a free consultation to discuss your needs and evaluate your property.",
    img: Step1Img,
    imgPosition: "left",
  },
  {
    id: 3,
    title: "Step 3",
    heading: "Receive Your Cash Offer",
    description: "Get a no-obligation cash offer based on your property’s value and your situation.",
    img: Step1Img,
    imgPosition: "right",
  },
  {
    id: 4,
    title: "Step 4",
    heading: " Review and Accept the Offer",
    description: "Review the offer and terms. If you accept, choose your closing date that fits your schedule.	",
    img: Step1Img,
    imgPosition: "left",
  },
  {
    id: 5,
    title: "Step 5",
    heading: "Finalize the Sale",
    description: "Sign the necessary paperwork, and receive your cash payment. You can even stay in your home for up to 3 days after closing to make your move stress-free.	",
    img: Step1Img,
    imgPosition: "right",
  },
  // Add more steps as needed
];

const HowWeWork = () => {
  return (
	<FadeIn>
    <div className="px-4 md:px-10 mt-10 950:mt-[100px] xl:max-w-[1330px] xl:mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 mb-5">
        <h3 className="md:text-[55px] flex-1 md:leading-[75px] 950:text-[55px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-medium">
          How we work.
        </h3>
        <p className="text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[32px] 950:leading-[38.4px]">
          We cut out the unnecessary steps to make selling your home easy, fast, and stress-free.
        </p>
      </div>

      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`flex flex-col md:flex-row px-4 py-10 md:py-10 md:px-10 md:gap-20 bg-[#f9f9fb] rounded-[20px] ${
            index !== 0 ? "mt-10 md:mt-20" : ""
          }`}
        >
          {step.imgPosition === "left" && (
            <div>
              <img
                src={step.img}
                className="flex-1 mb-5 md:mb-0 pointer-events-none"
                alt="Moving background"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="md:text-[60px] flex-1 md:leading-[75px] 950:text-[55px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-black">
              {step.title}
            </h3>
            <p className="text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[32px] 950:leading-[38.4px]">
              {step.heading}
            </p>
            <p className="text-normal mb-5 md:mb-0 flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[38.4px]">
              {step.description}
            </p>
          </div>
          {step.imgPosition === "right" && (
            <div>
              <img
                src={step.img}
                className="flex-1 pointer-events-none"
                alt="Moving background"
              />
            </div>
          )}
        </div>
      ))}
    </div>
	</FadeIn>
  );
};

export default HowWeWork;
