import React from 'react'
import ReactDOM from 'react-dom'
import { reportWebVitals } from './core'
import { GlobalStyles } from './styles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <h1>Hello React</h1>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
