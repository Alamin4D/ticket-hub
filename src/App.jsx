import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import { initialTickets } from './data/tickets';

function App() {
  // State for all tickets
  const [tickets, setTickets] = useState(initialTickets);
  
  // State for tasks in progress (right side panel)
  const [inProgressTasks, setInProgressTasks] = useState([]);
  
  // State for resolved tickets
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // Add ticket to task status section
  const handleAddToTask = (ticket) => {
    // Check if already in progress
    if (inProgressTasks.find(task => task.id === ticket.id)) {
      toast.warning('This ticket is already in progress!', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Add to in progress tasks
    setInProgressTasks([...inProgressTasks, ticket]);
    
    // Remove from available tickets
    setTickets(tickets.filter(t => t.id !== ticket.id));

    // Show success toast
    toast.success(`Ticket #${ticket.id} added to In Progress!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // Complete a task
  const handleCompleteTask = (task) => {
    // Remove from in progress
    setInProgressTasks(inProgressTasks.filter(t => t.id !== task.id));
    
    // Add to resolved
    setResolvedTickets([...resolvedTickets, task]);

    // Show success toast
    toast.success(`Ticket #${task.id} has been resolved!`, {
      position: "top-right",
      autoClose: 3000,
      icon: "✅",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toast Container */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* Navbar */}
      <Navbar />

      {/* Banner with Stats */}
      <Banner 
        inProgressCount={inProgressTasks.length} 
        resolvedCount={resolvedTickets.length} 
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Ticket Cards Grid */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Customer Tickets
                <span className="ml-2 bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                  {tickets.length}
                </span>
              </h2>
            </div>

            {tickets.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-md">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">All Tickets Resolved!</h3>
                <p className="text-gray-500">Great job! You've resolved all customer tickets.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tickets.map((ticket) => (
                  <TicketCard 
                    key={ticket.id} 
                    ticket={ticket} 
                    onAddToTask={handleAddToTask}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Task Status */}
          <div className="lg:w-1/3">
            <TaskStatus 
              tasks={inProgressTasks} 
              onComplete={handleCompleteTask}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
