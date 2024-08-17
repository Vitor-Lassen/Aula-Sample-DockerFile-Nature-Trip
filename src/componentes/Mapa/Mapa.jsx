import '../Mapa/Mapa.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Mapa({ selectedDestino }) {  // Recebe selectedDestino como prop

    return (
        <>
            <div className='map-container'>
                <MapContainer center={[-15.7942, -47.8822]} zoom={4} style={{ height: '200px', width: '400px' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {selectedDestino && selectedDestino.latitude && selectedDestino.longitude && (  // Verifica se as coordenadas existem
                        <Marker
                            position={[selectedDestino.latitude, selectedDestino.longitude]}
                        />
                    )}
                </MapContainer>
            </div>
        </>
    )
}

export default Mapa