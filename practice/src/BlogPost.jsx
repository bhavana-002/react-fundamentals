
function BlogPost(product){
    const postStyle = {
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        backgroundColor: "beige"
    }
    return (
        <div style={postStyle}>
            <p>Author: {product.author}</p>
              <p>Title: {product.title}</p>
                <p>Description: {product.description}</p>
        </div>
    )
}
export default BlogPost;