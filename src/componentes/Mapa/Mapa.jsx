import '../Mapa/Mapa.css'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'

function ChangeView({ center, zoom }) {
    const map = useMap()
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom)
        }
    }, [center, zoom, map])
    return null
}

function Mapa({ selectedDestino }) {
    const [position, setPosition] = useState([-15.7942, -47.8822])
    const [zoom, setZoom] = useState(4)

    useEffect(() => {
        if (selectedDestino) {
            const [lat, lon] = selectedDestino.coordenadas.split(',')
            setPosition([parseFloat(lat), parseFloat(lon)])
            setZoom(10)
        } else {
            setZoom(4)
        }
    }, [selectedDestino])

    return (
        <>
            <div className='map-container'>
                <MapContainer center={[-15.7942, -47.8822]} zoom={4} style={{ height: '200px', width: '400px' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {selectedDestino && (
                        <Marker position={position} />
                    )}
                    <ChangeView center={position} zoom={zoom} />
                </MapContainer>
            </div>
        </>
    )
}

export default Mapa
