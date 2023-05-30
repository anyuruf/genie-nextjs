'use client';
import dynamic from 'next/dynamic';

const NoSSRForceGraph = dynamic(() => import('../../lib/force.module'), {
  ssr: false
});

const myData = {
    nodes: [{ id: 'a' }, { id: 'b' }, { id: 'c' }],
    links: [
      { source: 'a', target: 'b' },
      { source: 'c', target: 'a' }
    ]
  };
  
  export default function ForceGraph () {
    return <NoSSRForceGraph graphData={myData} />;
  }
  
  