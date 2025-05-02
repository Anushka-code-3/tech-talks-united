
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EventCard from '@/components/EventCard';
import EventFilters from '@/components/EventFilters';
import { mockEvents, getUniqueColleges, getUniqueLocations } from '@/lib/mock-data';
import { Event, FilterOptions } from '@/types/event';
import { format, isEqual, parseISO, isFuture, isPast } from 'date-fns';

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    type: null,
    college: null,
    location: null,
    date: null,
  });
  
  // Get unique colleges and locations for filter dropdowns
  const colleges = getUniqueColleges();
  const locations = getUniqueLocations();

  // Initialize events on component mount
  useEffect(() => {
    setEvents(mockEvents);
  }, []);

  // Apply filters whenever events, filters, or active tab change
  useEffect(() => {
    let result = [...events];
    
    // First filter by tab (upcoming or past)
    if (activeTab === 'upcoming') {
      result = result.filter(event => isFuture(new Date(event.date)));
    } else {
      result = result.filter(event => isPast(new Date(event.date)));
    }
    
    // Then apply user-selected filters
    
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        event => 
          event.name.toLowerCase().includes(searchTerm) || 
          event.description.toLowerCase().includes(searchTerm) ||
          event.college.toLowerCase().includes(searchTerm)
      );
    }
    
    // Filter by event type
    if (filters.type) {
      result = result.filter(event => event.type === filters.type);
    }
    
    // Filter by college
    if (filters.college) {
      result = result.filter(event => event.college === filters.college);
    }
    
    // Filter by location
    if (filters.location) {
      result = result.filter(event => event.location === filters.location);
    }
    
    // Filter by date
    if (filters.date) {
      result = result.filter(event => {
        const eventDate = parseISO(event.date);
        return isEqual(
          new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()),
          new Date(filters.date!.getFullYear(), filters.date!.getMonth(), filters.date!.getDate())
        );
      });
    }
    
    // Sort events by date (closest first for upcoming, most recent first for past)
    if (activeTab === 'upcoming') {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    
    setFilteredEvents(result);
  }, [events, filters, activeTab]);

  return (
    <div className="min-h-screen bg-tech-light-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-tech-purple to-tech-blue bg-clip-text text-transparent mb-2">
            All Events
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse all tech talks, hackathons, and workshops.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as 'upcoming' | 'past')} className="mb-6">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        
        <EventFilters 
          filters={filters} 
          setFilters={setFilters}
          colleges={colleges}
          locations={locations}
        />
        
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Events;
