import { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    // Ensure the ArcGIS API has loaded
    if (window.arcgis) {
      const { WebMap, MapView } = window.require([
        'esri/WebMap',
        'esri/views/MapView',
      ]);

      const webMap = new WebMap({
        portalItem: { id: 'your-webmap-id' }, // Use your own WebMap ID from ArcGIS Online
      });

      const view = new MapView({
        container: 'mapViewDiv', // The container div for the map
        map: webMap,
      });

      return () => {
        if (view) {
          view.destroy();
        }
      };
    }
  }, []);

  return <div id='mapViewDiv' style={{ height: '100vh', width: '100%' }} />;
};

export default MapComponent;
