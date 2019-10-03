export interface Beer {
  id: number;
  name: string;
  style: string;
  label: string;
  desc: string;
  abv: number;
  ibu: number;
  brewery: Brewery;
}

interface Brewery {
  name: string;
  city: string;
  state: string;
  country: string;
}
