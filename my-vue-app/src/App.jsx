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
import Level100 from './assets/Components/ResourcePage/level100';
import Level200 from './assets/Components/ResourcePage/level200';
import Level300 from './assets/Components/ResourcePage/level300';
import Level400 from './assets/Components/ResourcePage/level400';


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
		<Route path='/affiliate-colleges' element={<Affiliate />} />
		<Route path='/resources/level100' element={<Level100 />} />
		<Route path='/resources/level200' element={<Level200 />} />
		<Route path='/resources/level300' element={<Level300 />} />
		<Route path='/resources/level400' element={<Level400 />} />
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