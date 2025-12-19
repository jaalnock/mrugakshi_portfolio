import React from 'react';

export default function DriveVideo({ fileId, title = 'Drive Video' }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <iframe
        title={title}
        src={`https://drive.google.com/file/d/${fileId}/preview?autoplay=1`}
        style={{ width: '100%', height: '100%', border: 0 }}
        allow="autoplay; encrypted-media"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}