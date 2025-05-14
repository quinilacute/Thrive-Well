// import React from 'react';
// import article from "./article.json";


// function Container({}) {
//   return (
//     <div
//       className="bg-gray hover:border-blue-400 shadow-lg p-6 rounded-lg flex flex-col  text-black"
//     >

//                     <img src={article.image} alt="" />
//                     <h2>{article.name}</h2>
//                     <p>{article.description}</p>
//     </div>
//   );
// }

// export default Container;






import React from 'react';

function ArtCard({ article }) {
  return (
    <div className="bg-gray hover:border-blue-400 shadow-lg p-6 rounded-lg flex flex-col text-black">
      <img src={article.image} alt={article.name} />
      <h2>{article.name}</h2>
      <p>{article.description}</p>
    </div>
  );
}

export default ArtCard;
