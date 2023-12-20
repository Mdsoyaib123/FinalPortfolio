const About = () => {
  return (
    <div id='About' className="py-8 bg-gradient-to-b from-gray-800 to-black text-white w-full h-full md:h-screen px-1 md:px-6">
      <div className="px-3 md:px-0 max-w-6xl mx-auto h-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold inline border-b-4 ">About</h1>
        <div className="space-y-4">
        <p className="text-lg md:text-xl mt-20">
          👋 Hello! I'm Soyaib Hossain , a passionate Web Developer
          specializing in the MERN (MongoDB, Express.js, React.js, Node.js)
          stack. With 1 years of hands-on experience in the development realm, I
          thrive on crafting innovative solutions and bringing ideas to life
          through code. <br></br> 
        </p>
        <p className="text-xl">🚀 My expertise lies in harnessing the power of
          JavaScript and its associated technologies - ReactJs for dynamic
          front-end experiences, NodeJs and ExpressJs for robust server-side
          development, along with MongoDB for efficient and scalable database
          solutions. I am also in the learning zone of Typescript and NextJs.</p>
        
        </div>
        
      </div>
    </div>
  );
};

export default About;
