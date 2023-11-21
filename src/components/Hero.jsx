import dp from "/public/pic.png";
const Hero = () => {
  const socialMedia = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
      id="home"
    >
      <div className="flex-1 flex items-center justify-center h-full md:py-0 py-8">
        <img
          src={dp}
          alt="my pic"
          className="md:w-9/12 w-10/12 h-full object-cover"
        />
      </div>
      <div className="flex-1 ">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl ">
              Hello! <br />
            </span>
            My Name is <span>Asadullah Imran</span>
          </h1>
          <h4 className=" md:text-2xl text-lg  md:leading-normal leading-10 mt-4 font-bold text-gray-600">
            Front-End Developer
          </h4>
          <button className="btn-primary mt-8">Contanct Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMedia.map((icon) => (
              <div key={icon} className="text-gray-600 hover:text-white">
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
