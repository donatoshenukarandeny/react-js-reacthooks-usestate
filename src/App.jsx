import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [num1, setnum1] = useState(5);
  const [count, setcount] = useState(0);
  const [click, setclick] = useState(0);
  const [post, setpost] = useState([]);

  const handelClick = () => {
    setnum1(3)
  }

  const decrementFunction = () => {
    setcount(count -1)
  }
  
  const incrementFunction = () => {
    setcount(count + 1)
  }

  useEffect(() => {
    document.title = `You click ${click} times`
  }, [count])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then((resp) => resp.json())
    .then((blogPosts) => setpost(blogPosts));

    console.log("run");
  }, []);

  return (
    <>
     <div id="wrapper">
      <button onClick={handelClick}>Click</button>
      <p>{num1}</p>

      <p>Counter</p>
      <button onClick={decrementFunction}>-</button>
      <button onClick={incrementFunction}>+</button>
      <p>{count}</p>

      <p>You click {click} times</p>
      <button onClick={()=> setclick(click + 1)} >Click me</button>

      <ul className="prod_list" style={{color:"white", "paddingLeft": "20px"}}>
        {post && post.map((post) => <li key={post.id} style={{listStyleType:"circle"}}>{post.title}</li>)}
      </ul>

     </div>
    </>
  )
}

export default App
