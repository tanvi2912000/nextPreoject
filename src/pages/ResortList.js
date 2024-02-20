import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';

const ResortListPage = () => {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/resort')
      .then(response => {
        setResorts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {resorts.map(resort => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={resort.id}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image alt="resort" className="object-cover object-center w-full h-full block" src={resort.image} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Title</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{resort.title}</h2>
                    <p className="mt-1">{`$${resort.price}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ResortListPage;
