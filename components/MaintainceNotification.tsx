import React, { useState } from 'react';

const MaintenanceNotification: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; 

  return (
    <div className="bg-red-600 text-white text-center p-4 fixed top-0 left-0 right-0 z-50">
      <h2 className="text-lg font-semibold">🚧 Maintenance Mode 🚧</h2>
      <p>Our site is currently under maintenance. Please check back later.</p>
      <button 
        className="mt-2 text-lg font-bold hover:text-gray-200"
        onClick={() => setVisible(false)}
      >
        &times; Close
      </button>
    </div>
  );
};

export default MaintenanceNotification;
