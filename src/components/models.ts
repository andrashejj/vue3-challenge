export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface PersonItem {
  birthday: string | null;
  email: string | null;
  firstname: string;
  gender: string | null;
  id: number;
  image: string | null;
  lastname: string;
  phone: string | null;
  website: string | null;
  address: {
    buildingNumber: string | null;
    city: string | null;
    country: string | null;
    county_code: string | null;
    id: string | null;
    latitude: number | null;
    longitude: number | null;
    street: string | null;
    streetName: string | null;
    zipcode: string | null;
  };
}
