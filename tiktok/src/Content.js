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

function Content(){
    
    const [avatar, setavatar] = useState()

    const handlePreview = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)

        setavatar(file)
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    
    return (
        <div>
            <input
                type="file"
                multiple
                onChange={handlePreview}
            />
            {avatar && (
                <img src={avatar.preview} alt="Preview Avatar" width={500} />
            )}                 
        </div>
    )
}

export default Content