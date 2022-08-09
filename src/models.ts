export interface Episode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  rating: {
    average: number
  };
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
  links: object
}

export interface Quote {
  author: string;
  episode: string | number;
  image: string;
  quote: string;
  season: string | number;
}