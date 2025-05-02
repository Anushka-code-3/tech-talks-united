
import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { FilterOptions } from '@/types/event';
import { format } from 'date-fns';

interface EventFiltersProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  colleges: string[];
  locations: string[];
}

const EventFilters: React.FC<EventFiltersProps> = ({ 
  filters, 
  setFilters,
  colleges,
  locations
}) => {
  const handleFilterChange = (key: keyof FilterOptions, value: string | Date | null) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search events..."
            className="pl-9"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select 
            value={filters.type || ''} 
            onValueChange={(value) => handleFilterChange('type', value || null)}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              <SelectItem value="hackathon">Hackathon</SelectItem>
              <SelectItem value="tech-talk">Tech Talk</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
            </SelectContent>
          </Select>

          <Select 
            value={filters.college || ''} 
            onValueChange={(value) => handleFilterChange('college', value || null)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="College" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Colleges</SelectItem>
              {colleges.map(college => (
                <SelectItem key={college} value={college}>{college}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select 
            value={filters.location || ''} 
            onValueChange={(value) => handleFilterChange('location', value || null)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Locations</SelectItem>
              {locations.map(location => (
                <SelectItem key={location} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className="w-[140px] justify-start text-left font-normal"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {filters.date ? format(filters.date, 'PP') : <span>Pick date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={filters.date || undefined}
                onSelect={(date) => handleFilterChange('date', date)}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
          
          <Button 
            variant="ghost" 
            onClick={() => setFilters({
              search: '',
              type: null,
              college: null,
              location: null,
              date: null
            })}
            className="text-tech-purple"
          >
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventFilters;
