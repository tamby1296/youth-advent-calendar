import React from 'react'

const YTEmbed = ({ link }) => {
  console.log(link)
  return (
    <div
      className="youtube-video-container"
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        width: '100%'
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={link}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}

export default YTEmbed
