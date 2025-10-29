<<<<<<< HEAD
import React from 'react'
import Service from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, image}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={Service.getFileView(image)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


=======
import React from 'react'
import Service from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, image}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={Service.getFileView(image)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


>>>>>>> 0b42a430be9d6fef8d718d6e162fcd55bf825e56
export default PostCard