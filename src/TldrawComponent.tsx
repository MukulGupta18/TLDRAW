import { useState, useEffect, useRef } from "react";
import { Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

export default function TldrawComponent() {
  const [items, setItems] = useState<number>(1);
  const editorRef = useRef<any>(null);

  const maxWidth = 800; 
  const itemWidth = 100; 
  const itemHeight = 50; 
  const spacing = 20; 

  useEffect(() => {
    const editor = editorRef.current;
    if (editor) {
      // Clear existing shapes if there's a method for that
      if (typeof editor.clear === 'function') {
        editor.clear();
      } else if (typeof editor.reset === 'function') {
        editor.reset();
      }

      // Add new shapes
      for (let i = 0; i < items; i++) {
        const shapeId = createShapeId();
        const row = Math.floor(i / Math.floor(maxWidth / (itemWidth + spacing)));
        const col = i % Math.floor(maxWidth / (itemWidth + spacing));
        const x = col * (itemWidth + spacing);
        const y = row * (itemHeight + spacing);

        editor.createShape({
          id: shapeId,
          type: "text",
          x: x,
          y: y,
          props: {
            text: `Item ${i + 1}`,
          },
        });
      }
    }
  }, [items]);

  const handleGenerate = () => {
    const editor = editorRef.current;
    if (editor) {
      // Clear existing shapes if there's a method for that
      if (typeof editor.clear === 'function') {
        editor.clear();
      } else if (typeof editor.reset === 'function') {
        editor.reset();
      }

      // Add new shapes
      for (let i = 0; i < items; i++) {
        const shapeId = createShapeId();
        const row = Math.floor(i / Math.floor(maxWidth / (itemWidth + spacing)));
        const col = i % Math.floor(maxWidth / (itemWidth + spacing));
        const x = col * (itemWidth + spacing);
        const y = row * (itemHeight + spacing);

        editor.createShape({
          id: shapeId,
          type: "text",
          x: x,
          y: y,
          props: {
            text: `Item ${i + 1}`,
          },
        });
      }
    }
  };

  return (
    <div style={{ position: "relative", width: "80vw", height: "50vh" }}>
      <Tldraw
        hideUi={true}
        onMount={(editor) => {
          editorRef.current = editor;
        }}
      />
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <input
          type="number"
          value={items}
          onChange={(e) => setItems(Number(e.target.value))}
          min="1"
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleGenerate}>Generate Timeline</button>
      </div>
    </div>
  );
}
