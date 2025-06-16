import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="navbar bg-primary text-primary-content px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Kanad's Portfolio
        </Link>
      </div>

      <div className="hidden md:flex gap-2">
        <Link to="/about" className="btn btn-sm btn-ghost hover:bg-primary-focus">About</Link>
        <Link to="/projects" className="btn btn-sm btn-ghost hover:bg-primary-focus">Projects</Link>
        <Link to="/skills" className="btn btn-sm btn-ghost hover:bg-primary-focus">Skills</Link>
        <Link to="/education" className="btn btn-sm btn-ghost hover:bg-primary-focus">Education</Link>
        <Link to="/certificates" className="btn btn-sm btn-ghost hover:bg-primary-focus">Certificates</Link>
        <Link to="/contact" className="btn btn-sm btn-ghost hover:bg-primary-focus">Contact</Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <button tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 text-primary-content">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
