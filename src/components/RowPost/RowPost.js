import React, {useEffect, useState} from 'react'
import axios from '../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
import './RowPost.css'
const RowPost = (props) => {
    const [movies, setMovies] = useState([])
    const [youtubeId, setYoutubeId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        })
    })
    const opts = {
        height : '400',
        width: '100%',
        playerVars: {
            autoplay: 1 ,
        }
    }
    const handleVideo = (id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.lenght !== 0){
                setYoutubeId(response.data.results[0].key)
            }else{
                console.log('Array is Empty')
            }
            
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {
                movies.map((obj)=>
                    <img onClick={()=>handleVideo(obj.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                    )
            }
        </div>
        {youtubeId && <YouTube opts={opts} videoId={youtubeId}/>}
    </div>
  )
}

export default RowPost