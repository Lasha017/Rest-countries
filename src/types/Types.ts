import { ReactNode } from "react";

export interface CountryTypes {
  borders: any;
  tld: ReactNode;
  subregion: string;
  name: {
    nativeName: any;
    common: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
}
