
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ExternalLink, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockEvents } from '@/lib/mock-data';
import { Event } from '@/types/event';
import { formatDateTime } from '@/lib/date-utils';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch event details
    const fetchEvent = () => {
      setTimeout(() => {
        const foundEvent = mockEvents.find(e => e.id === id);
        setEvent(foundEvent || null);
        setLoading(false);
      }, 300);
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-tech-light-bg">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="h-8 w-8 border-4 border-tech-purple border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading event details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-tech-light-bg">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Event Not Found</h1>
            <p className="text-gray-600">The event you're looking for doesn't exist or has been removed.</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-light-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-tech-purple hover:underline mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Events
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div 
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${event.image || '/placeholder.svg'})` }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 w-full">
                <Badge 
                  className={`
                    mb-3
                    ${event.type === 'hackathon' ? 'bg-tech-purple hover:bg-tech-purple/90' : ''}
                    ${event.type === 'tech-talk' ? 'bg-tech-blue hover:bg-tech-blue/90' : ''}
                    ${event.type === 'workshop' ? 'bg-tech-teal hover:bg-tech-teal/90' : ''}
                  `}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1).replace('-', ' ')}
                </Badge>
                <h1 className="text-3xl font-bold text-white mb-2">{event.name}</h1>
                <p className="text-white/90 text-lg">{event.college}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">About This Event</h2>
                <p className="text-gray-700 mb-6 whitespace-pre-line">{event.description}</p>
                
                <div className="mt-8">
                  <a 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-gradient-to-r from-tech-purple to-tech-blue hover:opacity-90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Event Website
                    </Button>
                  </a>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                  <h3 className="font-medium text-lg mb-4">Event Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-tech-purple mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Date & Time</p>
                        <p className="text-gray-600">{formatDateTime(event.date)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-tech-purple mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-tech-purple mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-gray-600">Varies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
