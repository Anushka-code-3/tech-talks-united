
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-tech-purple to-tech-blue rounded-md p-1">
            <span className="text-white font-bold">TTU</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-tech-purple to-tech-blue bg-clip-text text-transparent">
            Tech Talks United
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/events" className="text-gray-600 hover:text-tech-purple transition-colors">
            Events
          </Link>
          <Link to="/colleges" className="text-gray-600 hover:text-tech-purple transition-colors">
            Colleges
          </Link>
          <Link to="/submit">
            <Button className="bg-gradient-to-r from-tech-purple to-tech-blue hover:opacity-90">
              <CalendarPlus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
