import React, { useContext} from 'react';
import { CoreContext } from './Provider';
import { Link } from 'react-router-dom';

function BlogPage() {
    const { blogs, currentBlog } = useContext(CoreContext);

    return(
        <div className="BlogPage">
            <img className="blogImg" alt="shrish" src="https://media-exp1.licdn.com/dms/image/C4D03AQHE5sBaBwTuTg/profile-displayphoto-shrink_200_200/0/1565559661007?e=1615420800&v=beta&t=yhigkggxXQYeAhv1620QTkeHKdpbN3qSR9szmn3FIhw"/>
            <p className="blogTitle">{blogs[currentBlog].title}</p>
            <p className="blogDate">{blogs[currentBlog].date}</p>
            <p className="blogSnippet">{blogs[currentBlog].content}</p>

            <Link to="/home">Go back</Link>
        </div>
    )
}

export default BlogPage;