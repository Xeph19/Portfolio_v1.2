import React from 'react';
import Layout from './components/Layout';
import ProfileCard from './components/ProfileCard';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Layout>
      <div className="p-4">
        <Homepage/>
      </div>
    </Layout>
  );
}

export default App;
