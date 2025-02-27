'use client'
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../app/component/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className=''>
      <h1>Welcome to my map</h1>
      <arcgis-map
        basemap='arcgis/topographic'
        center='-118.805, 34.027'
        zoom='13'
      >
        <arcgis-zoom position='top-left'></arcgis-zoom>
      </arcgis-map>
      <MapComponent/>
    </div>
  );
}
