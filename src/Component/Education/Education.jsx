const Education = () => {
  return (
    <section
  id="Education"
  className="bg-gradient-to-b from-black via-black to-gray-800 text-white py-16 px-4"
>
  <div className="text-center mb-12">
    <h2 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
      Education
    </h2>
    <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-md"></div>
  </div>

  <div className="max-w-6xl mx-auto relative">
    {/* Vertical Line */}
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500"></div>

    {/* Timeline Item - Left (on md), stacked (on small screens) */}
    <div className="mb-16 flex flex-col md:flex-row md:items-center">
      <div className="md:w-1/2 md:pr-8  md:text-right text-center">
        <h3 className="text-2xl font-bold text-blue-500">SSC </h3>
        <p className="text-sm font-semibold text-gray-200 mt-1">
          JAN 2016 - MAY 2021 | <span className="font-bold"></span>
        </p>
        <div className="flex justify-end">
        <p className="mt-4 text-gray-300 max-w-md mx-auto md:mx-0">
        Successfully completed SSC with a strong academic record, laying a solid foundation in mathematics, science, and computer basics.
        </p>
        </div>
      </div>
      <div className="my-6 md:my-0 hidden md:flex w-6 h-6 bg-blue-500 border-4 border-blue-500 rounded-full z-10"></div>
      <div className="md:w-1/2"></div>
    </div>

    {/* Timeline Item - Right (on md), stacked (on small screens) */}
    <div className="mb-16 flex flex-col md:flex-row md:items-center">
      <div className="md:w-1/2"></div>
      <div className="my-6 md:my-0 hidden md:flex w-6 h-6 bg-gray-800 border-4 border-blue-500 rounded-full z-10"></div>
      <div className="md:w-1/2 md:pl-8 text-center md:text-left">
        <h3 className="text-2xl font-bold text-blue-500">Diploma in Engineering</h3>
        <p className="text-sm font-semibold text-gray-200 mt-1">
          <span className="font-bold"></span> | FEB 2021 - JULY 2025
        </p>
        <p className="mt-4 text-gray-300 max-w-md mx-auto md:mx-0">
        Currently pursuing a Diploma in Engineering with a focus on Computer Technology. Gaining hands-on experience in programming, database systems, and web development. Building real-world projects and strengthening problem-solving skills through practical coursework.

        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Education;
