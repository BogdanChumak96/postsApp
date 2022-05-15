import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './App.css'
import { PostForm } from './components/PostForm';
import Select from './components/UI/Select/Select';
import { MyInput } from './components/UI/Input/MyInput';



function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'HTML', body: 'Text markup' },
        { id: 3, title: 'CSS', body: 'Styles for html' },
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts(){
        console.log('Отработала функция гет сортед постс')
        if(selectedSort){
            return  [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]) )
        }
            return posts
    }

    const sortedPosts = getSortedPosts()

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        
    }

    return (<div className="App" >
        <PostForm create={createPost} />
        <hr />
        <MyInput
        value = {searchQuery}
        onChange = {e => setSearchQuery(e.target.value)}
         type="text"
         placeholder = 'Поиск... '
         />
        <Select
            value = {selectedSort}
            onChange = {sortPosts}
            defaultValue="Сортировка по"
            options={[
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По описанию' }
            ]}
        />
        {posts
            ? <PostList remove={removePost} posts={sortedPosts} title={'List of web tech'} />
            : <h1 style={{ textAlign: 'center' }}>Not posts</h1>
        }

    </div>
    )
}

export default App;