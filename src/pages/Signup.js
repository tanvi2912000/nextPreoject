
  import { useEffect, useState } from 'react';
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';
  import axios from 'axios';    


const Signup = () => {
  const [newname, setNewName] = useState('');
  const [newphone, setNewNumber] = useState('');
  const [newemail, setNewEmail] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [newaddress, setNewAddress] = useState('');

  // const buttonClick = () => {
  //   console.log('Button Clicked!');
  //   console.log(newname, newphone,newaddress,newemail,newpassword, )
  // }

  /*useEffect(() => {
    const fetchData = async () => {
  
        const res = await axios.get('http://localhost:3001/resort/signup');
        console.log(res.data);
   
        console.error('Error fetching data:', error);
      
    };

    fetchData();
  }, []);*/

  const handleSubmit = async (e) => {
    e.preventDefault();

   
      const res = await axios.post(
        'http://localhost:3001/resort/signup',
        {
          name:newname,
          phone: newphone,
          email: newemail,
          password: newpassword,
          address: newaddress,
        },
        {
          headers: {
            'Content-Type': 'application/json', 
          },
        }
      );

      console.log(res.data);
    
  };

  return (
    <>
      <Navbar />
      <section className="bg-blue-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style={{ backgroundImage: "url('/images/i4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="w-full bg-blue-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="text" name="name" id="name" value={newname} onChange={(e) => setNewName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Mobile Number</label>
                    <input type="text" name="number" id="phone" value={newphone} onChange={(e) => setNewNumber(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="91********" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" value={newemail} onChange={(e) => setNewEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" value={newpassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                  <input type="text" name="address" id="address" value={newaddress} onChange={(e) => setNewAddress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Register</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
