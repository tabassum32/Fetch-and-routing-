// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formattedBlogsData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: formattedBlogsData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00Bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blog-lists">
            {blogsData.map(each => (
              <BlogItem key={each.id} blogDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
