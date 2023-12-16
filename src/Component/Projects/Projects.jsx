const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full h-full text-white md:h-screen "
    >
      <div className="max-w-6xl mx-auto h-screen py-16" id="projects">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold inline border-b-4  ">
          Projects
        </h1>
        <div className="py-20">
            <div className="grid grid-cols-3  gap-10">
                <img className="h-56 object-cover" src="/src/assets/screencapture-blood-donation-a244f-web-app-2023-12-16-23_16_38.png" alt="" />
                <img className="h-56 object-cover" src="/src/assets/Sofiya hotel.png" alt="" />
                <img className="h-56 object-cover" src="/src/assets/Bistro boss.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
