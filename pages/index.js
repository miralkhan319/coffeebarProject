
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const specialCoffees = [
  {
    id: 1,
    name: 'Lungo Coffee',
    description: 'A longer espresso drink, with a touch of bitterness',
    price: 'Rs. 199',
    imageUrl: '/image1.jpg'
  },
  {
    id: 2,
    name: 'Dalgona Coffee',
    description: 'A whipped coffee drink with a rich flavor',
    price: 'Rs. 159',
    imageUrl: '/image2.jpg'
  },
  {
    id: 3,
    name: 'Iced Coffee',
    description: 'A cold coffee beverage served over ice',
    price: 'Rs. 149',
    imageUrl: '/image6.jpg'
  },
  {
    id: 4,
    name: 'Filter Coffee',
    description: 'A smooth and rich coffee brewed using a filter',
    price: 'Rs. 59',
    imageUrl: '/image5.jpg'
  }
];
const specialDesserts = [
  {
    id: 1,
    name: 'Gulab Jamun',
    description: 'A popular Indian dessert made of fried dough balls in sweet syrup',
    price: 'Rs. 199',
    imageUrl: '/gulabjamun.jpg'
  },
  {
    id: 2,
    name: 'Chocolate Tiramisu',
    description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese',
    price: 'Rs. 250',
    imageUrl: '/chocolate.jpg'
  },
  {
    id: 3,
    name: 'Churros',
    description: 'A Spanish dessert of fried dough pastry, often sprinkled with sugar and served with chocolate sauce',
    price: 'Rs. 170',
    imageUrl: '/churros.jpg'
  },
  {
    id: 4,
    name: 'Australian Lamingtons',
    description: 'A dessert made of sponge cake coated in chocolate sauce and rolled in desiccated coconut',
    price: 'Rs. 280',
    imageUrl: '/Lamingtons.jpg'
  }
];
const reviews = [
  {
    id: 1,
    name: 'Joana Adams',
    rating: 5,
    comment: 'I dropped by to have a cappuccino and honestly, their coffee was top-notch. The service was great too! I highly recommend this place if you want to have a great coffee experience.',
    imageUrl: '/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Sam Williams',
    rating: 5,
    comment: 'I\'ve been ordering beans from you for ten years, the quality of the product is consistently high. I\'m grateful for the care that is apparently put into the roasts and the excellent customer service. You always give way to the best cup of coffee.',
    imageUrl: '/avatar3.jpg'
  },
  {
    id: 3,
    name: 'Angela Gonzales',
    rating: 5,
    comment: 'I\'ve been getting beans from you for six years now. The quality is always great and the delivery is timely. Keep up the good work. You have the best coffee beans!',
    imageUrl: '/avatar2.jpg'
  }
];
export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(e.target),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Subscription Successful",
          text: "Thank you for subscribing!",
          showConfirmButton: false,
          timer: 1500,
        });
        setEmail(''); // Clear email input after submission
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Subscription Failed",
        text: error.message,
      });
    }
  };

  return (
    <>

      <Layout>
        {/* main part */}
        <div id="shop" className="flex  justify-center  space-x-16  bg-orange-200 ">
          <div className="flex-row justify-center ">
            <Image src="/cup.png" width={70} height={50} className="py-2" alt="A cup of coffee" />
            <p className="text-amber-700 ">
              Hot Coffee
            </p>
          </div>
          <div className="flex-row justify-center">
            <Image src="/coldcoffee.png" width={70} height={50} className="py-2" alt="A cup of coffee" />
            <p className="text-amber-700 ">
              Cold Coffee
            </p>
          </div>
          <div className="flex-row justify-center  ">
            <Image src="/coffee-cup.png" width={60} height={80} className="py-3" alt="A cup of coffee" />
            <p className="text-amber-700 ">
              Cup Coffee
            </p>
          </div>
          <div className="flex-row justify-center  ">
            <Image src="/cake.png" width={70} height={50} className="py-2" alt="A cup of coffee" />
            <p className="text-amber-700 ">
              Dessert
            </p>
          </div>
        </div>
        {/* special coffee */}
        <div id="coffee" className="bg-white ">
          <h2 className="text-center py-10 text-3xl font-bold mb-8">Our Special Coffee</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialCoffees.map(coffee => (
              <div key={coffee.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <Image src={coffee.imageUrl} alt={coffee.name} width={500} height={400} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{coffee.name}</h3>
                  <p className="text-gray-600 mb-2">{coffee.description}</p>
                  <p className="text-gray-800 font-bold mb-4">{coffee.price}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* bakery shop */}
        <div id="bakery" className="bg-white ">
          <h2 className="text-center py-10 text-3xl font-bold mb-8">Our Special Dessert</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  py-5">
            {specialDesserts.map(dessert => (
              <div key={dessert.id} className="bg-white shadow-md rounded-lg overflow-hidden ">
                <Image src={dessert.imageUrl} alt={dessert.name} width={500} height={400} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{dessert.name}</h3>
                  <p className="text-gray-600 mb-2">{dessert.description}</p>
                  <p className="text-gray-800 font-bold mb-4">{dessert.price}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="about"
          className="h-screen bg-cover flex flex-col items-center justify-center bg-center space-y-6"
          style={{ backgroundImage: "url('/bg4.jpg')" }}
        >
          <p className="text-center font-extrabold text-5xl text-amber-900">
            Check Out OuR <br />
            Best Coffee Betans
          </p>
          <button className="bg-orange-900 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
            <a
              href="#coffee">   Explore Our Products</a>
          </button>
        </div>
{/* reviews part */}
        <div id="reviews" className="bg-white py-10">
          <h2 className="text-center text-3xl font-bold mb-8">Our Happy Customers</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(review => (
              <div key={review.id} className="bg-white shadow-lg p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src={review.imageUrl} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">{review.name}</h3>
                    <div className="flex items-center">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.41l6.563-.953L10 0l2.948 5.457 6.563.953-4.755 4.133 1.122 6.545L10 15z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <div

          className="h-screen bg-cover flex flex-col items-center justify-center bg-center space-y-6"
          style={{ backgroundImage: "url('/bg4.jpg')" }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Join in and get 15% Off!</h2>
            <p className="mb-4">Subscribe to our newsletter and get 15% off at discount code.</p>
            <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="flex flex-col items-center">
              {/* Hidden field for API key */}
              <input type="hidden" name="access_key" value="4eb8d3e5-24ba-4204-aa0e-5917411f4df4" />

             
              <input
                type="email"
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="p-2 rounded-md border border-gray-300 mb-4 w-full max-w-sm"
                required
              />
              <button
                type="submit"
                className="bg-orange-900 text-white py-2 px-6 rounded-md hover:bg-orange-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
      </Layout>

    </>
  );
}
