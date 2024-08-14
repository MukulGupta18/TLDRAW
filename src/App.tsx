import TldrawComponent from "./TldrawComponent";

export default function App() {
  return (
    <div style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Tldraw Timeline Component</h1>
      <TldrawComponent />
    </div>
  );
}
