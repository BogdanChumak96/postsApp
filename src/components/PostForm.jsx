
import React, { useRef, useState } from 'react';
import { MyButton } from './UI/Button/MyButton';
import { MyInput } from './UI/Input/MyInput';


export const PostForm = ({create}) => {
  
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id : Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })

    }
    return (
        <form>
            {/* Управляемый компонент */}
            <MyInput
                type="text"
                value={post.title}
                onChange={event => setPost({ ...post, title: event.target.value })}
                placeholder='Название поста'
            />
            <MyInput
                type="text"
                value={post.body}
                onChange={event => setPost({ ...post, body: event.target.value })}
                placeholder='Описание поста' />
            <MyButton onClick={addNewPost} > Запостить</MyButton>
        </form>
    )
}
