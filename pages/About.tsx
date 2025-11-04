

const About = () => {
  return (
    <section className="bg-gradient-to-b from-cyan-100 via-white to-cyan-200 min-h-screen w-full py-20 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-6xl font-bold text-center mb-16">About Me</h1>

        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="text-left text-black text-xl space-y-6 shadow-2xl w-full h-full p-10">
            <p>
              Hi! I'm a passionate web developer who loves creating interactive websites and web applications. My goal is to combine creativity with functionality to build amazing projects.
            </p>
            <p>
              I specialize in front-end development with React, Tailwind CSS, and modern web technologies. Writing clean, maintainable code and designing user-friendly interfaces are my priorities.
            </p>
          </div>

          {/* Right Column */}
          <div className="text-left text-black text-xl space-y-6 shadow-2xl p-10">
            <p>
              I believe in balancing creativity and functionality in every project I work on. Problem-solving and learning new technologies keep my work exciting and innovative.
            </p>
            <p>
              Outside of coding, I enjoy exploring design trends, photography, and experimenting with UI/UX concepts to improve my projects.
            </p>
            <p>
              My mission is to build web experiences that are not only functional but also beautiful, leaving a lasting impression on users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
