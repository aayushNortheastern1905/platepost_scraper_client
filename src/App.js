
import React, { useState } from "react";
import ScraperForm from "./components/ScraperForm";
import Results from "./components/Results";

function App() {
  const [scrapedData, setScrapedData] = useState(null); // Store raw CSV content
  const [loading, setLoading] = useState(false);

  const handleScrape = async (url) => {
    setLoading(true);
    setScrapedData(null); // Clear previous data

    try {
      const response = await fetch("http://localhost:5000/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`Failed to scrape data: ${response.status}`);
      }

      // Get raw CSV content as text
      const csvContent = await response.text();
      console.log("Scraped CSV Content:", csvContent);

      // Save the raw CSV content in state
      setScrapedData(csvContent);
    } catch (error) {
      console.error("Error scraping:", error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Restaurant Menu Scrapper</h1>
      </header>

      <main className="p-4">
        <ScraperForm onScrape={handleScrape} loading={loading} />
        <Results data={scrapedData} />
      </main>
    </div>
  );
}

export default App;
