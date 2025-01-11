'use client';

import { Country } from '@/types/entities';

interface CountryItemProps extends Omit<Country, 'iso_code3'> {
  index: number;
  onItemDelete: (i: number) => void;
}

export const CountryItem = ({ flag_url, name_ru, iso_code2, index, onItemDelete }: CountryItemProps) => {
  return (
    <div
      role="button"
      className="flex w-full items-center rounded-md border-b border-b-gray-200 p-2 pl-3 text-slate-800 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
    >
      <img
        src={`https:${flag_url}`}
        alt={`${iso_code2}_flag`}
        className="truncate"
      />
      <p className="ml-2 truncate">{name_ru}</p>
      <div className="ml-auto grid place-items-center justify-self-end">
        <button
          className="rounded-md border border-transparent p-2.5 text-center text-sm text-slate-600 transition-all hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => onItemDelete(index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
            className="size-6"
          >
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
