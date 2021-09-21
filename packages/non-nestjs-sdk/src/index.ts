
export const authenticate = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('authenticating')
      resolve('yay')
    }, 2000)
  })
}
