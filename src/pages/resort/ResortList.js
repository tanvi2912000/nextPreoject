import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ResortListPage() {
  const [resorts, setResorts] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchResorts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/resort/portfolio"
        );
        setResorts(response.data);
      } catch (error) {
        setFetchError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };

    fetchResorts();
  }, []);

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-50 mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-400 py-8">Portfolio</h2>
          <div className="flex flex-wrap -m-4">
            {fetchError && <p>{fetchError}</p>}
            {resorts && resorts.length > 0 ? (
              resorts.map((resort, index) => (
                <div key={index} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <a
                    href="#"
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      className="w-full"
                      src={resort.image}
                      alt={resort.title}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-black text-xl mb-1">
                      <a href={`/resort/${resort.id}`} className="hover:underline">{resort.title}</a>
                    </h3>

                    {/* <p className="text-gray-900 text-base">{resort.description}</p> */}
                    <p className="mt-1">{resort.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ResortListPage;
