import { useState, useEffect } from 'react';
import './App.css';

const API = import.meta.env.VITE_API_URL;

export default function App() {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [error, setError] = useState('');

  const loadLinks = async () => {
    const res = await fetch(`${API}/api/links`);
    setLinks(await res.json());
  };

  useEffect(() => {
    loadLinks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await fetch(`${API}/api/links`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originalUrl: url }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error);
    setUrl('');
    loadLinks();
  };

  return (
    <div className="container">
      <h1>🔗 LinkVault</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/very/long/link"
        />
        <button type="submit">Shorten</button>
      </form>
      {error && <p className="error">{error}</p>}

      <h2>Your Links</h2>
      {links.map((l) => (
        <div className="card" key={l._id}>
          <a href={`${API}/${l.shortCode}`} target="_blank" rel="noreferrer">
            {API}/{l.shortCode}
          </a>
          <p className="orig">{l.originalUrl}</p>
          <span className="clicks">{l.clicks} clicks</span>
        </div>
      ))}
    </div>
  );
}