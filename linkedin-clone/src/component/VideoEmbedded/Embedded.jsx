import React, {useState} from 'react'
import "./embedded.css"

const Embedded = () => {
    const [videoId, setVideoId] = useState('');
  return (
    <div className='EmbeddedX'>
      <div className="embedCont">
        <div className="leftEmbed">
            <iframe className='YtVideo' width="600" height="355" src="https://www.youtube.com/embed/CsfjTujNApY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="rightEmbed">
            <div className="headLine">
                <h2>In it to chase my dream</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Embedded
