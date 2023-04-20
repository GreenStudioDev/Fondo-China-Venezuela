import { useEffect, useState } from 'react';
import { fcvInstance } from './apiInstace';

export const SectorsInfo = () => {
  const loading = [];
    const [sectors, setSectors] = useState(loading);

useEffect(() => {
    async function getSectors() {
          const response = await fcvInstance.get("/fcv-sectors");
          setSectors(response.data);
        }
      getSectors();
}, []);

    return sectors;
}

