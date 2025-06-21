// // src/components/AnalyticsTracker.js
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const AnalyticsTracker = ({ measurementId }) => {
//   const location = useLocation();

//   useEffect(() => {

//     if (window.gtag) {
//       window.gtag('event', 'page_view', {
//         page_path: location.pathname + location.search,
//         page_location: window.location.href, 
//         page_title: document.title, 
//       });
//       console.log('GA4 page_view sent:', location.pathname); 
//     }
//   }, [location.pathname, location.search, measurementId]); 

//   return null; 
// };

// export default AnalyticsTracker;


// src/components/AnalyticsTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AnalyticsTracker = ({ measurementId }) => {
  const location = useLocation();

  useEffect(() => {
    if (measurementId && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
      // console.log('GA4 page_view sent:', location.pathname); // Uncomment for debugging
    } else if (!measurementId) {
      console.warn("Google Analytics Measurement ID is not provided to AnalyticsTracker.");
    } else if (typeof window.gtag !== 'function') {
      console.warn("Google Analytics (gtag) script not loaded. Ensure it's in public/index.html.");
    }
  }, [location.pathname, location.search, measurementId]);

  return null; // This component doesn't render anything visible
};

export default AnalyticsTracker;