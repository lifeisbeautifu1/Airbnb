import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

import { Header, Footer, InfoCard } from '../components';
import { searchData } from '../data';
import { ISearchData } from '../types';

export interface SearchProps {
  searchData: ISearchData[];
}

const Search: NextPage<SearchProps> = ({ searchData: searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formatedStartDate = format(new Date(startDate as string), 'dd MMMM yy');
  const formatedEndDate = format(new Date(endDate as string), 'dd MMMM yy');

  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div className='font-primary'>
      <Head>
        <title>Search</title>
      </Head>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays - {range} - for {numberOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
          <div className='flex flex-col'>
            {searchResults.map((item, index) => (
              <InfoCard key={index} {...item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const searchResults = await fetch('https://links.papareact.com/isz').then(
  //   (res) => res.json()
  // );
  return {
    props: {
      searchData,
    },
  };
};

export default Search;
