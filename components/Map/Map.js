import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./map.module.css";
function Map() {
  return (
    <MapContainer
      className={styles.a_map}
      center={[41.30294921148613, 69.3157687960274]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
export default Map;
