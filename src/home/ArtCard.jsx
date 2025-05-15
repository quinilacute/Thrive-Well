import React from "react";

function ArtCard({ article }) {
  const imageSrc =
    article.image || "https://via.placeholder.com/96?text=No+Image";

  return (
    <div className="bg-gray-200 border border-transparent hover:border-blue-400 rounded-lg shadow-md p-4 flex flex-col space-y-3 text-black max-w-full">
      <div className="flex items-start space-x-4">
        <img
          src={imageSrc}
          alt={article.name}
          className="w-24 h-24 object-cover rounded-md flex-shrink-0"
        />
        <h2 className="font-semibold text-lg self-center">{article.name}</h2>
      </div>
      <p className="text-sm text-gray-700 text-left">{article.description}</p>
    </div>
  );
}

export default ArtCard;
