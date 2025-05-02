
import React, { useState } from 'react';
import { mockEvents, getUniqueColleges } from '@/lib/mock-data';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const allColleges = getUniqueColleges();

  // Filter colleges based on search term
  const filteredColleges = searchTerm 
    ? allColleges.filter(college => 
        college.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allColleges;
  
  // Count events per college
  const collegeEventCounts = allColleges.reduce<Record<string, number>>((acc, college) => {
    acc[college] = mockEvents.filter(event => event.college === college).length;
    return acc;
  }, {});

  // Group colleges by first letter for an alphabetical display
  const groupedColleges = filteredColleges.reduce<Record<string, string[]>>(
    (acc, college) => {
      const firstLetter = college.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(college);
      return acc;
    },
    {}
  );

  // Sort letters alphabetically
  const sortedLetters = Object.keys(groupedColleges).sort();

  return (
    <div className="min-h-screen bg-tech-light-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-tech-purple to-tech-blue bg-clip-text text-transparent mb-2">
            Explore Colleges
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover tech events from colleges around the country.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto mb-8 relative">
          <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search colleges..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {filteredColleges.length === 0 ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No colleges found</h3>
            <p className="text-gray-500">Try a different search term</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6">
            {sortedLetters.map((letter) => (
              <div key={letter} className="mb-8">
                <h2 className="text-xl font-bold text-tech-purple mb-4 border-b pb-2">{letter}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedColleges[letter].map((college) => (
                    <Link
                      key={college}
                      to={`/?college=${encodeURIComponent(college)}`}
                      className="p-4 border border-gray-100 rounded-lg hover:border-tech-purple hover:shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-lg">{college}</h3>
                      <p className="text-gray-500 text-sm">
                        {collegeEventCounts[college]} {collegeEventCounts[college] === 1 ? 'event' : 'events'}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Colleges;
