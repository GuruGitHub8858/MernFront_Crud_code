import React, { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import ReactPlayer from 'react-player'
const StateChange = () => {
    const [word, setWord] = useState('');
    return (
        <div>

            {/* npm i react-player */}
            <ReactPlayer url={'https://www.youtube.com/watch?v=dC40ldh8ozY&t=90s'} controls></ReactPlayer>
            <label htmlFor="inputBox">IN</label>
            <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
            <p>
                {word}
            </p>
            <span>
                <a href="https://www.instagram.com/_guru_manoj/"> <InstagramIcon /></a>
            </span>
        </div>
    )
}

export default StateChange