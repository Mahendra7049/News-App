import React, { Component } from 'react'
import { BrowserRouter as Router,
  Route,
  Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import News from './component/News'

export class App extends Component {
  pageSize=15
  render() {
    return (
      <div>
        <Router>
        <Navbar />
      <Routes>
        <Route exact path="/home" element={<News key="" pageSize={this.pageSize}  country="in" category="general"/>} />
        <Route exact path="/news" element={<News key="general" pageSize={this.pageSize}  country="in" category="general"/>} />
        <Route exact path="/sports" element={<News key="sports"pageSize={this.pageSize}   country="in" category="sports"/>} />
        <Route exact path="/science" element={<News key="science" pageSize={this.pageSize}  country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment"pageSize={this.pageSize}   country="in" category="entertainment"/>} />
        <Route exact path="/business" element={<News key="business" country="in"pageSize={this.pageSize}   category="business"/>} />
        <Route exact path="/technology" element={<News key="technology" country="in"pageSize={this.pageSize}   category="technology"/>} />
        <Route exact path="/health" element={<News key="health" pageSize={this.pageSize}  country="in" category="health"/>} />
      </Routes>
      </Router>
      </div>
    )
  }
}

export default App