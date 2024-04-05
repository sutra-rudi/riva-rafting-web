'use client';

import PaperDividTop from '@/app/components/PaperDividTop';
import PaperDividBotAlt from '@/app/components/PaperDivitBotAlt';
import React from 'react';
import mapboxgl from 'mapbox-gl';
import styles from '../../styles/aktivnost.module.scss';
interface AktivnostInterface {
  apiKey: string;
}

const MapboxMapa = (props: AktivnostInterface) => {
  const mapContainer = React.useRef<any>(null);
  const map = React.useRef<any>(null);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: props.apiKey,

      // center: [lng, lat],
      // zoom: zoom,
    });

    map.current.scrollZoom.disable();
  }, [props.apiKey]);

  return (
    <div className={styles.mapboxContainer} ref={mapContainer}>
      <PaperDividTop />
      <PaperDividBotAlt />
    </div>
  );
};

export default MapboxMapa;
