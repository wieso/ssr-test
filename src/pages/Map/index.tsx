import React from 'react';
import { useParams } from 'react-router-dom';

function MapPage() {
  const { id } = useParams();
  return (<div>
    Map
    <div>
      {id}
    </div>
  </div>);
}

export default MapPage;
