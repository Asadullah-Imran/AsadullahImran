const About = () => {
  const info = [
    {
      text: "Years experience",
      count: "04",
    },
    {
      text: "Completed Project",
      count: "24",
    },
    {
      text: "Companies WOrk",
      count: "02",
    },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse md:gap-6 items-center gap-12 px-10 max-w-6xl mx-auto ">
          <div className="p-2">
            <div className="text-gray-300 my-3 ">
              <p className="text-justify leading-6 w-11/12">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                placeat vero minima, hic nisi praesentium commodi rem culpa
                velit nihil non dolores error corrupti accusamus reprehenderit
                voluptatibus sunt dolore dolorum.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((item) => (
                  <div key={item.text}>
                    <h3 className="md:text-4xl text 2xl font-semibold">
                      {item.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="cv.pdf" download="asad.pdf">
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src="/pic.png"
                alt="about pic"
                className="w-full object-cover bg-cyan-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
