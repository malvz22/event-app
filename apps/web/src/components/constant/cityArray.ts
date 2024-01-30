import { City } from 'country-state-city';
import React from 'react';

const cityObject = City.getCitiesOfCountry('ID');

export const cityData = cityObject.map((a) => a.name);
