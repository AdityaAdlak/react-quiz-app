const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    correctAnswer: "Library",
  },
  {
    question: "Which hook is used for state?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    correctAnswer: "useState",
  },
  {
    question: "JSX stands for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "Java XHR",
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    question: "Which company created React?",
    options: ["Google", "Facebook", "Amazon", "Microsoft"],
    correctAnswer: "Facebook",
  },
  {
    question: "Which hook runs after render?",
    options: ["useEffect", "useState", "useContext", "useRef"],
    correctAnswer: "useEffect",
  },
  {
    question: "Virtual DOM improves?",
    options: ["Speed", "Security", "Memory", "SEO"],
    correctAnswer: "Speed",
  },
  {
    question: "Props are?",
    options: ["Mutable", "Immutable", "Functions", "Hooks"],
    correctAnswer: "Immutable",
  },
  {
    question: "React is mainly used for?",
    options: ["Backend", "Database", "UI", "Testing"],
    correctAnswer: "UI",
  },
  {
    question: "useEffect dependency array is?",
    options: ["Optional", "Mandatory", "Deprecated", "Invalid"],
    correctAnswer: "Optional",
  },
  {
    question: "Keys in React lists help with?",
    options: ["Styling", "Routing", "Performance", "Security"],
    correctAnswer: "Performance",
  },
  {
    question: "What is the default port for React development server?",
    options: ["3000", "8080", "5000", "4200"],
    correctAnswer: "3000",
  },
  {
    question: "Which method is used to create a React app?",
    options: ["create-react-app", "init-react", "new-react", "react-init"],
    correctAnswer: "create-react-app",
  },
  {
    question: "What does ReactDOM.render() do?",
    options: [
      "Renders component to DOM",
      "Creates component",
      "Deletes component",
      "Updates state",
    ],
    correctAnswer: "Renders component to DOM",
  },
  {
    question: "What is a React Fragment?",
    options: [
      "Wrapper without extra DOM node",
      "A type of hook",
      "A styling method",
      "A routing component",
    ],
    correctAnswer: "Wrapper without extra DOM node",
  },
  {
    question: "Which hook is used for context?",
    options: ["useContext", "useState", "useEffect", "useReducer"],
    correctAnswer: "useContext",
  },
  {
    question: "What is the purpose of useRef?",
    options: [
      "Access DOM elements",
      "Manage state",
      "Handle effects",
      "Create context",
    ],
    correctAnswer: "Access DOM elements",
  },
  {
    question: "Which lifecycle method runs before render?",
    options: [
      "componentWillMount",
      "componentDidMount",
      "componentWillUpdate",
      "componentDidUpdate",
    ],
    correctAnswer: "componentWillMount",
  },
  {
    question: "What is Redux?",
    options: [
      "State management library",
      "Routing library",
      "Testing library",
      "Animation library",
    ],
    correctAnswer: "State management library",
  },
  {
    question: "Higher Order Component (HOC) is?",
    options: [
      "Function that takes component and returns component",
      "A type of hook",
      "A styling method",
      "A routing technique",
    ],
    correctAnswer: "Function that takes component and returns component",
  },
  {
    question: "What is React Router used for?",
    options: ["Navigation", "State management", "Styling", "Testing"],
    correctAnswer: "Navigation",
  },
  {
    question: "Which hook is used for memoization?",
    options: ["useMemo", "useState", "useEffect", "useContext"],
    correctAnswer: "useMemo",
  },
  {
    question: "What does useState return?",
    options: [
      "Array with state and setter",
      "Object with state",
      "Only state value",
      "Only setter function",
    ],
    correctAnswer: "Array with state and setter",
  },
  {
    question: "Pure components prevent?",
    options: [
      "Unnecessary re-renders",
      "State updates",
      "Props passing",
      "Event handling",
    ],
    correctAnswer: "Unnecessary re-renders",
  },
  {
    question: "What is lazy loading in React?",
    options: [
      "Loading components on demand",
      "Slow rendering",
      "Delayed state update",
      "CSS loading",
    ],
    correctAnswer: "Loading components on demand",
  },
  {
    question: "Which method creates a class component?",
    options: [
      "extends React.Component",
      "React.createClass",
      "new Component",
      "Component.create",
    ],
    correctAnswer: "extends React.Component",
  },
  {
    question: "What is React.memo()?",
    options: [
      "Memoizes functional component",
      "Creates state",
      "Handles effects",
      "Manages context",
    ],
    correctAnswer: "Memoizes functional component",
  },
  {
    question: "Controlled components are?",
    options: [
      "Form elements controlled by React state",
      "Components with no state",
      "Class components only",
      "HOCs",
    ],
    correctAnswer: "Form elements controlled by React state",
  },
  {
    question: "What is the purpose of useCallback?",
    options: [
      "Memoize callback functions",
      "Create state",
      "Handle side effects",
      "Access DOM",
    ],
    correctAnswer: "Memoize callback functions",
  },
  {
    question: "What is React StrictMode?",
    options: [
      "Development mode helper",
      "Production optimizer",
      "Testing tool",
      "Routing mode",
    ],
    correctAnswer: "Development mode helper",
  },
  {
    question: "What is prop drilling?",
    options: [
      "Passing props through multiple levels",
      "Validating props",
      "Destructuring props",
      "Defaulting props",
    ],
    correctAnswer: "Passing props through multiple levels",
  },
  {
    question: "What does React.Children.map() do?",
    options: [
      "Iterates over children props",
      "Creates new components",
      "Updates state",
      "Handles events",
    ],
    correctAnswer: "Iterates over children props",
  },
  {
    question: "What is React Suspense for?",
    options: [
      "Handle async operations",
      "Manage state",
      "Style components",
      "Route navigation",
    ],
    correctAnswer: "Handle async operations",
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "In-memory representation of real DOM",
      "Browser DOM",
      "Server-side DOM",
      "Shadow DOM",
    ],
    correctAnswer: "In-memory representation of real DOM",
  },
  {
    question: "What is reconciliation in React?",
    options: [
      "Diffing algorithm for updates",
      "State initialization",
      "Component mounting",
      "Error handling",
    ],
    correctAnswer: "Diffing algorithm for updates",
  },
  {
    question: "What is useReducer used for?",
    options: [
      "Complex state logic",
      "Simple state",
      "Side effects",
      "DOM access",
    ],
    correctAnswer: "Complex state logic",
  },
  {
    question: "What is React Portal?",
    options: [
      "Render children outside parent DOM",
      "State management",
      "Routing solution",
      "Animation library",
    ],
    correctAnswer: "Render children outside parent DOM",
  },
  {
    question: "What is the purpose of key prop?",
    options: [
      "Identify elements in lists",
      "Style elements",
      "Handle events",
      "Pass data",
    ],
    correctAnswer: "Identify elements in lists",
  },
  {
    question: "What is React.createRef()?",
    options: [
      "Create ref in class components",
      "Create state",
      "Create context",
      "Create effect",
    ],
    correctAnswer: "Create ref in class components",
  },
  {
    question: "What is forwardRef used for?",
    options: [
      "Pass refs to child components",
      "Forward state",
      "Forward props",
      "Forward context",
    ],
    correctAnswer: "Pass refs to child components",
  },
  {
    question: "What is React DevTools?",
    options: [
      "Browser extension for debugging",
      "Testing library",
      "Build tool",
      "Linting tool",
    ],
    correctAnswer: "Browser extension for debugging",
  },
  {
    question: "What is synthetic event in React?",
    options: [
      "Cross-browser event wrapper",
      "Custom event",
      "DOM event",
      "Window event",
    ],
    correctAnswer: "Cross-browser event wrapper",
  },
  {
    question: "What is componentDidMount used for?",
    options: [
      "After component renders",
      "Before component renders",
      "During render",
      "On unmount",
    ],
    correctAnswer: "After component renders",
  },
  {
    question: "What is componentWillUnmount for?",
    options: [
      "Cleanup before removal",
      "Initialize state",
      "Update component",
      "Render component",
    ],
    correctAnswer: "Cleanup before removal",
  },
  {
    question: "What is shouldComponentUpdate?",
    options: [
      "Optimize re-renders",
      "Initialize state",
      "Handle errors",
      "Fetch data",
    ],
    correctAnswer: "Optimize re-renders",
  },
  {
    question: "What is Error Boundary?",
    options: [
      "Catches JavaScript errors in components",
      "Validates props",
      "Handles routing errors",
      "Manages state errors",
    ],
    correctAnswer: "Catches JavaScript errors in components",
  },
  {
    question: "What is componentDidCatch?",
    options: [
      "Error boundary lifecycle method",
      "Data fetching method",
      "State update method",
      "Rendering method",
    ],
    correctAnswer: "Error boundary lifecycle method",
  },
  {
    question: "What is React.cloneElement()?",
    options: [
      "Clone and modify element",
      "Create new element",
      "Delete element",
      "Update element",
    ],
    correctAnswer: "Clone and modify element",
  },
  {
    question: "What is dangerouslySetInnerHTML?",
    options: [
      "Set HTML from string",
      "Sanitize HTML",
      "Validate HTML",
      "Parse HTML",
    ],
    correctAnswer: "Set HTML from string",
  },
  {
    question: "What is defaultProps?",
    options: [
      "Default values for props",
      "Required props",
      "Validated props",
      "Typed props",
    ],
    correctAnswer: "Default values for props",
  },
  {
    question: "What is PropTypes?",
    options: [
      "Runtime type checking",
      "Compile-time checking",
      "State validation",
      "Effect validation",
    ],
    correctAnswer: "Runtime type checking",
  },
  {
    question: "What does React.Fragment shorthand look like?",
    options: ["<>...</>", "<Fragment>", "<Frag>", "<Wrapper>"],
    correctAnswer: "<>...</>",
  },
  {
    question: "What is useImperativeHandle?",
    options: [
      "Customize ref value",
      "Handle state",
      "Handle effects",
      "Handle context",
    ],
    correctAnswer: "Customize ref value",
  },
  {
    question: "What is useLayoutEffect?",
    options: [
      "Synchronous effect after DOM mutations",
      "Async effect",
      "State hook",
      "Context hook",
    ],
    correctAnswer: "Synchronous effect after DOM mutations",
  },
  {
    question: "What is React Fiber?",
    options: [
      "New reconciliation algorithm",
      "State library",
      "Routing library",
      "Testing framework",
    ],
    correctAnswer: "New reconciliation algorithm",
  },
  {
    question: "What is code splitting?",
    options: [
      "Breaking code into chunks",
      "Minifying code",
      "Linting code",
      "Testing code",
    ],
    correctAnswer: "Breaking code into chunks",
  },
  {
    question: "What is React.lazy()?",
    options: [
      "Dynamic import for components",
      "Lazy state initialization",
      "Delayed rendering",
      "Slow loading",
    ],
    correctAnswer: "Dynamic import for components",
  },
  {
    question: "What is Context API?",
    options: [
      "Share data without prop drilling",
      "Manage routes",
      "Style components",
      "Test components",
    ],
    correctAnswer: "Share data without prop drilling",
  },
  {
    question: "What is React.createContext()?",
    options: [
      "Creates context object",
      "Creates component",
      "Creates state",
      "Creates effect",
    ],
    correctAnswer: "Creates context object",
  },
  {
    question: "What is useDebugValue?",
    options: [
      "Label custom hooks in DevTools",
      "Debug state",
      "Debug effects",
      "Debug props",
    ],
    correctAnswer: "Label custom hooks in DevTools",
  },
  {
    question: "What are uncontrolled components?",
    options: [
      "Form elements with DOM state",
      "Stateless components",
      "Class components",
      "HOCs",
    ],
    correctAnswer: "Form elements with DOM state",
  },
  {
    question: "What is React Helmet?",
    options: [
      "Manage document head",
      "State management",
      "Routing",
      "Testing",
    ],
    correctAnswer: "Manage document head",
  },
  {
    question: "What is React Testing Library?",
    options: [
      "Test React components",
      "Build components",
      "Style components",
      "Route components",
    ],
    correctAnswer: "Test React components",
  },
  {
    question: "What is Jest?",
    options: [
      "JavaScript testing framework",
      "React library",
      "Build tool",
      "Linter",
    ],
    correctAnswer: "JavaScript testing framework",
  },
  {
    question: "What is Enzyme?",
    options: [
      "Testing utility for React",
      "State management",
      "Routing library",
      "Animation library",
    ],
    correctAnswer: "Testing utility for React",
  },
  {
    question: "What is shallow rendering?",
    options: [
      "Render component one level deep",
      "Full component render",
      "No rendering",
      "Deep rendering",
    ],
    correctAnswer: "Render component one level deep",
  },
  {
    question: "What is snapshot testing?",
    options: [
      "Compare component output",
      "Performance testing",
      "Load testing",
      "Security testing",
    ],
    correctAnswer: "Compare component output",
  },
  {
    question: "What is React Hook Form?",
    options: [
      "Form validation library",
      "State management",
      "Routing solution",
      "Testing tool",
    ],
    correctAnswer: "Form validation library",
  },
  {
    question: "What is Formik?",
    options: [
      "Form library for React",
      "State library",
      "Router",
      "Test framework",
    ],
    correctAnswer: "Form library for React",
  },
  {
    question: "What is styled-components?",
    options: [
      "CSS-in-JS library",
      "State management",
      "Routing",
      "Testing",
    ],
    correctAnswer: "CSS-in-JS library",
  },
  {
    question: "What is CSS Modules?",
    options: [
      "Scoped CSS for components",
      "Global CSS",
      "Inline styles",
      "CSS framework",
    ],
    correctAnswer: "Scoped CSS for components",
  },
  {
    question: "What is Material-UI?",
    options: [
      "React component library",
      "State management",
      "Testing framework",
      "Build tool",
    ],
    correctAnswer: "React component library",
  },
  {
    question: "What is Ant Design?",
    options: [
      "UI component library",
      "State manager",
      "Router",
      "Testing tool",
    ],
    correctAnswer: "UI component library",
  },
  {
    question: "What is Chakra UI?",
    options: [
      "Component library",
      "State solution",
      "Build tool",
      "Test framework",
    ],
    correctAnswer: "Component library",
  },
  {
    question: "What is Next.js?",
    options: [
      "React framework for SSR",
      "State library",
      "Testing tool",
      "CSS framework",
    ],
    correctAnswer: "React framework for SSR",
  },
  {
    question: "What is Gatsby?",
    options: [
      "Static site generator",
      "State manager",
      "Test framework",
      "CSS library",
    ],
    correctAnswer: "Static site generator",
  },
  {
    question: "What is Server-Side Rendering (SSR)?",
    options: [
      "Render on server",
      "Render on client",
      "No rendering",
      "Lazy rendering",
    ],
    correctAnswer: "Render on server",
  },
  {
    question: "What is Static Site Generation (SSG)?",
    options: [
      "Generate HTML at build time",
      "Generate at runtime",
      "No generation",
      "Dynamic generation",
    ],
    correctAnswer: "Generate HTML at build time",
  },
  {
    question: "What is Incremental Static Regeneration?",
    options: [
      "Update static pages after build",
      "Update at runtime",
      "No updates",
      "Client-side updates",
    ],
    correctAnswer: "Update static pages after build",
  },
  {
    question: "What is Recoil?",
    options: [
      "State management library",
      "Routing solution",
      "Testing tool",
      "Build tool",
    ],
    correctAnswer: "State management library",
  },
  {
    question: "What is Zustand?",
    options: [
      "Lightweight state manager",
      "Router",
      "Test framework",
      "UI library",
    ],
    correctAnswer: "Lightweight state manager",
  },
  {
    question: "What is Jotai?",
    options: [
      "Atomic state management",
      "Routing library",
      "Testing tool",
      "CSS solution",
    ],
    correctAnswer: "Atomic state management",
  },
  {
    question: "What is MobX?",
    options: [
      "Observable state library",
      "Router",
      "Test tool",
      "Build tool",
    ],
    correctAnswer: "Observable state library",
  },
  {
    question: "What is Redux Toolkit?",
    options: [
      "Official Redux utilities",
      "Router",
      "Test framework",
      "UI library",
    ],
    correctAnswer: "Official Redux utilities",
  },
  {
    question: "What is React Query?",
    options: [
      "Data fetching library",
      "State manager",
      "Router",
      "Test tool",
    ],
    correctAnswer: "Data fetching library",
  },
  {
    question: "What is SWR?",
    options: [
      "Data fetching hook",
      "State hook",
      "Effect hook",
      "Ref hook",
    ],
    correctAnswer: "Data fetching hook",
  },
  {
    question: "What is React Spring?",
    options: [
      "Animation library",
      "State manager",
      "Router",
      "Test framework",
    ],
    correctAnswer: "Animation library",
  },
  {
    question: "What is Framer Motion?",
    options: [
      "Animation library",
      "State solution",
      "Routing tool",
      "Testing library",
    ],
    correctAnswer: "Animation library",
  },
  {
    question: "What is React DnD?",
    options: [
      "Drag and drop library",
      "State manager",
      "Router",
      "Test tool",
    ],
    correctAnswer: "Drag and drop library",
  },
  {
    question: "What is React Virtualized?",
    options: [
      "Efficiently render large lists",
      "Virtual DOM",
      "Virtual state",
      "Virtual routing",
    ],
    correctAnswer: "Efficiently render large lists",
  },
  {
    question: "What is React Window?",
    options: [
      "Windowing for lists",
      "Browser window API",
      "Modal library",
      "Routing solution",
    ],
    correctAnswer: "Windowing for lists",
  },
  {
    question: "What is the purpose of React.StrictMode?",
    options: [
      "Highlight potential problems",
      "Enforce strict typing",
      "Improve performance",
      "Enable production mode",
    ],
    correctAnswer: "Highlight potential problems",
  },
  {
    question: "What is Concurrent Mode in React?",
    options: [
      "Interruptible rendering",
      "Async state updates",
      "Parallel processing",
      "Multi-threading",
    ],
    correctAnswer: "Interruptible rendering",
  },
  {
    question: "What is React Server Components?",
    options: [
      "Components that render on server",
      "API components",
      "Database components",
      "Backend components",
    ],
    correctAnswer: "Components that render on server",
  },
  {
    question: "What is the purpose of useDeferredValue?",
    options: [
      "Defer non-urgent updates",
      "Delay rendering",
      "Cache values",
      "Validate input",
    ],
    correctAnswer: "Defer non-urgent updates",
  },
  {
    question: "What is useTransition?",
    options: [
      "Mark updates as non-urgent",
      "CSS transitions",
      "Page transitions",
      "State transitions",
    ],
    correctAnswer: "Mark updates as non-urgent",
  },
  {
    question: "What is useId?",
    options: [
      "Generate unique IDs",
      "Get component ID",
      "User identification",
      "Session ID",
    ],
    correctAnswer: "Generate unique IDs",
  },
  {
    question: "What is useSyncExternalStore?",
    options: [
      "Subscribe to external store",
      "Sync state",
      "External API calls",
      "Database sync",
    ],
    correctAnswer: "Subscribe to external store",
  },
  {
    question: "What is the purpose of React.PureComponent?",
    options: [
      "Shallow comparison of props and state",
      "Deep comparison",
      "No comparison",
      "Custom comparison",
    ],
    correctAnswer: "Shallow comparison of props and state",
  },
  {
    question: "What is hydration in React?",
    options: [
      "Attaching event listeners to SSR markup",
      "Adding water to components",
      "Loading data",
      "Initializing state",
    ],
    correctAnswer: "Attaching event listeners to SSR markup",
  },
  {
    question: "What is the difference between createElement and cloneElement?",
    options: [
      "createElement makes new, cloneElement copies existing",
      "No difference",
      "createElement copies, cloneElement makes new",
      "Both are deprecated",
    ],
    correctAnswer: "createElement makes new, cloneElement copies existing",
  },
];

export default questions;