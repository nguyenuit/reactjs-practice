import { useEffect, useState } from "react"

//1. useEffect(callback)
//- Goi callback moi khi component re-render
//- Goi callback sau khi component them element vao DOM
//2. useEffect(callback, [])
//- Chi goi callback 1 lan sau khi component mounted
//3. useEffect(callback, [deps])

//-----
//1. Callback luon duoc goi sau khi component mounted

const tabs = ['posts', 'comments', 'albums']

function Content(){
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    console.log('type', type);

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
            {tabs.map((tab, index) => (
                <button
                key={index}
                style={type === tab ? {
                    color:'#fff',
                    backgroundColor: '#333'
                }:{}}
                onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
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