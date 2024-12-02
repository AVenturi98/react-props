import { posts } from '../../../src/posts'

export default function tagsFiltered() {

    const tag = []

    posts.forEach((post) => {

        const postTags = post.tags

        for (let i = 0; i < postTags.length; i++) {

            if (!tag.includes(postTags[i])) tag.push(postTags[i])
        }
    })
    // console.log(tags)
    return tag.map((el) => <li key={el} className={`${el}Color`}>{el}</li>)
}