import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"
import { posts } from "./posts"

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
          {tagsFiltered()}
        </ul>
      </div>

      <Footer />
    </>
  )
}

export default App

function tagsFiltered() {

  const tag = []

  posts.forEach((post) => {

    const postTags = post.tags

    for (let i = 0; i < postTags.length; i++) {

      if (!tag.includes(postTags[i])) tag.push(postTags[i])
    }
  })
  // console.log(tags)
  return tag.map((el) => <li className={`${el}Color`}>{el}</li>)
}


/*

const tags = post.tags
            const arrayUnito = []
            for (let i = 0; i < arrayUnito.length; i++) {
              if (!arrayUnito.includes(tags[i]))
                arrayUnito.push(tags[i]);
            }
            console.log(arrayUnito)


*/