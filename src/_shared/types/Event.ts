// src/types/Event.ts
export interface EventDTO {
    id: number;
    title: string;
    begins: string;         
    ends:   string;
    link?: string | null;
    location?: string | null;
    description?: string | null;
  }
  