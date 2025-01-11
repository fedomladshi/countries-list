'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { countries_mock } from '@/app/config';

import { CountryItem } from '../CountryItem/CountryItem';

export const CountryList = () => {
  const [countries, setCountries] = useState(countries_mock);

  const handleItemDelete = (i: number) => {
    const temp = countries;
    temp.splice(i, 1);
    setCountries([...temp]);
  };

  return (
    <div className="relative flex w-1/3 flex-col gap-1 overflow-y-scroll rounded-lg border bg-white p-1.5 shadow-sm">
      <AnimatePresence mode="popLayout">
        {countries.map(({ flag_url, name_ru, iso_code2 }, i) => (
          <motion.div
            key={`${name_ru}`}
            layout
            initial={{ opacity: 0, x: -400, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, y: -10, scale: 1.2 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <CountryItem
              flag_url={flag_url}
              name_ru={name_ru}
              iso_code2={iso_code2}
              onItemDelete={handleItemDelete}
              index={i}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
