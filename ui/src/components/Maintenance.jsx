import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Maintenance = () => {
    const [formData, setFormData] = useState({
        assetId: '',
        issueDescription: '',
    });
    const [requests, setRequests] = useState([]);
    const [assets, setAssets] = useState([]);

    // Fetch maintenance requests
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('/api/maintenance');
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching maintenance requests:', error);
            }
        };

        fetchRequests();
    }, []);

    // Fetch asset details
    useEffect(() => {
        const fetchAssets = async () => {
            try {
                const response = await axios.get('/api/assets');
                setAssets(response.data);
            } catch (error) {
                console.error('Error fetching assets:', error);
            }
        };

        fetchAssets();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/maintenance', formData);
            setRequests([...requests, response.data]); // Add new request to the list
            setFormData({
                assetId: '',
                issueDescription: '',
            }); // Clear form
        } catch (error) {
            console.error('Error creating maintenance request:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="space-x-4">
                    <a href="/admin-dashboard" className="text-blue-600 hover:text-gray-900">Home</a>
                </div>
                <div className="space-x-4">
                    <a href="/logout" className="text-blue-600 hover:text-gray-900">Logout</a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Schedule Maintenance</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="assetId" className="block text-sm font-medium text-gray-700">Asset ID</label>
                            <select
                                id="assetId"
                                name="assetId"
                                value={formData.assetId}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="">Select Asset</option>
                                {assets.map((asset) => (
                                    <option key={asset._id} value={asset.assetId}>
                                        {asset.assetId} - {asset.assetName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700">Issue Description</label>
                            <input
                                type="text"
                                id="issueDescription"
                                name="issueDescription"
                                value={formData.issueDescription}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </form>

                {/* Display Maintenance Requests */}
                <section className="bg-gray-100 shadow-md rounded-lg p-4 mt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Maintenance Requests</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2">Asset ID</th>
                                    <th className="border border-gray-300 px-4 py-2">Issue Description</th>
                                    <th className="border border-gray-300 px-4 py-2">Scheduled Date</th>
                                    <th className="border border-gray-300 px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((request) => (
                                    <tr key={request._id}>
                                        <td className="border border-gray-300 px-4 py-2">{request.assetId}</td>
                                        <td className="border border-gray-300 px-4 py-2">{request.issueDescription}</td>
                                        <td className="border border-gray-300 px-4 py-2">{request.scheduledDate || 'N/A'}</td>
                                        <td className="border border-gray-300 px-4 py-2">{request.status || 'N/A'}</td>
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

export default Maintenance;
