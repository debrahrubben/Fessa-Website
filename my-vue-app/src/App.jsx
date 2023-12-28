import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { FloatButton } from 'antd';
import Externalsite from './assets/Components/Homepage/Externalsite';


import Navigator from './assets/Components/Navbar';
import HomePage from './assets/Components/Homepage/HomePage';
import AboutPage from './assets/Components/AboutPage';
import ResourcesPage from './assets/Components/ResourcesPage';
import GalleryPage from './assets/Components/GalleryPage';
import Footer from './assets/Components/Footer';
import AccessoriesPage from './assets/Components/Accessories';
import HallOfFamePage from './assets/Components/HallOfFamePage';
import YourWayAround from './assets/Components/YourWayAround'

function App() {

	return (
		<>
			<BrowserRouter>
     <Navigator/>
				<Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route  path="/about" element={<AboutPage />} />
        <Route  path="/resources" element={<ResourcesPage />} />
        <Route  path="/gallery" element={<GalleryPage />} />
		<Route  path="/accessories" element={<AccessoriesPage />} />
		<Route  path="/Hall_of_Fame" element={<HallOfFamePage />} />
		<Route  path="/Your_Way_Around" element={<YourWayAround />} />
				</Routes>
< Footer/>
<FloatButton.Group>
<Externalsite></Externalsite>
<FloatButton.BackTop />
</FloatButton.Group>
			</BrowserRouter>
		</>
	);
}





export default App;