import { Button } from './components/Button';
export function App() {
  return (
    <div style={{ padding: '32px', display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary">Tallenna</Button>
      <Button variant="accent">Tärkeä toiminto</Button>
      <Button variant="secondary">Peruuta</Button>
    </div>
  );
}

export default App;