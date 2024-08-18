import "../Mapa/Mapa.css"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import iconUrl from "../../imgs/local-icon-red.png"
import highlightedIconUrl from "../../imgs/local-icon-red-hl.png"
import { useEffect, useState } from "react"

function ChangeView({ center, zoom }) {
    const map = useMap()
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom)
        }
    }, [center, zoom, map])
    return null
}

function Mapa({ selectedDestino, destinos, zoomLevel }) {
    const [position, setPosition] = useState([-15.7942, -47.8822])
    const [zoom, setZoom] = useState(4)
    const [highlightedDestino, setHighlightedDestino] = useState(null)

    useEffect(() => {
        if (selectedDestino) {
            const [lat, lon] = selectedDestino.coordenadas.split(",").map(Number)
            setPosition([lat, lon])
            setZoom(zoomLevel)
            setHighlightedDestino(selectedDestino)
        } else {
            setZoom(4)
            setHighlightedDestino(null)
        }
    }, [selectedDestino, zoomLevel])

    const defaultIcon = new L.Icon({
        iconUrl: iconUrl,
        iconSize: [20, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    })

    const highlightedIcon = new L.Icon({
        iconUrl: highlightedIconUrl,
        iconSize: [20, 30],
        iconAnchor: [15, 46],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    return (
        <MapContainer
            center={position}
            zoom={zoom}
            className="map-container"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {destinos.map((destino) => {
                const [lat, lon] = destino.coordenadas.split(",").map(Number)
                return (
                    <Marker
                        key={destino.id}
                        position={[lat, lon]}
                        icon={
                            destino.id === highlightedDestino?.id
                                ? highlightedIcon
                                : defaultIcon
                        }
                    >
                        <Popup>
                            <strong>{destino.nome}</strong>
                            <br />
                            {destino.cidade}, {destino.estado}
                        </Popup>
                    </Marker>
                )
            })}
            <ChangeView center={position} zoom={zoom} />
        </MapContainer>
    )
}

export default Mapa
