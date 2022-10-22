import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import {
  Header,
  Hero,
  SmallCard,
  MediumCard,
  LargeCard,
  Footer,
} from '../components';
import { IExploreData, ICardData } from '../types';

interface HomePageProps {
  exploreData: IExploreData[];
  cardsData: ICardData[];
}

const Home: NextPage<HomePageProps> = ({ exploreData, cardsData }) => {
  return (
    <>
      <Head>
        <title>Airbnb</title>
      </Head>
      <Header />
      <Hero />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item, index) => (
              <SmallCard key={index} {...item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData.map((item, index) => (
              <MediumCard key={index} {...item} />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );
  console.log(cardsData);

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};

export default Home;
