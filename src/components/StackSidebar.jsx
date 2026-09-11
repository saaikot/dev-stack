export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
      <h3 className="text-xl font-bold text-gray-800">Your Stack</h3>
      <p className="text-sm text-gray-500 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center text-gray-400">
          <p>Your stack is empty</p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 border border-red-200 text-red-500 rounded-lg font-medium hover:bg-red-50 transition"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}