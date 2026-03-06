# 🎫 TicketHub - Customer Support Dashboard

A modern, responsive customer support ticket management system built with React.js and Tailwind CSS.

## 🚀 Features

- **Navbar**: Logo and menu items with "New Ticket" button
- **Banner**: Gradient banner with live ticket statistics
- **Ticket Cards**: 15 realistic customer support tickets displayed in a responsive grid
- **Task Status Panel**: Track and manage tickets in progress
- **React-Toastify**: Beautiful toast notifications instead of alerts
- **Responsive Design**: Works on all device sizes

## 📋 React Concepts Explained

### 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript files.

**Example:**
```jsx
const element = <h1>Hello, World!</h1>;
```

**Why JSX is used:**
- Makes code more readable and easier to write
- Allows us to combine JavaScript logic with UI markup
- Provides compile-time error checking
- Enables component-based architecture
- JSX is compiled to `React.createElement()` calls by Babel

**JSX Rules:**
- Must return a single parent element
- Use `className` instead of `class`
- Use curly braces `{}` for JavaScript expressions
- Close all tags (self-closing tags need `/`)

---

### 2. What is the difference between State and Props?

| Feature | State | Props |
|---------|-------|-------|
| **Definition** | Data managed within a component | Data passed from parent to child |
| **Mutability** | Mutable (can be changed with setState) | Immutable (read-only) |
| **Ownership** | Owned by the component itself | Owned by parent component |
| **Purpose** | Store component's internal data | Pass data down the component tree |
| **Re-render** | Triggers re-render when changed | Triggers re-render when parent passes new value |

**State Example:**
```jsx
const [count, setCount] = useState(0);
// count is state, can be updated with setCount
```

**Props Example:**
```jsx
// Parent passes prop
<TicketCard ticket={ticketData} />

// Child receives prop
const TicketCard = ({ ticket }) => {
  // ticket is read-only here
}
```

---

### 3. What is the useState hook, and how does it work?

**useState** is a React Hook that allows functional components to manage state.

**Syntax:**
```jsx
const [state, setState] = useState(initialValue);
```

**How it works:**
1. `initialValue` - The initial value of the state
2. `state` - Current state value
3. `setState` - Function to update the state

**Example from this project:**
```jsx
// Managing tickets state
const [tickets, setTickets] = useState(initialTickets);

// Managing in-progress tasks
const [inProgressTasks, setInProgressTasks] = useState([]);

// Managing resolved tickets
const [resolvedTickets, setResolvedTickets] = useState([]);
```

**Key Points:**
- State updates trigger re-renders
- State updates are asynchronous
- Always use the setter function to update state
- Previous state can be accessed: `setCount(prev => prev + 1)`

---

### 4. How can you share state between components in React?

There are several ways to share state between components:

**a) Props Drilling (Parent to Child):**
```jsx
// Parent component
const Parent = () => {
  const [data, setData] = useState("Hello");
  return <Child data={data} />;
};

// Child component
const Child = ({ data }) => {
  return <p>{data}</p>;
};
```

**b) Callback Functions (Child to Parent):**
```jsx
// Parent component
const Parent = () => {
  const handleUpdate = (newValue) => {
    console.log(newValue);
  };
  return <Child onUpdate={handleUpdate} />;
};

// Child component
const Child = ({ onUpdate }) => {
  return <button onClick={() => onUpdate("New Value")}>Click</button>;
};
```

**Example from this project:**
```jsx
// In App.jsx (Parent)
const handleCompleteTask = (task) => {
  setInProgressTasks(inProgressTasks.filter(t => t.id !== task.id));
  setResolvedTickets([...resolvedTickets, task]);
};

// Passing to child
<TaskStatus tasks={inProgressTasks} onComplete={handleCompleteTask} />

// In TaskStatus.jsx (Child)
const TaskStatus = ({ tasks, onComplete }) => {
  // Using the callback
  <button onClick={() => onComplete(task)}>Complete</button>
};
```

**c) Context API (For Global State):**
```jsx
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
```

---

### 5. How is event handling done in React?

React event handling is similar to DOM events but with some differences:

**Key Differences:**
- Use camelCase for event names (onClick, not onclick)
- Pass a function as the event handler, not a string
- Prevent default behavior explicitly with `e.preventDefault()`

**Basic Event Handling:**
```jsx
const Button = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

**Event Handling with Parameters:**
```jsx
const TicketCard = ({ ticket, onAddToTask }) => {
  return (
    <div onClick={() => onAddToTask(ticket)}>
      Click to add ticket
    </div>
  );
};
```

**Common React Events:**
- `onClick` - Mouse click
- `onChange` - Form input change
- `onSubmit` - Form submission
- `onMouseEnter` / `onMouseLeave` - Mouse hover
- `onFocus` / `onBlur` - Input focus events
- `onKeyDown` / `onKeyUp` - Keyboard events

**Example from this project:**
```jsx
// Navbar toggle menu
const [isMenuOpen, setIsMenuOpen] = useState(false);

<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
  Toggle Menu
</button>

// Complete task button
const handleCompleteTask = (task) => {
  toast.success(`Ticket #${task.id} has been resolved!`);
};

<button onClick={() => onComplete(task)}>
  Complete
</button>
```

## 🛠️ Technology Stack

- **React.js** - UI Library
- **JavaScript (ES6+)** - Programming Language
- **Tailwind CSS** - Styling
- **React-Toastify** - Notifications
- **Vite** - Build Tool

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Collapsible mobile menu

## 🎨 Features in Action

1. **Adding Ticket to Task Status**: Click any ticket card to add it to the In Progress section
2. **Completing a Task**: Click the "Complete" button to resolve a ticket
3. **Real-time Stats**: Banner updates automatically with In Progress and Resolved counts
4. **Toast Notifications**: Beautiful notifications for all actions

## 📝 License

This project is open source and available under the MIT License.
