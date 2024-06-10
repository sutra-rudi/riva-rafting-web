'use client';

import React from 'react';
import mapboxgl from 'mapbox-gl';
import styles from '../../styles/aktivnost.module.scss';
import PaperDividTop from '@/app/components/PaperDividTop';
import PaperDividBotAlt from '@/app/components/PaperDivitBotAlt';

interface AktivnostInterface {
  apiKey: string;
  styleUrl: string;
  mapCenter: string;
}

const MapboxMapa = (props: AktivnostInterface) => {
  const mapContainer = React.useRef<any>(null);
  const map = React.useRef<any>(null);

  React.useEffect(() => {
    if (!props.mapCenter) {
      console.error('mapCenter prop is missing');
      return;
    }

    const mapCenterArray = props.mapCenter.split(',').map(Number);
    const [lat, lng] = mapCenterArray;

    if (mapCenterArray.length !== 2 || isNaN(lat) || isNaN(lng)) {
      console.error('Invalid mapCenter coordinates:', props.mapCenter);
      return;
    }

    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: props.styleUrl ?? 'mapbox://styles/lovreperaic/clu5id29e00ud01qs2gbfabi4',
      accessToken: props.apiKey,
      // center: [lng, lat],

      // zoom: 0.25,
      zoom: 11,
    });

    map.current.scrollZoom.disable();
    map.current.setCenter({ lat: '44.182943149033214', lng: '15.69450882816688' });
    map.current.flyTo({ lat: '44.182943149033214', lng: '15.69450882816688' });
  }, [props.mapCenter, props.styleUrl, props.apiKey]);

  return (
    <div className={styles.mapboxContainer} ref={mapContainer}>
      <PaperDividTop />
      <PaperDividBotAlt />
    </div>
  );
};

export default MapboxMapa;
