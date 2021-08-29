export interface Cerveja {
  id: string;
  name: string;
  brewery: string;
  style: string;
  abv: string;
  import: boolean;
};

export const emptyCerveja = {
  id: '',
  name: '',
  brewery: '',
  style: '',
  abv: '',
  import: false
};