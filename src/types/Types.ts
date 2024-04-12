import { ReactNode } from "react";

export interface CountryTypes {
    [x: string]: ReactNode;
    subregion: ReactNode;
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