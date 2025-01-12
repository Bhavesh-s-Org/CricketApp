import {} from 'react';
import AppBar from './Components/AppBar'

function App() {
  const style = {
    height: '60%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'

  };

  return (
    <>
      <AppBar/>
      <img src="https://pbs.twimg.com/media/E4Ph7CZVUA0SbIC.jpg:large" alt="Placeholder Image"

    style={style}    
      />


    </>
  )
}

export default App
