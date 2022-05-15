import React from 'react'
import styles from './../styles/post.css'
import { MyButton } from './UI/Button/MyButton'

const PostItem = (props) => {
  const removePost= () =>{

  }
  return (
    <div className='wrapper'>
        <div className="header">
            <h1>{props.number}. {props.post.title}</h1>
            <div>{props.post.body}</div>
        </div>
        <MyButton onClick = {()=>props.remove(props.post)}>Delete</MyButton>
    </div>
  )
}

export default PostItem