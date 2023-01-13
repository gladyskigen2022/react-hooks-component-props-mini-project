import React from "react";
import Article from "./Article";


function ArticleList({posts}) {
    const articleListArray = posts.map((post) => (
        <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
        />
    )
        );
    
        
    return (
    <main> 
        {articleListArray}
    </main>
    );
};

export default ArticleList;

  