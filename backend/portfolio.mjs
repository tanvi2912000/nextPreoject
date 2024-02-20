import puppeteer from 'puppeteer';
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client"; 

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const prisma = new PrismaClient(); 

export const portfolio = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1000,
            height: 1024
        }
    });

    const page = await browser.newPage();
    await page.goto('https://www.holidify.com/hotel-collections/resorts-in-udaipur');

   
    const fetchData = await page.evaluate(() => {
        const titleElements = document.querySelectorAll(".card-heading");
        const imageUrlElements = document.querySelectorAll(".card-img-top.lazy");
        const descriptionElements = document.querySelectorAll(".readMoreSmall.card-text");
        const priceElements = document.querySelectorAll(".price.default");
        const data=[];

        const length = Math.min(
            titleElements.length,
            imageUrlElements.length,
            descriptionElements.length,
            priceElements.length
        );

        for (let index = 0; index < length; index++) {
            const title = titleElements[index]?.textContent || "";
            const image = imageUrlElements[index]?.dataset.original || "";
            const description = descriptionElements[index]?.textContent || "";
            const price = priceElements[index]?.textContent || "";

            data.push({ title, image, description, price });
        }

        return data;
    });

    console.log(fetchData);

    for (let i = 0; i < 30; i++) {
        if (fetchData[i]) { 
            const { title, image, description, price } = fetchData[i];

            await prisma.resortList.create({
                data: {
                    title: title || "",
                    image: image || "",
                    description: description || "",
                    price: price || "",
                },
            });
        }
    }

    await browser.close();
    await prisma.$disconnect();
}
portfolio();

app.listen(port, () => {
    console.log(`Listening at port number ${port}`);
});

/*
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from 'axios';

const ResortListPage = () => {
  const [resorts, setResorts] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchResorts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/resort/portfolio');
        setResorts(response.data);
      } catch (error) {
        setFetchError('Error fetching data');
        console.error('Error fetching data:', error);
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
          <div className="flex flex-wrap m-2">
            {fetchError && <p>{fetchError}</p>}
            {resorts.map((resort, index) => (
              <div key={index} className="p-4 md:w-1/3 bg-stone-50 rounded-md mb-4">
                <div className="h-full rounded-md overflow-hidden">
                  <img
                    className="object-cover object-center w-full h-full block"
                    src={resort.image}
                    alt={resort.title}
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-bold text-blue-400">
                      {resort.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{resort.description}</p>
                    <h4>{resort.price}</h4>
                    <button className="bg-blue-300 text-white p-2 text-sm rounded-md">
                      Go somewhere
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResortListPage;
*/