
export interface Prospect {
  name: string;
  title: string;
  company: string;
  email: string | null;
  phone: string | null;
  status: 'pending' | 'verified' | 'outdated';
}

export type UserRole = 'Sales' | 'Lead Gen Agency' | 'Marketing' | 'Rev Ops';

export interface EnrichmentResult {
  role: string;
  pitch: string;
}
