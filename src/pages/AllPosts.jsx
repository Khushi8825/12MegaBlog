<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import Service from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
    Service.getAllPost().then((posts) => {
        if (posts) setPosts(posts.documents)
        })
    },[]);

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

=======
import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import Service from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
    Service.getAllPost().then((posts) => {
        if (posts) setPosts(posts.documents)
        })
    },[]);

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

>>>>>>> 0b42a430be9d6fef8d718d6e162fcd55bf825e56
export default AllPosts