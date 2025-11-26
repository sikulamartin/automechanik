import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface PriceItem {
  service: string;
  price: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}
