export interface PlaseOfWork {
  dateTitle: string;
  companyName: string;
  description?: string;
  site?: string;
  post?: string;
  responsibilities?: string[];
  projects?: Project[];
  technologies?: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies?: string[];
}
