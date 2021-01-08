import React, { createContext, useState } from 'react';

export const CoreContext = createContext({
    blogs: [],
    currentBlog: 0
})

export const CoreProvider = ({children}) => {
    const [blogs] = useState([
        {title: "FirstBlog", date: "I dont know", content: "...?"},
        {title: "SecondBlog", date: "I dont know", content: "...?"},
        {title: "ThirdBlog", date: "I dont know", content: "...?"},
        {title: "FourthBlog", date: "I dont know", content: "...?"},
        {title: "FifthBlog", date: "I dont know", content: "...?"},
        {title: "SixthBlog", date: "I dont know", content: "...?"},
        {title: "SeventhBlog", date: "I dont know", content: "...?"}
    ])

    const [currentBlog, setCurrentBlog] = useState(0);

    return(
        <CoreContext.Provider
            value={{
                blogs,
                currentBlog,
                setCurrentBlog
            }}
        >
            {children}
        </CoreContext.Provider>
    )
}