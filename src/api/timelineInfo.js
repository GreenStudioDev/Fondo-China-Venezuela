import { useEffect, useState } from 'react';
import { fcvInstance } from './apiInstace';

export const TimelineInfo = () => {
    const [timeline, setTimeline] = useState([]);

useEffect(() => {
    async function getTimeline() {
        try {
          const response = await fcvInstance.get("/fcv-timeline");
          setTimeline(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getTimeline();

}, []);



    return {timelineInfo: timeline}
}

