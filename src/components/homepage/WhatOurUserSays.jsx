import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { ReviewData } from "@/ReviewData/ReviewData";

const WhatOurUserSays = () => {
  const [visibleReviews, setVisibleReviews] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 9;
  const startIndex = currentPage * reviewsPerPage;
  const currentReviews = ReviewData.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * reviewsPerPage < ReviewData.length) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <section className="relative h-auto w-full ">
      <div className="xl:mx-[30px] 2xl:mx-14 bg-[#F2F2F2] xl:rounded-[50px] 2xl:rounded-[80px] shadow-[0px_8px_32px_2px_rgba(0,0,0,0.12)]">
        <div className="px-5 xl:px-10 2xl:px-[60px] 3xl:px-[120px] 4xl:px-[160px] py-10 xl:py-12 2xl:py-16 3xl:py-[120px]">
          {/* This is the title section */}
          <div className="text-center flex flex-col gap-y-2 ">
            <p
              data-aos="fade-in"
              data-aos-delay="100"
              className="text-[#050404] text-[32px] md:text-[40px] mb-1 2xl:text-[45px] 4xl:text-[72px] font-extrabold 2xl:leading-[72.8px]"
            >
              What Our <span className="text-[#B98D40]">Users</span> Say
            </p>
            <p
              data-aos="fade-in"
              data-aos-delay="100"
              className="text-[#545454] lg:text-lg 2xl:text-2xl font-normal 2xl:leading-[45.6px]"
            >
              We’ve helped over 1.5 milion individuals enhance their experience
            </p>
          </div>
          {/* This is the review section */}
          <div className="mt-8 2xl:mt-12">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 review-section overflow-y-hidden min-h-[850px] pb-[5px] justify-items-center`}
            >
              {currentReviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>

            <div className="flex w-full relative items-center justify-center ">
              <div className="items-center flex gap-x-3 2xl:gap-x-[20px]  flex-row">
                <button
                  className="max-w-[215px] mx-auto flex gap-2 py-2 2xl:py-4 px-5 2xl:px-8 text-center  text-[#050404] justify-center mt-4 bg-[#B98D40] rounded-[90px] border borer-[1px] border-solid  hover:border-[#A77C2E] hover:shadow-lg transition-all duration-300 hover:bg-transparent border-transparent hover:text-[#B98D40] text-base font-bold leading-[25.9px]"
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                >
                  Previous
                </button>
                <button
                  className="max-w-[215px] mx-auto flex gap-2 py-2 2xl:py-4 px-5 2xl:px-8 text-center  text-[#050404] justify-center mt-4 bg-[#B98D40] rounded-[90px] border borer-[1px] border-solid  hover:border-[#A77C2E] hover:shadow-lg transition-all duration-300 hover:bg-transparent border-transparent hover:text-[#B98D40] text-base font-bold leading-[25.9px]"
                  onClick={handleNext}
                  disabled={
                    (currentPage + 1) * reviewsPerPage >= ReviewData.length
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurUserSays;
