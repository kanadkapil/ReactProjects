import { useEffect, useState } from 'react'
import axios from 'axios'

const useGithubData = (username) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        setRepos(res.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  return { repos, loading }
}

export default useGithubData
