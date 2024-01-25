import { City } from 'country-state-city';
import React from 'react';

export const cityData = City.getCitiesOfCountry('ID');

const run = () => console.log(cityData);
run;
