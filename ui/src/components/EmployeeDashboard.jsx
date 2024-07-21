import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        fetchAssets();
    }, []);

    const fetchAssets = async () => {
        try {
            const response = await axios.get('/api/assets'); // Replace with your API endpoint
            setAssets(response.data); // Assuming response.data is an array of assets
        } catch (error) {
            console.error('Error fetching assets:', error);
        }
    };

    return (
        <div className="bg-gray-100">
             <nav className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="space-x-4">
                    <a href="/home" className="text-blue-600 hover:text-gray-900">Home</a>
                </div>
                <div className="space-x-4">
                    <a href="/home" className="text-blue-600 hover:text-gray-900">Logout</a>
                </div>
            </nav>
            <header className="bg-white shadow-lg p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-800">Employee Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <img src="/src/images/download.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
                        <span className="text-gray-900">John Doe</span>
                    </div>
                </div>
            </header>
            <div className="container mx-auto py-6 mb-20">
                <section className="bg-white shadow-md rounded-lg p-4 mb-20">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">My Assets</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2">Asset Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Asset Type</th>
                                    <th className="border border-gray-300 px-4 py-2">Model</th>
                                    <th className="border border-gray-300 px-4 py-2">Serial Number</th>
                                    <th className="border border-gray-300 px-4 py-2">Purchase Date</th>
                                    <th className="border border-gray-300 px-4 py-2">Warranty</th>
                                    <th className="border border-gray-300 px-4 py-2">Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assets.map(asset => (
                                    <tr key={asset.id}>
                                        <td className="border border-gray-300 px-4 py-2">{asset.assetName}</td>
                                        <td className="border border-gray-300 px-4 py-2">{asset.assetType}</td>
                                        <td className="border border-gray-300 px-4 py-2">{asset.model}</td>
                                        <td className="border border-gray-300 px-4 py-2">{asset.serialNumber}</td>
                                        <td className="border border-gray-300 px-4 py-2">{asset.purchaseDate}</td>
                                        <td className="border border-gray-300 px-4 py-2">{asset.warranty}</td>
                                        <td className="border border-gray-300 px-4 py-2">{asset.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
