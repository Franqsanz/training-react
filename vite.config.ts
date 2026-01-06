import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { GoogleMapsPlugin } from 'vite-plugin-google-maps';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    GoogleMapsPlugin({
      apiKey: '',
      libraries: ['marker'],
      debug: false,
      mapDefaults: {
        mapId: '',
        gestureHandling: 'greedy',
        defaultZoom: 14,
        fullscreenControl: false,
        disableDefaultUI: true,
      }
    })
  ],
})
