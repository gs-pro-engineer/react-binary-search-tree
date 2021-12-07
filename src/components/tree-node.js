import React from "react";
import { useEffect, useState } from "react";

export default function TreeNode(props) {
  const [node, setNode] = useState(props.node);

  useEffect(() => {
    setNode(props.node);
    return () => { };
  }, [props.node]);

  const onSplit = () => {
    setNode(node.split());
  };

  console.log("node:", node);

  return (
    <div>
      {node.children ? (
        <div>
          <label className="node" onClick={onSplit}>{node.id}</label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <TreeNode node={node.children[0]} />
            <TreeNode node={node.children[1]} />
          </div>
        </div>
      ) : (
        <div key={node.id}>
          <label className="node" onClick={onSplit}>{node.id}</label>
        </div>
      )}
    </div>
  );
}
