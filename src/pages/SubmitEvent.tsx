
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import EventForm from '@/components/EventForm';
import { Event } from '@/types/event';

const SubmitEvent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (formData: Omit<Event, 'id' | 'image'>) => {
    // In a real app, we would make an API call to save the event
    console.log('New event submitted:', formData);
    
    // Show success message and redirect
    toast({
      title: "Event submitted successfully!",
      description: "Thank you for contributing to our event collection.",
    });
    
    // Redirect to home page after a brief delay
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-tech-light-bg">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-tech-purple to-tech-blue bg-clip-text text-transparent mb-2">
            Submit an Event
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Know about a tech event happening at your college? Share it with the community!
          </p>
        </div>
        
        <EventForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default SubmitEvent;
