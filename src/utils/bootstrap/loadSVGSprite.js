import axios from 'axios'
import spritePath from '@static/sprite.svg'

const createSVGDefWrapper = ({ data }) => {
  return new Promise((resolve) => {
    const wrapper = document.createElement('div')
    wrapper.id = 'svg-sprite'
    wrapper.innerHTML = data
    document.body.insertBefore(wrapper, document.body.childNodes[0])
    resolve()
  })
}

;(() => {
  const options = {
    url: spritePath,
    method: 'GET',
    headers: {
      Accept: '*/*',
    },
  }

  axios(options).then(createSVGDefWrapper).catch(console.error)
})()
