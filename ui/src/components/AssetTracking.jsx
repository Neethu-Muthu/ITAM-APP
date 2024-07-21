// AssetTracking.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const AssetTracking = () => {
    return (
        <div className="bg-white">
            <nav class="flex justify-between items-center p-4 bg-white shadow-md">
        <div class="space-x-4">
            <a href="/admin-dashboard" class="text-blue-600 hover:text-gray-900">Home</a>
        </div>
        <div class="space-x-4">
            <a href="/home" class="text-blue-600 hover:text-gray-900">Logout</a>
        </div>
    </nav>
        <div className="container mx-auto p-4 w-full max-w-3xl mt-40 p-6 bg-gray-200 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-bold text-black">Asset Tracking</div>
                {/* <div className="space-x-4">
                    <Link to="/admin-dashboard" className="text- hover:text-gray-300">Home</Link>
                    <Link to="/home" className="text-white hover:text-gray-300">Logout</Link>
                </div> */}
            </div>
            <div className="flex justify-center mb-4">
                <input type="text" placeholder="Search..." className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md ml-1 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</button>
            </div>
            <table className="w-full border-collapse mb-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2">Asset ID</th>
                        <th className="py-2">Name</th>
                        <th className="py-2">Current Location</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Scheduled Date</th>
                    </tr>
                </thead>
                
            </table>
        </div>
        </div>
    );
};

export default AssetTracking;
