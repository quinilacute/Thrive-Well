// import React from "react";
// import ArtCard from "./Artcard";



// const Article = ({article}) => {
//     return(
//         <div>
//             <h2>Articles and Resources</h2>
//             <div>
//                  {article.length > 0 ? (
//                 article.map((article) (
//                     <ArtCard key={article.id} article={article} />
//                 ))
//             ) :}
//             </div>

//         </div>
//     )
// }


// export default Article;




import React from "react";
import ArtCard from "./Artcard";

const Article = ({ article }) => {
  return (
    <div>
      <h2>Articles and Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {article.length > 0 ? (
          article.map((item) => (
            <ArtCard key={item.id} article={item} />
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    </div>
  );
};

export default Article;
