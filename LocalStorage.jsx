export const employees = [
  {
    id: 1,
    name: "Ali Khan",
    email: "employee1@gmail.com",
    password: "123",
    taskList: {
      newTask: 2,
      completed: 2,
      active: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Design login page",
        taskDate: "2026-08-28",
        category: "Design",
        taskDescription:
          "Create a responsive login page design for the employee portal.",
        newTask: true,
        completed: false,
        failed: false,
        active: true,
      },
      {
        taskTitle: "Update company logo",
        taskDate: "2026-08-26",
        category: "Design",
        taskDescription:
          "Replace the old company logo across the dashboard.",
        newTask: false,
        completed: true,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Create dashboard layout",
        taskDate: "2026-08-29",
        category: "Development",
        taskDescription:
          "Build the initial layout for the employee dashboard.",
        newTask: true,
        completed: false,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Fix navbar responsiveness",
        taskDate: "2026-08-25",
        category: "Frontend",
        taskDescription:
          "Fix navigation issues on tablet and mobile screen sizes.",
        newTask: false,
        completed: true,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Prepare design documentation",
        taskDate: "2026-08-30",
        category: "Documentation",
        taskDescription:
          "Document the design system and reusable UI components.",
        newTask: false,
        completed: false,
        failed: false,
        active: true,
      },
    ],
  },

  {
    id: 2,
    name: "Sara Ahmed",
    email: "employee2@gmail.com",
    password: "123",
    taskList: {
      newTask: 2,
      completed: 1,
      active: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Develop user registration",
        taskDate: "2026-08-27",
        category: "Development",
        taskDescription:
          "Create a registration form with proper validation.",
        newTask: true,
        completed: false,
        failed: false,
        active: true,
      },
      {
        taskTitle: "Fix authentication bug",
        taskDate: "2026-08-24",
        category: "Backend",
        taskDescription:
          "Resolve the authentication issue affecting employee login.",
        newTask: false,
        completed: true,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Create API documentation",
        taskDate: "2026-08-29",
        category: "Documentation",
        taskDescription:
          "Write documentation for all employee management APIs.",
        newTask: true,
        completed: false,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Optimize database queries",
        taskDate: "2026-08-22",
        category: "Backend",
        taskDescription:
          "Improve database query performance for employee records.",
        newTask: false,
        completed: false,
        failed: true,
        active: false,
      },
    ],
  },

  {
    id: 3,
    name: "Usman Ali",
    email: "employee3@gmail.com",
    password: "123",
    taskList: {
      newTask: 1,
      completed: 2,
      active: 2,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Build employee profile",
        taskDate: "2026-08-28",
        category: "Frontend",
        taskDescription:
          "Create the employee profile page with editable information.",
        newTask: true,
        completed: false,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Implement search functionality",
        taskDate: "2026-08-27",
        category: "Development",
        taskDescription:
          "Add search functionality to find employees quickly.",
        newTask: false,
        completed: false,
        failed: false,
        active: true,
      },
      {
        taskTitle: "Create employee table",
        taskDate: "2026-08-25",
        category: "Frontend",
        taskDescription:
          "Build a responsive table to display employee information.",
        newTask: false,
        completed: true,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Add pagination",
        taskDate: "2026-08-23",
        category: "Development",
        taskDescription:
          "Add pagination to the employee management table.",
        newTask: false,
        completed: true,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Test employee dashboard",
        taskDate: "2026-08-30",
        category: "Testing",
        taskDescription:
          "Test all dashboard features and report any issues.",
        newTask: false,
        completed: false,
        failed: false,
        active: true,
      },
    ],
  },

  {
    id: 4,
    name: "Hassan Raza",
    email: "employee4@gmail.com",
    password: "123",
    taskList: {
      newTask: 1,
      completed: 2,
      active: 1,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Create admin dashboard",
        taskDate: "2026-08-28",
        category: "Development",
        taskDescription:
          "Build the main admin dashboard interface.",
        newTask: true,
        completed: false,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Implement task filtering",
        taskDate: "2026-08-26",
        category: "Frontend",
        taskDescription:
          "Allow admins to filter tasks based on their status.",
        newTask: false,
        completed: true,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Fix task status bug",
        taskDate: "2026-08-24",
        category: "Bug Fix",
        taskDescription:
          "Fix incorrect task status updates in the dashboard.",
        newTask: false,
        completed: false,
        failed: true,
        active: false,
      },
      {
        taskTitle: "Improve dashboard UI",
        taskDate: "2026-08-30",
        category: "Design",
        taskDescription:
          "Improve spacing, typography and overall dashboard usability.",
        newTask: false,
        completed: false,
        failed: false,
        active: true,
      },
      {
        taskTitle: "Setup notifications",
        taskDate: "2026-08-21",
        category: "Development",
        taskDescription:
          "Add notifications for newly assigned employee tasks.",
        newTask: false,
        completed: true,
        failed: false,
        active: false,
      },
    ],
  },

  {
    id: 5,
    name: "Ayesha Malik",
    email: "employee5@gmail.com",
    password: "123",
    taskList: {
      newTask: 2,
      completed: 1,
      active: 2,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Design employee cards",
        taskDate: "2026-08-29",
        category: "Design",
        taskDescription:
          "Design reusable cards for displaying employee information.",
        newTask: true,
        completed: false,
        failed: false,
        active: true,
      },
      {
        taskTitle: "Create responsive sidebar",
        taskDate: "2026-08-28",
        category: "Frontend",
        taskDescription:
          "Build a responsive sidebar for desktop and mobile devices.",
        newTask: true,
        completed: false,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Update task components",
        taskDate: "2026-08-25",
        category: "Development",
        taskDescription:
          "Update task components to support different task statuses.",
        newTask: false,
        completed: true,
        failed: false,
        active: false,
      },
      {
        taskTitle: "Test responsive design",
        taskDate: "2026-08-30",
        category: "Testing",
        taskDescription:
          "Test the application on different screen sizes.",
        newTask: false,
        completed: false,
        failed: false,
        active: true,
      },
      {
        taskTitle: "Improve loading performance",
        taskDate: "2026-08-31",
        category: "Optimization",
        taskDescription:
          "Optimize components and assets to improve application loading speed.",
        newTask: false,
        completed: false,
        failed: false,
        active: true,
      },
    ],
  },
];
export const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin= JSON.parse(localStorage.getItem("admin"));
  return {employees, admin};
};
