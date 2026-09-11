import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';
import technologiesData from './data/technologies.json';

function App() {
  const [stack] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Hero />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Explore the Technologies
            </h2>
            <p className="text-gray-600 mb-8">
              Pick one technology per category to build your ideal stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologiesData.map((tech) => (
                <TechnologyCard key={tech.id} tech={tech} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <StackSidebar stack={stack} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;