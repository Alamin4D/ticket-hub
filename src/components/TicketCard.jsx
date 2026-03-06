const TicketCard = ({ ticket, onAddToTask }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'High':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Low':
        return 'bg-green-100 text-green-700 border-green-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div
      onClick={() => onAddToTask(ticket)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 cursor-pointer border border-gray-100 hover:border-purple-300 transform hover:-translate-y-1"
    >
      {/* Header with ID and Priority */}
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs text-gray-500 font-mono">#{ticket.id}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(ticket.priority)}`}>
          {ticket.priority}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
        {ticket.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {ticket.description}
      </p>

      {/* Footer with Customer and Date */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {ticket.customer.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="ml-2 text-sm text-gray-700 font-medium">
            {ticket.customer}
          </span>
        </div>
        <span className="text-xs text-gray-400">{ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;
