import portfolio1 from "@images/bpsa-cipondoh.jpg";
import portfolio2 from "@images/bpsa-lembang.jpg";
import portfolio3 from "@images/bpsa-bintaro.jpg";
import portfolio4 from "@images/bpsa-ciledug.jpeg";
import portfolio5 from "@images/bpsa-galeong.jpg";
import portfolio6 from "@images/bpsa-selapajang.jpg";
import portfolio7 from "@images/bpsa-karawaci.jpg";
import portfolio8 from "@images/bpsa-cikokol.jpg";
import portfolio9 from "@images/bpsa-maestro.jpg";

const jobData = [
  {
    id: 1,
    title: "Bandar Pelumas Cipondoh",
    alamat: "Freelance",
    date: "March 2020 - May 2020",
    description1: `
I developed a comprehensive Java-based desktop application designed to calculate the most efficient sea-port route by implementing advanced algorithms and user-friendly interfaces. The application utilizes the Dijkstra algorithm to determine the shortest path between multiple sea-port locations, combined with a fitness function to optimize route selection based on specific criteria such as distance, time efficiency, and operational constraints. To enhance the user experience, I integrated the SWT Map API to visualize the calculated routes, providing an interactive and intuitive map interface for users to analyze and interpret the optimal paths.`,
    description2: {
      title: "My Specific Responsibilities and Contributions to the Project",
      responsibilities: [
        {
          heading: "Designing and Developing the Map Interface",
          details: [
            "Created a dynamic and responsive user interface using Java Swing and the SWT Map API.",
            "Enabled users to input sea-port locations, view calculated routes, and interact with map-based visualizations."
          ]
        },
        {
          heading: "Implementing Core Algorithms",
          details: [
            "Applied the Dijkstra algorithm to calculate the shortest path between sea-port locations.",
            "Developed a custom fitness function to evaluate and optimize routes based on operational parameters (e.g., cost efficiency and travel duration)."
          ]
        },
        {
          heading: "Requirement Analysis and Client Collaboration",
          details: [
            "Engaged with clients to gather and analyze project requirements.",
            "Ensured the application met client needs for route optimization and data visualization.",
            "Maintained regular communication to align technical solutions with business objectives."
          ]
        },
        {
          heading: "Optimizing System Performance",
          details: [
            "Enhanced algorithm efficiency and memory utilization to process large datasets and multiple routing scenarios.",
            "Ensured fast and accurate performance under demanding conditions."
          ]
        },
        {
          heading: "Testing and Validation",
          details: [
            "Conducted extensive testing to validate the accuracy of route calculations.",
            "Ensured system reliability under real-world operating conditions."
          ]
        }
      ]
    },
    images: [portfolio1]
  },
  {
    id: 2,
    title: "Bandar Pelumas Lembang",
    alamat: "Internship",
    date: "July 2020 - October 2020",
    description1:
      "Joomva is a comprehensive e-learning management system (LMS) designed to facilitate school administration and remote learning. It provides teachers with tools to manage student data, course materials, and schedules, while offering students access to an integrated video conferencing platform for online classes. This system was developed using Vue.js for the front-end framework and Bootstrap to ensure a responsive and user-friendly interface across various devices.",
    description2: {
      title: "My Contributions and Responsibilities",
      responsibilities: [
        {
          heading: "Fullstack Development",
          details: [
            "Worked on both the front-end and back-end components of the system, ensuring a cohesive integration between the user interface and server-side processes."
          ]
        },
        {
          heading: "Frontend Development Using Vue.js",
          details: [
            "Designed and implemented interactive user interfaces with Vue.js, ensuring a smooth and intuitive user experience for both teachers and students."
          ]
        },
        {
          heading: "Responsive Design with Bootstrap",
          details: [
            "Utilized Bootstrap to create a responsive and mobile-friendly interface, ensuring the platform is accessible on desktops, tablets, and mobile devices."
          ]
        },
        {
          heading: "API Integration",
          details: [
            "Collaborated with the back-end team to integrate RESTful APIs, enabling seamless data communication between the front-end interface and the system’s core functionalities."
          ]
        },
        {
          heading: "User Experience (UX) Optimization",
          details: [
            "Improved the platform's usability by refining navigation, enhancing visual design, and optimizing load times to improve the overall user experience."
          ]
        },
        {
          heading: "Bug Fixing and Code Optimization",
          details: [
            "Identified and resolved issues within the codebase, improving system stability and optimizing performance for large datasets."
          ]
        }
      ]
    },
    images: [portfolio2]
  },
  {
    id: 3,
    title: "Bandar Pelumas Bintaro",
    alamat: "Intership",
    date: "October 2020 - January 2021",
    description1:
      "TitipPaket is an expedition courier app which cooperate with driver to send logistics. My project was developing the admin dashboard focus on table system and filter system.",
    images: [portfolio3]
  },
  {
    id: 4,
    title: "Bandar Pelumas Pedurenan",
    alamat: "Project-Based",
    date: "February 2021 - June 2021",
    description1:
      "Seighneur is an electron-desktop-based application built on website technology using React. This application is used to facilitate the inventory process of land assets",
    images: [portfolio4]
  },
  {
    id: 5,
    title: "Bandar Pelumas Galeong",
    alamat: "Final Thesis Project",
    date: "February 2021 - June 2021",
    description1:
      "A React based website application integrated with machine learning model to recognize entity of AJB document using Python and utilize Google Vision API to extract text of AJB document",
    images: [portfolio5]
  },
  {
    id: 6,
    title: "Bandar Pelumas Selapajang",
    alamat: "Contract",
    date: "January 2022 - April 2023",
    description1:
      "A React based website application integrated with machine learning model to recognize entity of AJB document using Python and utilize Google Vision API to extract text of AJB document",
    images: [portfolio6]
  },
  {
    id: 7,
    title: "Bandar Pelumas Karawaci",
    alamat: "Contract",
    date: "January 2022 - April 2023",
    description1:
      "A React based website application integrated with machine learning model to recognize entity of AJB document using Python and utilize Google Vision API to extract text of AJB document",
    images: [portfolio7]
  },
  {
    id: 8,
    title: "Bandar Pelumas Cikokol",
    alamat: "Contract",
    date: "January 2022 - April 2023",
    description1:
      "A React based website application integrated with machine learning model to recognize entity of AJB document using Python and utilize Google Vision API to extract text of AJB document",
    images: [portfolio8]
  },
  {
    id: 9,
    title: "Maestro by Bandar Pelumas",
    alamat: "Contract",
    date: "January 2022 - April 2023",
    description1:
      "A React based website application integrated with machine learning model to recognize entity of AJB document using Python and utilize Google Vision API to extract text of AJB document",
    images: [portfolio9, portfolio2, portfolio3, portfolio4]
  }
  // Add more job data as needed
];

export default jobData;
