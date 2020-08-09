import React from 'react';
import Title from './comps/Title';
import UploadFIles from './comps/UploadForm';
import ImageGrid from './comps/imageGrid'

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadFIles/>
      <ImageGrid/>
    </div>
  );
}

export default App;
