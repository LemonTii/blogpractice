import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CoreContext } from './Provider';

function BlogCard({blog, index}) {
    const {setCurrentBlog} = useContext(CoreContext);

    return(
        <div className="blogCard">
          <img className="blogImg" alt="shrish" src="https://media-exp1.licdn.com/dms/image/C4D03AQHE5sBaBwTuTg/profile-displayphoto-shrink_200_200/0/1565559661007?e=1615420800&v=beta&t=yhigkggxXQYeAhv1620QTkeHKdpbN3qSR9szmn3FIhw"/>
          <div className="blogContent">
            <p className="blogTitle">{blog.title}</p>
            <p className="blogDate">{blog.date}</p>
            <p className="blogSnippet">{blog.content}</p>

            <Link to="/blog" onClick={() => setCurrentBlog(index)}>Read more</Link>
          </div>
        </div>
    )
}

export default BlogCard;