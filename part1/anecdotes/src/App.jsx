const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello World</p>
      <Hello />
      <Hello name="George" />
      <Hello name="Daisy" />
    </div>
  )
}

export default App
