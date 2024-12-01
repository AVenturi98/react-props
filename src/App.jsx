import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"
import { posts } from "./posts"

function App() {


  return (
    <>
      <Header />

      <div className="flex">
        {posts.map((post) =>
          <div key={post.id} className="col-6">
            <Card title={post.title} content={post.content} tags={post.tags} published={post.published} />
          </div>)}
      </div>

      <Footer />
    </>
  )
}

export default App
