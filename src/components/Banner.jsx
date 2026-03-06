const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Customer Support Dashboard
          </h2>
          <p className="text-purple-200 text-lg">
            Manage and track your support tickets efficiently
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
          {/* In Progress Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[200px] transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-yellow-800 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ animationDuration: '3s' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span className="text-xl font-semibold">In Progress</span>
            </div>
            <p className="text-5xl font-bold text-yellow-300">{inProgressCount}</p>
            <p className="text-purple-200 text-sm mt-2">Tickets being worked on</p>
          </div>

          {/* Resolved Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[200px] transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Resolved</span>
            </div>
            <p className="text-5xl font-bold text-green-300">{resolvedCount}</p>
            <p className="text-purple-200 text-sm mt-2">Tickets completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
