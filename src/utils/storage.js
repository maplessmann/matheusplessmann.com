const isLocalStorageSupported = () => {
  try {
    const testKey = 'key'
    window.localStorage.setItem(testKey, testKey)
    window.localStorage.removeItem(testKey)

    return true
  } catch (e) {
    return false
  }
}

const safeLocalStorage = (method) => (...args) => {
  if (isLocalStorageSupported()) {
    return window.localStorage[method](...args)
  }
}

export default {
  getItem: safeLocalStorage('getItem'),
  setItem: safeLocalStorage('setItem'),
  removeItem: safeLocalStorage('removeItem'),
}
