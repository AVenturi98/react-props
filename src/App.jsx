import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"
import { posts } from "./posts"
import Tags from "./components/tags/Tags"

function App() {

  return (
    <>
      <Header />

      <div className="row">
        {posts.map((post) =>
          <div key={post.id} className="col-6">
            <Card title={post.title} content={post.content} tags={post.tags} published={post.published} image={post.image} />
          </div>)}
      </div>
      <div className="container">
        <ul className="row">
          <Tags />
        </ul>
      </div>

      <Footer />
    </>
  )
}

export default App
