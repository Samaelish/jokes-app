import { useEffect, useState } from 'react'
import './joke.css'
import axios from 'axios'

const Joke = () => {
  const [text, setText] = useState('Loading...')
  const jokesUrl = 'https://api.chucknorris.io/jokes/random'

  useEffect(() => {
    getJoke(jokesUrl)
  }, [])

  const getJoke = async jokesEndpoint => {
    try {
      const response = await axios.get(jokesEndpoint)
      if (response.status !== 200) {
        setText('Error in response. Try again later')
        return
      }

      const data = response.data
      setText(data.value)
    } catch (error) {
      console.error(error)
      setText('Error in connection. Try again later')
    }
  }
  return (
    <div className='joke'>
      <p>{text}</p>
      <button onClick={() => getJoke(jokesUrl)}>Next Joke</button>
    </div>
  )
}

export default Joke
