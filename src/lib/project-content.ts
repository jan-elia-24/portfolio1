export const projectContent: Record<string, any> = {
  "portfolio1": {
    overview: "A modern developer portfolio built with Next.js 14, featuring dynamic GitHub integration, smooth animations, and case study pages.",
    role: "Full-Stack Developer & Designer",
    stack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Dynamic GitHub API integration for live project data",
      "Interactive case studies with table of contents",
      "Smooth page transitions and cursor effects", 
      "Fully responsive design with mobile-first approach",
      "PWA capabilities with installable app features"
    ],
    learnings: "Deepened my knowledge of Next.js App Router, optimized image loading, and implemented advanced animations while maintaining performance scores above 95 in Lighthouse."
  },
  
  "books-solution": {
    overview: "Full-stack book management application with JWT authentication, allowing users to browse books and save favorite quotes.",
    role: "Full-Stack Developer",
    stack: ["Angular 20", ".NET 9 API", "JWT", "Bootstrap", "TypeScript"],
    features: [
      "JWT authentication with protected routes",
      "CRUD operations for book management",
      "Separate 'My Quotes' section for personal collections",
      "Dark/light mode toggle",
      "Responsive design with mobile optimization"
    ],
    learnings: "Gained experience in Angular dependency injection, .NET Minimal APIs, and implementing secure authentication flows with JWT tokens."
  },
  
  "wordle": {
    overview: "Word guessing game clone with real-time feedback, timer, and persistent high score system using server-side rendering.",
    role: "Full-Stack Developer", 
    stack: ["React", "Node.js", "Express", "MongoDB", "EJS"],
    features: [
      "Color-coded letter feedback system",
      "Timer and attempt counter",
      "Server-rendered high score leaderboard",
      "Deterministic testing with mocked randomization",
      "Responsive design for all screen sizes"
    ],
    learnings: "Learned how to create engaging game mechanics, implement server-side rendering for dynamic content, and write comprehensive tests for game logic."
  },
  
  "escape-rooms": {
    overview: "Responsive website redesign for a hacker-themed escape room company, focusing on UX improvements and smooth animations.",
    role: "Frontend Developer & UX Designer",
    stack: ["HTML5", "CSS3", "JavaScript", "Git Collaboration"],
    features: [
      "Responsive design with mobile-first approach",
      "Smooth scroll animations and hover effects",
      "Improved accessibility and semantic HTML",
      "Cross-browser compatibility",
      "Team collaboration with Git version control"
    ],
    learnings: "Enhanced my CSS animation skills, learned effective team collaboration workflows, and improved understanding of responsive design principles across devices."
  },
  
  "jans-todo-list": {
    overview: "Clean and intuitive todo application with drag-and-drop functionality, categories, and local storage persistence.",
    role: "Frontend Developer",
    stack: ["React", "TypeScript", "CSS Modules", "Local Storage API"],
    features: [
      "Drag-and-drop task reorganization",
      "Category-based task organization",
      "Local storage data persistence",
      "Clean, minimalist UI design",
      "Keyboard shortcuts for power users"
    ],
    learnings: "Mastered React state management for complex UI interactions, implemented smooth drag-and-drop functionality, and created responsive layouts with CSS Grid."
  }
};

// Fallback content if project not found
export function getDefaultContent(repo: any) {
  return {
    overview: repo.description || "A project demonstrating modern web development practices.",
    role: "Developer",
    stack: repo.language ? [repo.language] : ["Various technologies"],
    features: [
      "Modern web development practices",
      "Clean code architecture", 
      "Responsive design implementation"
    ],
    learnings: "Gained valuable experience in software development and problem-solving through this project."
  };
}