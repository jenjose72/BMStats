import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../../css/index.css'
import Header from '../common/Header.jsx'
import TopStatSheet from './TopGoalScorer.jsx'
import Footer from '../common/Footer.jsx'
import TopAssists from './TopAssists.jsx'
import TopGA from './TopGA.jsx'
import MostMinutes from './MostMinutes.jsx'
import CompactStat from './CompactStat.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <CompactStat />
      <Footer />
  </React.StrictMode>,
)
