const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
        Task Status
        <span className="ml-2 bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full">
          {tasks.length}
        </span>
      </h3>

      {tasks.length === 0 ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-gray-500">No tasks in progress</p>
          <p className="text-gray-400 text-sm">Click on tickets to add them here</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[500px] overflow-y-auto">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100 hover:border-purple-300 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800 text-sm flex-1 pr-2">
                  {task.title}
                </h4>
                <span className="text-xs text-gray-500 font-mono">#{task.id}</span>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-purple-600 font-medium">
                  {task.customer}
                </span>
                <button
                  onClick={() => onComplete(task)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                >
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;
