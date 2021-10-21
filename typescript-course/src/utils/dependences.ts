import axios from 'axios'
import Simplebar from 'simplebar'
// const onscreen = require('onscreen')
import onscreen from 'onscreen'

const content = document.querySelector('#content') as HTMLLIElement

const simplebar = new Simplebar(content, { autoHide: true })

axios.get('/todo', {})
