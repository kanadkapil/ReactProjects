import useGithubData from '../hooks/useGithubData'

export default function Projects() {
  const { repos, loading } = useGithubData('your-github-username')

  if (loading) return <p>Loading projects...</p>

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">GitHub Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map(repo => (
          <div key={repo.id} className="card shadow-md bg-base-100 p-4">
            <h3 className="font-semibold">{repo.name}</h3>
            <p>{repo.description}</p>
            <a className="text-primary" href={repo.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  )
}
