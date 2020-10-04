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

const getItem = (key) => {
  const value = safeLocalStorage('getItem')(key)
  return value ? JSON.parse(value) : null
}

const setItem = (key, value) => {
  safeLocalStorage('setItem')(key, JSON.stringify(value))
}

const removeItem = safeLocalStorage('removeItem')

export default {
  getItem,
  setItem,
  removeItem,
}
