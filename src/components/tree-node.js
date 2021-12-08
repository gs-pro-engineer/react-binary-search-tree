import React, { useState } from "react";
let i = -100;

export default function TreeNode() {

  const [node, setNode] = useState({ id: 0, children: null });

  document.body.onkeyup = function (e) {
    if (e.keyCode === 32) {
      let tnode = generateBinaryTree(node);
      setNode({ id: 0, children: tnode });
    }
  }

  const generateBinaryTree = (_oNode) => {
    if (!_oNode.children) {
      i = i + 2;
      return [
        {
          id: i - 2,
          children: null,
        },
        {
          id: i - 1,
          children: null,
        }
      ]
    }

    _oNode.children.map(_eNode => {
      if (i > 99) return _eNode;
      _eNode.children = generateBinaryTree(_eNode);
      return _eNode;
    });

    return _oNode.children;
  }

  const _rNode = (id) => {
  }

  const renderTree = (children) => {
    return (
      <ul>
        {
          children.map((child, index) => {
            return (
              <li key={index} onClick={(e) => { _rNode(child.id) }}><h4>{child.id}</h4>
                {
                  child.children ?
                    renderTree(child.children)
                    : (
                      null
                    )}
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <div className="tree">
      <ul>
        <li><h4>0</h4>
          {
            node.children ?
              renderTree(node.children)
              : (
                null
              )}
        </li>
      </ul>
    </div>
  );
}