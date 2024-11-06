import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

const data = [
  { name: 'Jan', donations: 5000, volunteers: 20 },
  { name: 'Feb', donations: 6500, volunteers: 25 },
  { name: 'Mar', donations: 7200, volunteers: 30 },
  { name: 'Apr', donations: 8000, volunteers: 28 },
  { name: 'May', donations: 8500, volunteers: 32 },
  { name: 'Jun', donations: 9000, volunteers: 35 }
];

const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Support our mission and help make a difference in your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donation Options */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="donationAmount" className="block text-gray-700 font-medium mb-2">
                  Donation Amount
                </label>
                <input
                  type="number"
                  id="donationAmount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter amount"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="donationType" className="block text-gray-700 font-medium mb-2">
                  Donation Type
                </label>
                <select
                  id="donationType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="one-time">One-Time</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Donate Now
              </button>
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="volunteerInterests" className="block text-gray-700 font-medium mb-2">
                  Areas of Interest
                </label>
                <textarea
                  id="volunteerInterests"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tell us what you're passionate about"
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="volunteerAvailability" className="block text-gray-700 font-medium mb-2">
                  Availability
                </label>
                <input
                  type="text"
                  id="volunteerAvailability"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="When are you available to volunteer?"
                />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Sign Up to Volunteer
              </button>
            </div>
          </div>
        </div>

        {/* Donation Tracker */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Progress Tracker</h3>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <LineChart width={600} height={400} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="donations" stroke="#8884d8" />
              <Line type="monotone" dataKey="volunteers" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;