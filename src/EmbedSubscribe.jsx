import React from 'react'

const EmbedSubscribe = () => {
  return (
    <div className='mt-80'>
      <iframe
        title="My Substack"
        src="https://babthedev.substack.com/embed"
        width="480"
        height="320"
        style={{ border: '1px solid #EEE', background: 'white' }}
        frameBorder="0"
        scrolling="no"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  )
}

export default EmbedSubscribe
