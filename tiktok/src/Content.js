import { useEffect, useState } from "react"

//1. useEffect(callback)
//- Goi callback moi khi component re-render
//- Goi callback sau khi component them element vao DOM
//2. useEffect(callback, [])
//- Chi goi callback 1 lan sau khi component mounted
//3. useEffect(callback, [deps])

//-----
//1. Callback luon duoc goi sau khi component mounted

function Content(){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log('load data tu API');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    }, [])
    
    return (
        <div>
            <h1>Hoc ReactJS!</h1>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content