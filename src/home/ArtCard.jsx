import React from "react";

function ArtCard({ article }) {
  const imageSrc = article.image || "https://via.placeholder.com/96?text=No+Image";

  return (
    <div className="bg-white border border-gray-300 hover:shadow-md rounded-xl p-4 text-black transition duration-300 flex flex-col">
      <div className="flex items-start space-x-4 mb-3">
        <img
          src={imageSrc}
          alt={article.name}
          className="w-24 h-24 object-cover rounded-md flex-shrink-0"
        />
        <h2 className="text-lg font-semibold text-gray-800 self-center">{article.name}</h2>
      </div>
      <p className="text-sm text-gray-700 line-clamp-3 text-left">
        {article.description}
      </p>
    </div>
  );
}

export default ArtCard;
