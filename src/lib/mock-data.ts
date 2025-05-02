
import { Event } from '@/types/event';
import { addDays } from 'date-fns';

// Generate dates relative to current date
const today = new Date();
const tomorrow = addDays(today, 1);
const nextWeek = addDays(today, 7);
const twoWeeksFromNow = addDays(today, 14);

export const mockEvents: Event[] = [
  {
    id: "1",
    name: "Silicon Valley Hackathon 2025",
    description: "Join us for a 48-hour coding marathon to build innovative solutions for real-world problems. Prizes include internship opportunities and the latest tech gadgets.",
    date: twoWeeksFromNow.toISOString(),
    time: "09:00",
    type: "hackathon",
    college: "Stanford University",
    location: "Palo Alto, CA",
    link: "https://example.com/sv-hackathon",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "2",
    name: "AI Innovation Tech Talk",
    description: "Learn about the latest advancements in artificial intelligence from industry experts. The talk will cover machine learning, neural networks, and practical applications of AI.",
    date: tomorrow.toISOString(),
    time: "15:00",
    type: "tech-talk",
    college: "MIT",
    location: "Cambridge, MA",
    link: "https://example.com/ai-tech-talk",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "3",
    name: "Web Development Workshop",
    description: "A hands-on workshop on modern web development techniques using React, Node.js, and GraphQL. Perfect for beginners and intermediate developers looking to enhance their skills.",
    date: nextWeek.toISOString(),
    time: "10:00",
    type: "workshop",
    college: "UC Berkeley",
    location: "Berkeley, CA",
    link: "https://example.com/web-dev-workshop",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "4",
    name: "Cybersecurity Challenges",
    description: "Test your cybersecurity skills in this challenging workshop. You'll learn about common vulnerabilities, ethical hacking techniques, and how to protect systems from attacks.",
    date: addDays(today, 3).toISOString(),
    time: "13:30",
    type: "workshop",
    college: "Georgia Tech",
    location: "Atlanta, GA",
    link: "https://example.com/cybersecurity",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "5",
    name: "Future of Blockchain Tech Talk",
    description: "Explore how blockchain technology is evolving beyond cryptocurrency. Industry leaders will discuss real-world applications in supply chain, healthcare, and more.",
    date: addDays(today, 4).toISOString(),
    time: "17:00",
    type: "tech-talk",
    college: "Cornell University",
    location: "Ithaca, NY",
    link: "https://example.com/blockchain-talk",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "6",
    name: "Data Science Bootcamp",
    description: "An intensive weekend bootcamp covering data analysis, visualization, and machine learning fundamentals. Bring your laptop and be ready to dive into Python, pandas, and scikit-learn.",
    date: addDays(today, 10).toISOString(),
    time: "09:00",
    type: "workshop",
    college: "University of Washington",
    location: "Seattle, WA",
    link: "https://example.com/data-bootcamp",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "7",
    name: "Women in Tech Hackathon",
    description: "A special hackathon designed to promote diversity in tech. Participants will work on projects focused on solving social issues through technology.",
    date: addDays(today, 21).toISOString(),
    time: "10:00",
    type: "hackathon",
    college: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    link: "https://example.com/women-in-tech",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "8",
    name: "Mobile App Development Workshop",
    description: "Learn to build native mobile applications using React Native. This hands-on workshop will guide you through building your first cross-platform mobile app.",
    date: addDays(today, 5).toISOString(),
    time: "14:00",
    type: "workshop",
    college: "UCLA",
    location: "Los Angeles, CA",
    link: "https://example.com/mobile-workshop",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "9",
    name: "Quantum Computing Frontiers",
    description: "A fascinating tech talk on the current state and future potential of quantum computing, delivered by leading researchers in the field.",
    date: addDays(today, 15).toISOString(),
    time: "16:30",
    type: "tech-talk",
    college: "Caltech",
    location: "Pasadena, CA",
    link: "https://example.com/quantum-talk",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: "10",
    name: "IoT Innovation Challenge",
    description: "A hackathon focused on Internet of Things projects. Work with the latest sensors, microcontrollers, and cloud platforms to build connected devices.",
    date: addDays(today, 18).toISOString(),
    time: "09:00",
    type: "hackathon",
    college: "Purdue University",
    location: "West Lafayette, IN",
    link: "https://example.com/iot-challenge",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  }
];

// Extract unique colleges and locations for filters
export const getUniqueColleges = (): string[] => {
  return Array.from(new Set(mockEvents.map(event => event.college)));
};

export const getUniqueLocations = (): string[] => {
  return Array.from(new Set(mockEvents.map(event => event.location)));
};
