import { useEffect, useState } from 'react'
import profileData from '../data/profile.json'

export default function Home() {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    setProfile(profileData)
  }, [])

  return (
    <div className="text-center">
      <img src="/assets/images/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
      <h1 className="text-3xl font-bold mt-4">{profile.name}</h1>
      <p className="text-lg">{profile.title}</p>
      <a href="/assets/docs/resume.pdf" className="btn btn-primary mt-4" download>Download Resume</a>
    </div>
  )
}
