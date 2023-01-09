import { useEffect, useState } from "react"

//1. useEffect(callback)
//- Goi callback moi khi component re-render
//- Goi callback sau khi component them element vao DOM
//2. useEffect(callback, [])
//- Chi goi callback 1 lan sau khi component mounted
//3. useEffect(callback, [deps])
//- Callback se duoc goi moi khi deps thay doi

//-----
//1. Callback luon duoc goi sau khi component mounted
const lessons = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id: 2,
        name: 'JS'
    }
]

function Content(){
    
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => window.removeEventListener(`lesson-${lessonId}`)
    }, [lessonId])
    
    return (
        <div>
            {lessons.map(lesson => (
                <li
                    key={lesson.id}
                    style={{
                        color: lessonId == lesson.id ?
                            'red' :
                            '#333'
                    }}
                    onClick={() => setLessonId(lesson.id)}
                >
                    {lesson.name}
                </li>
            ))}
        </div>
    )
}

export default Content