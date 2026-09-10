import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Dev Stack</h1>
        <p className="text-gray-600 mt-2">Navbar is working!</p>
      </div>
    </div>
  );
}

export default App;