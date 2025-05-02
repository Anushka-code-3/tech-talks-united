
export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  type: 'hackathon' | 'tech-talk' | 'workshop';
  college: string;
  location: string;
  link: string;
  image?: string;
}

export interface FilterOptions {
  search: string;
  type: string | null;
  college: string | null;
  location: string | null;
  date: Date | null;
}
