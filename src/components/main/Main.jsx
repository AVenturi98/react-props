import { posts } from '../../posts'
import Card from '../card/Card'
import Tags from '../tags/Tags'

export default function mainSection() {

    return (
        <>
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
        </>

    )
}