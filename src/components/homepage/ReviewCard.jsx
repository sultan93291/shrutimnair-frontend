const ReviewCard = ({ review }) => {
  console.log(review, "this is a single review");

  return (
    <div className="rounded-[16px] p-5 xl:p-6 2xl:p-8 h-auto lg:min-h-[268px] bg-[#FFF] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10),_0px_2px_4px_-2px_rgba(16,24,40,0.06)] max-w-[480px]  group transition-all duration-500 hover:border-[#B68D40] cursor-pointer hover:bg-[#F5F0E4]">
      <div data-aos="fade-up" data-aos-delay="100">
        <p
          data-aos="fade-in"
          data-aos-delay="100"
          className="text-[#050404] text-base font-extrabold leading-6"
        >
          {review.author_name}
        </p>
        <p
          data-aos="fade-in"
          data-aos-delay="100"
          className="text-[#545454] text-sm leading-[25.2px]"
        >
          {review.author_company ? review.author_company : "unavailable"}
        </p>
        {/* Star rating */}
        {/* <div data-aos="fade-up" data-aos-delay="100" className="flex mt-4">
          {[...Array(review.rating)].map((_, index) => (
            <StarSvg key={index} />
          ))}
        </div> */}
        {/* Review text */}
        <p
          data-aos="fade-in"
          data-aos-delay="100"
          className="mt-3 2xl:mt-8 text-[#050404] lg:text-lg lg:leading-[28.8px]"
        >
          {`"${review.review_description.slice(0, 160)}${review.review_description.length > 160 ? "..." : ""
            }"`}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
