import React from "react";
import ArtCard from "./ArtCard";
import article from "./article.json";

const Article = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Articles and Resources</h2>
      <div className="grid grid-cols-2 gap-4">
        {article.length > 0 ? (
          article.map((item) => <ArtCard key={item.id} article={item} />)
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    </div>
  );
};

export default Article;
