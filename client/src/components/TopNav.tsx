import { BrowserRouter as Router, Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <Router>
      <div className="ui inverted menu">
        <a className="item">
          <Link to="/">Home</Link>
        </a>
        <a className="item">
          <Link to="/create">Create Issue</Link>
        </a>
      </div>
    </Router>
  )
}

export default TopNav
