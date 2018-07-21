import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './static/css/app.css'
import Hello from './components/Hello'



ReactDOM.render(<Hello name="jack" vipLevel= {21} /> ,document.getElementById('app') as HTMLElement)

