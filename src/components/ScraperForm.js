import React, { useState } from "react";

function ScraperForm({ onScrape, loading }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onScrape(url);
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded p-4 mb-6"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none"
          disabled={loading}
        >
          {loading ? "Scraping..." : "Scrape Data"}
        </button>
      </div>
      {loading && (
        <p className="text-center text-gray-600 mt-4 italic">
          Let him cook... 🍳
        </p>
      )}
    </form>
  );
}

export default ScraperForm;
