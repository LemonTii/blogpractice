import React, { useContext } from 'react';
import BlogCard from './BlogCard';
import { CoreContext } from './Provider';

function Home() {
    const { blogs } = useContext(CoreContext);

    console.log("blogs: ", blogs);

    return(
    <div className="listview">
        {blogs.map((blog, index) => (
            <BlogCard blog={blog} index={index}/>
        ))}
    </div>
    )
}

export default Home;