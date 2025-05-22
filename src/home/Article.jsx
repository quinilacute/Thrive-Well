import React from "react";
import ArtCard from "./ArtCard";
import article from "./article.json";
import card from "../assets/icons/card.png";
import hum from "../assets/icons/hum.png";
import rec from "../assets/icons/rec.png";
"

const Article = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Articles and Resources</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
  {article.length > 0 ? (
    article.map((item) => <ArtCard key={item.id} article={item} />)
  ) : (
    <p className="col-span-full text-center text-gray-600">No articles available.</p>
  )}
</div>
    </div>
  );
};

export default Article;
