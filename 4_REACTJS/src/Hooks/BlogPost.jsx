import { useState } from "react"

const BlogPost =()=>{
    const [blogData , setBlogData] = useState({
        blogTitle :"",
        blogContent :""
    });

    const [blogList , setBlogList] = useState([]);
    const [editId , setEditId] = useState(null);

    // handleOnchange
    const handleOnChange = (e)=>{
        e.preventDefault();
        const {name , value} = e.target;
        setBlogData((prev)=>({
            ...prev,
            [name] :value
        }));
    };

    // handleBlogAddUpdate
    const handleBlogAddUpdate = (e)=>{
        e.preventDefault();
        // check the inputFiled is empty
        if(!blogData.blogTitle.trim() || !blogData.blogContent.trim()) return;
        
        // check if Blog Id is not null
        if(editId !== null){
            setBlogList((prev)=> prev.map((el)=> el.id === editId ? {...el , ...blogData} : el));
            setEditId(null);
            setBlogData({
                blogTitle:"",
                blogContent:""
            });
        }else{
            // if the blogid id null
            const newBlogData = {
                id :Date.now(),
                ...blogData,
            }
            setBlogList((prev)=>[...prev , newBlogData]);
            setBlogData({
                blogTitle:"",
                blogContent:""
            });
        }
    }

    // handleDeleteBlog
    const handleDeleteBlog = (id)=>{
        setBlogList((prev)=>prev.filter((el)=> el.id !== id));
    }

    // handleEditBlog
    const handleEditBlog =(id)=>{
        const selected = blogList.find((el)=> el.id === id);
        setBlogData({
            blogTitle:selected.blogTitle,
            blogContent:selected.blogContent
        });
        setEditId(id);
    }
    return (
        <div style={{margin:"20px"}}>
            <h1>Blog Crud Operations</h1>
            <form onSubmit={handleBlogAddUpdate}>
                <div>
                    <label>BlogTitle:</label>
                    <input type="text" name="blogTitle" value={blogData.blogTitle} onChange={handleOnChange} placeholder="Enter the BlogTitile:"/>
                </div>
                <div>
                    <label>BlogContent:</label>
                    <input type="text" name="blogContent" value={blogData.blogContent} onChange={handleOnChange} placeholder="Enter the BlogContent:"/>
                </div>

                <button type="submit">{editId !== null ? "UpdatedBlog" : "AddBlog"}</button>
            </form>
            <hr />

            {/* display Blogs Details */}
            <ul>
                {
                    blogList.map((el)=>(
                        <li key={el.id}>
                            <p>BlogTitle:{el.blogTitle}</p>
                            <p>BlogTitle:{el.blogContent}</p>
                            <button onClick={()=>handleEditBlog(el.id)}>EditBlog</button>
                            <button onClick={()=>handleDeleteBlog(el.id)}>DeleteBlog</button>
                            <hr />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
// export the blog
export default BlogPost;