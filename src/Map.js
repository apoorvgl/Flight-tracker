import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = ({ pos }) => {
    console.log(pos)
    const temp = [];
    for (let i = 0; i < pos.data.aircraft.length; i++) {
      temp.push({ lat: pos.data.aircraft[i][2], lng: pos.data.aircraft[i][3] });
    }
  return (
    <div id="map">
      <MapContainer
        center={[temp[0].lat, temp[0].lng]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {temp.map((p) => {
          return (
            <Marker position={[p.lat, p.lng]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
