
import React from "react";

function Results({ data }) {
  if (!data) {
    return <p className="text-center text-gray-500">No data to display.</p>;
  }

  const handleDownload = () => {
    // Create a Blob and trigger the download
    const blob = new Blob([data], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "scraped_data.csv"; // File name for download
    link.click();
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-4">Scraped Data</h2>
      <button
        onClick={handleDownload}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download CSV
      </button>
    </div>
  );
}

export default Results;
