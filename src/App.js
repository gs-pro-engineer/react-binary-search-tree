import React from 'react';
import './App.css';
import Node from './components/node';
import TreeNode from './components/tree-node';

function App() {
  const root = new Node();

  return (
    <div className="App">
      <div className="App-header">
        <TreeNode
          style={{ display: "flex", flexDirection: "column" }}
          node={root}
        />
      </div>
    </div>
  );
}

export default App;
