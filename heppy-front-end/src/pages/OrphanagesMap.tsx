import React,{useEffect,useState} from 'react';

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import mapMarkeImg from '../images/local.svg'
import '../styles/OrphanagesMap.css';

import '../styles/OrphanagesMap.css'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import mapIcon from '../ultils/mapIcons';
import api from '../services/api';

interface Orphanages{
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages,setOrphanages] = useState<Orphanages[]>([]);
  useEffect(() => {
    api.get('orphanages').then(response => {
      
       setOrphanages (response.data);
    })
   }, []);
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkeImg} alt="Happy" />
          
          <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Céara</strong>
          <span>Fortaleza</span>
        </footer>
      </aside>
      <Map
        center={[-3.7900894, -38.6590336]}
        zoom={15}
        style={{ width:'100%',height:'100%' }}
      >
        
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        {orphanages.map((orphanage) => {
                    return (
                        <Marker
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                                {orphanage.name}
                                <Link to={`orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}
    </Map>

      <Link to="/orphanes/create" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link>
  </div>
  )
}

export default OrphanagesMap;