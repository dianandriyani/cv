export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface About {
  description: string;
  stats: Stat[];
}
