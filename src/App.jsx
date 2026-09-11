import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

import technologiesData from './data/technologies.json';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  const timer = setTimeout(() => {
    setTechnologies(technologiesData);
    setIsLoading(false);
  }, 1000);
  return () => clearTimeout(timer);
}, []);

  const addToStack = (tech) => {
    const isAlreadyAdded = stack.find((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.error("Item removed from stack", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const removeAll = () => {
    setStack([]);
    toast.info("All items removed from stack", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Hero />

     <main className="grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Explore the Technologies
            </h2>
            <p className="text-gray-600 mb-8">
              Pick one technology per category to build your ideal stack.
            </p>

            {isLoading ? (
              <div className="flex flex-col justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-500">Loading technologies...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechnologyCard
                    key={tech.id}
                    tech={tech}
                    onAdd={addToStack}
                    isAdded={stack.some((item) => item.id === tech.id)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <StackSidebar
              stack={stack}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}
            />
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;