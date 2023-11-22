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
  const onButtonClick = () => {
    const pdfUrl = "../assets/Asadullah Imran CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse md:gap-6 items-center gap-12 px-10 max-w-6xl mx-auto ">
          <div>
            <div className="text-gray-300 my-3 ">
              <p>
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

              <button className="btn-primary" onClick={onButtonClick}>
                Download CV
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
