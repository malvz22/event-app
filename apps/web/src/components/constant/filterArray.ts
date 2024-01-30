import { CategoryArray } from './category';
import { cityData } from './cityArray';
import { TimeArray } from './timeArray';

export const filterCity = {
  label: 'Location',
  dataEvent: cityData,
  dataPlaceholder: 'Choose Location',
};

export const filterTime = {
  label: 'When',
  dataEvent: TimeArray,
  dataPlaceholder: 'Choose Month',
};

export const filterCategory = {
  label: 'Looking for',
  dataEvent: CategoryArray,
  dataPlaceholder: 'Choose event type',
};
