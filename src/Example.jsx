export default function Example() {
  const name = 'John';
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];
  const loggedIn = true;

  const styles = {
    color:  'green',
    fontSize: '55px'
  }

  return (
    <>
      <h1 className="text-3xl text-blue-500 font-bold underline">
        Hello world!
      </h1>
      <p style={{color: 'red', fontSize: '24px'}}>{name}</p>
      <p style={styles}>
        The sum of {x} and {y} is { x + y }
      </p>
      <ul>
        { names.map( (name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      { loggedIn ? <h1>Hello True</h1> : <h1>Hello False</h1>}
    </>
  )
}
