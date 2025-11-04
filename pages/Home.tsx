
import Me from '../public/Me4.jpg'

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">

      {/* Parent container with unified shadow */}
      <div
        className="relative flex flex-col md:flex-row w-11/12 md:w-4/5 h-5/6 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105"
        style={{ boxShadow: '0 35px 70px rgba(0,0,0,0.35)' }}
      >

        {/* LEFT: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <img
            src={Me}
            alt="Author"
            className="w-3/4 h-auto md:w-full md:h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center bg-gradient-to-l from-white via-cyan-100 to-white px-6 md:px-12 text-center">
          <div>
            <h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-10 transition-transform duration-500 hover:scale-105"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
            >
              Welcome to My Blog Webpage
            </h1>
            <p className="text-md md:text-lg text-gray-700 max-w-md leading-relaxed">
              Welcome to my web development blog, where code meets creativity—explore tutorials, tips, and insights on the latest web technologies to improve your skills and build amazing projects.
            </p>

            {/* CTA Button */}
            <a
              href="/post"
              className="mt-8 inline-block bg-cyan-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore Posts
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
