import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./page/MainPage.jsx";
import { SettingsPage } from "./page/SettingsPage.jsx";
import { CreateScannerPage } from "./page/CreateScannerPage.jsx";
import {TopBar} from "./component/TopBar.jsx";
import {QRScanner} from "./component/QRScanner.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/qr-scanner" element={<QRScanner />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/create" element={<CreateScannerPage />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App
