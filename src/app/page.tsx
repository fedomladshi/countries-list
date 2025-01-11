import { CountryList } from '@/components';

export default function Home() {
  return (
    <section className="relative flex h-dvh flex-col items-center bg-slate-50 p-4">
      <CountryList />
    </section>
  );
}
