import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditAssetPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assetData, setAssetData] = useState({
    assetId: '',
    assetName: '',
    assetType: '',
    model: '',
    serialNumber: '',
    purchaseDate: '',
    warranty: '',
    location: ''
  });

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const response = await axios.get(`/api/assets/${id}`);
        setAssetData(response.data);
      } catch (error) {
        console.error('Error fetching asset data:', error);
      }
    };

    fetchAsset();
  }, [id]);

  const handleChange = (e) => {
    setAssetData({ ...assetData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/assets/${id}`, assetData);
      console.log('Asset updated:', response.data);
      navigate('/assets');
    } catch (error) {
      console.error('Error updating asset:', error);
    }
  };

  return (
    <section className="bg-white mb-20">
      <div className="container m-auto max-w-2xl py-2">
        <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">Update Asset</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Asset Name</label>
              <input
                type="text"
                name="assetName"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={assetData.assetName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Asset Type</label>
              <input
                type="text"
                name="assetType"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={assetData.assetType}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Model</label>
              <input
                type="text"
                name="model"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={assetData.model}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Serial Number</label>
              <input
                type="text"
                name="serialNumber"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={assetData.serialNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Purchase Date</label>
              <input
                type="date"
                name="purchaseDate"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={assetData.purchaseDate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Warranty</label>
              <input
                type="text"
                name="warranty"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={assetData.warranty}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Location</label>
              <input
                type="text"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={assetData.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="bg-purple-500 hover:bg-purple-600 my-10 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Asset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditAssetPage;
