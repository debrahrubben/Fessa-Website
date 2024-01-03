
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ReactPlayer from 'react-player';

const icon = L.icon({
  iconUrl: 'https://res.cloudinary.com/dgpxvazru/image/upload/v1703964670/tinyimages/marker-removebg-preview_1_we6suh.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [50, 50], // change this to make the icon smaller or larger
});


const Explore = () => {
  const position = [6.681939, -1.573379]; // Coordinates from the Google Maps link

  const mapContainerStyle = {
    height: '400px',
    width: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const popupStyle = {
    textAlign: 'center',
  };
  const videoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70px',
   

  };
  return (
    <div style={{paddingTop:'90px', backgroundColor:'rgb(17, 50, 91)',minHeight:'100vh'}}>
      <h1 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '20px', color:'white', fontSize:'small' }}>
        The red Pin mark`s the faculty location
      </h1>
      <div id="map-container" style={{ ...mapContainerStyle, margin: '0 auto', }}>
        <MapContainer center={position} zoom={17} style={mapContainerStyle}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={icon}>
            <Popup style={popupStyle}>
              <strong>Faculty of Educational Studies</strong> <br />
              This is where the faculty is situated, closer to publishing studies building
            </Popup>
          </Marker>
        </MapContainer>
        
      </div>
      <div style={videoContainerStyle}>
        <ReactPlayer
      url="https://youtu.be/eCMKBadpUKk?si=lk_hhHm9qgk57LpG"
      controls={true}  // Show native player controls
     width='95%'
     height='auto'
    />
        </div>
    </div>
  );
};

export default Explore;
