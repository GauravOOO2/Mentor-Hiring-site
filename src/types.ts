export interface Service {
    title: string;
    description: string;
    price: string;
}

export interface Mentor {
    id: string;
    name: string;
    photo: string;
    title: string;
    summary: string;
    bio: string;
    location: string;
    skills: string[];
    hourlyRate: number;
    rating: number;
    availableSlots: {
        date: string;
        slots: string[];
    }[];
    services: Service[];
}


  export interface Slot {
    id: string
    startTime: string
    endTime: string
  }