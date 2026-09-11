import bannerImg from '../assets/banner-stack.png'; 

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-transparent bg-clip-text">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare them side-by-side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Explore Technologies
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-pink-500 hover:text-pink-500 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
         
          <img 
            src={bannerImg} 
            alt="Dev Stack 3D Banner" 
            className="max-w-full h-auto rounded-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}