// Write your JS code here
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`}>
        <div className="blog-item-container">
          <img className="img-url" src={imageUrl} alt={`item${id}`} />
          <div className="blog-info">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-info">
              <img className="avatar-url" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
