export default function TechnologyCard({ tech, onAdd, isAdded }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <span className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-800">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-1 grow">{tech.description}</p>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Category</span>
          <span className="font-medium text-gray-700">{tech.category}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Difficulty</span>
          <span className="font-medium text-gray-700">{tech.difficulty}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Rating</span>
          <span className="font-medium text-gray-700">⭐ {tech.rating}</span>
        </div>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full py-2 rounded-lg font-medium transition ${
          isAdded
            ? 'bg-green-100 text-green-700 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✔ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}