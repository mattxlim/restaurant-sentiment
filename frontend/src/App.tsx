import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'

export default function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Route exact path="/"  component={HomePage} />
        <Route path="/users" component={UserPage} />
      </div>
    </Router>
  )
}