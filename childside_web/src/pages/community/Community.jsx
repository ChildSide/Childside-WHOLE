import React from 'react'
import Posts from '../../components/posts/posts'
import Share from '../../components/share/Share'
import './community.scss'
function Community() {
  return (
    <div className='social container w-75'>
        <Share/>
        <Posts/>
        </div>
  )
}

export default Community