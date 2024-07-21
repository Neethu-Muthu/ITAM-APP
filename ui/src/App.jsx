
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import axios from "axios";


import MainLayout from "./layouts/MainLayout"



import AuthLayout from "./layouts/AuthLayout"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { Admin } from "./pages/Admin";
import Asset from "./pages/Asset";
import UserManagementPage from "./pages/UserManagementPage";
import Employee from "./pages/Employee";
import Technician from "./pages/Technician";
import AddNewAssetPage from "./pages/AddNewAssetPage";
import NewUser from "./pages/NewUser";
import AssetTrackingPage from "./pages/AssetTrackingPage";
import AddAssetFormPage from "./pages/AddAssetFormPage";
import EditAssetPage from "./components/EditAsset";
// import AdminMaintenancePage from "./pages/AdminMaintenancePage";

//import AddAssetPage from "./pages/AddAssetPage";



function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AuthLayout />} >
                    <Route index element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignupPage />} />
                </Route>

                <Route path="/" element={<MainLayout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/admin-dashboard" element={<Admin/>} />
                    <Route path="/asset-inventory" element ={<Asset/>}/>
                    <Route path="/user-management" element={<UserManagementPage/>}/>
                    <Route path="/employee-dashboard" element={<Employee/>}/>
                    <Route path="/technician-dashboard" element={<Technician/>}/>
                    <Route path="/add-newAsset" element={<AddNewAssetPage/>}/>
                    <Route path="/create-user" element={<NewUser/>}/>
                    <Route path="/asset-track" element={<AssetTrackingPage/>}/>
                    <Route path="/add-asset" element={<AddAssetFormPage/>}/>
                    <Route path="/edit-asset" element={<EditAssetPage/>}/>
                    {/* <Route path="/maintenance" element={<AdminMaintenancePage/>}/> */}
                    {/* <Route path="/maintenance" element={<MaintenancePage/>}/> */}

                    
                </Route>
            </>
        )
    )

    return (

        <>

            <RouterProvider router={router} />

        </>

    )
}

export default App