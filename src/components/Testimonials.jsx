import { testimonials } from "../constants";

/**
 * The Testimonials component renders a section that displays a heading, and a
 * set of testimonials. The testimonials are rendered in a responsive grid, with
 * each testimonial consisting of the text, an image of the user, the user's name
 * and company.
 *
 * @returns A JSX element representing the testimonials section.
 */

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide" id="testimonials">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying about us
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt="testimonial"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
