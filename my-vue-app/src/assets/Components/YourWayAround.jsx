
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const YourWayAround = () => {
  const position = [6.681939, -1.573379]; // Coordinates from the Google Maps link

  const mapContainerStyle = {
    height: '400px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const popupStyle = {
    textAlign: 'center',
  };

  return (
    <div style={{paddingTop:'90px', backgroundColor:'rgb(17, 50, 91)', paddingBottom:'50px',}}>
      <h1 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '20px', color:'white', fontSize:'small' }}>
        Blue Marker is the department location
      </h1>
      <div id="map-container" style={{ ...mapContainerStyle, margin: '0 auto', }}>
        <MapContainer center={position} zoom={17} style={mapContainerStyle}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup style={popupStyle}>
              <strong>Department of Education</strong> <br />
              This is where the Department is situated
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default YourWayAround;
