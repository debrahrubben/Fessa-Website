import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { FloatButton } from 'antd';


import Navigator from './assets/Components/Navbar';
import HomePage from './assets/Components/Homepage/HomePage';
import AboutPage from './assets/Components/AboutPage';
import ResourcesPage from './assets/Components/ResourcePage/ResourcesPage';
import GalleryPage from './assets/Components/GalleryPage/GalleryPage';
import Footer from './assets/Components/Footer';
import Mech from './assets/Components/Mech';
import HallOfFamePage from './assets/Components/HallofFame/HallOfFamePage';
import Explore from './assets/Components/Explore'
import Affiliate from './assets/Components/Affiliate';



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
		<Route  path="/Mech" element={<Mech />} />
		<Route  path="/Hall_of_Fame" element={<HallOfFamePage />} />
		<Route  path="/Explore" element={<Explore />} />
		< Route path='/affiliate-colleges' element={<Affiliate />} />
				</Routes>
< Footer/>
<FloatButton.Group>
<FloatButton.BackTop />
</FloatButton.Group>
			</BrowserRouter>
		</>
	);
}





export default App;