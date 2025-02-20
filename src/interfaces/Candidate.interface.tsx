// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: number;
    login: string;
    name?: string; // Optional, as not all users provide their name
    location?: string;
    avatar_url: string;
    email?: string | null; // Some users may not have a public email
    html_url: string;
    company?: string | null;
  }
  