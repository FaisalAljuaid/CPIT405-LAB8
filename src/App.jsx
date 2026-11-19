import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = (e) => {
    e.preventDefault();
    if (!longUrl.trim()) return;

    const code = customCode.trim()
        ? customCode.trim()
        : Math.random().toString(36).substring(2, 8);

    setShortUrl(`https://cpt405.co/${code}`);
  };

  return (
      <div className="card">
        <h1>Link Shrinker</h1>
        <form onSubmit={handleShorten}>
          <div className="form-group">
            <label>Long URL:</label>
            <input
                type="url"
                placeholder="https://react.dev/learn/reusing-logic-with-custom-hooks"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                required
            />
          </div>

          <div className="form-group">
            <label>Enter short code:</label>
            <input
                type="text"
                placeholder="react101"
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="shorten-btn">
              Shorten
            </button>
          </div>
        </form>

        {shortUrl && (
            <div className="result-section">
              <label>Short URL</label>
              <div className="short-url-box">
                <a href={longUrl} target="_blank" rel="noopener noreferrer">
                  {shortUrl}
                </a>
              </div>
            </div>
        )}
      </div>
  );
}

function AboutUs() {
  return (
      <div className="card">
        <h1>About Us</h1>
        <p>
          Link Shrinker is a React application built for CPIT-405 that converts
          long URLs into concise, customizable, and shareable links using React
          State and React Router.
        </p>
      </div>
  );
}

export default function App() {
  return (
      <Router basename="/CPIT405-LAB8">
        <div className="app-wrapper">
          <nav className="navbar">
            <Link to="/" className="nav-btn">
              Home
            </Link>
            <Link to="/about" className="nav-btn">
              About us
            </Link>
          </nav>

          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}