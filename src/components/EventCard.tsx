
import React from 'react';
import { CalendarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Event } from '@/types/event';
import { formatDate } from '@/lib/date-utils';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300 animate-fade-in border border-gray-200 flex flex-col">
      <div 
        className="h-40 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${event.image || '/placeholder.svg'})`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black/60 via-transparent flex items-end">
          <div className="p-4 w-full">
            <Badge 
              className={`
                ${event.type === 'hackathon' ? 'bg-tech-purple hover:bg-tech-purple/90' : ''}
                ${event.type === 'tech-talk' ? 'bg-tech-blue hover:bg-tech-blue/90' : ''}
                ${event.type === 'workshop' ? 'bg-tech-teal hover:bg-tech-teal/90' : ''}
              `}
            >
              {event.type.charAt(0).toUpperCase() + event.type.slice(1).replace('-', ' ')}
            </Badge>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{event.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{event.college}</p>
        <div className="flex items-center text-sm text-gray-600">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{formatDate(event.date)}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{event.description}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link 
          to={`/event/${event.id}`}
          className="text-sm font-medium text-tech-purple hover:underline"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
