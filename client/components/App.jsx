import React from 'react'

const App = () => {
  return (
    <div className="main">
      <div className="header">
        <h1>Justin Cole</h1>
      </div>

      <div className="row">
        <div className="col-3 col-s-3 menu">
          <ul>
            <li>Relative, absolute and fixed positioning</li>
            <li>Display inline vs Inline block</li>
            <li>Identity, values and strengths</li>
            <li>EQ vs IQ</li>
          </ul>
        </div>

        <div className="col-6 col-s-9">
          <h1>Web Developer</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            totam nobis, facere necessitatibus inventore voluptatibus. Iste modi
            error, amet quis repellat eos inventore doloremque. Omnis ad officia
            ullam perspiciatis aliquid.
          </p>
        </div>

        <div className="col-3 col-s-12 menu">
          <ul>
            <li>Leraning Plan</li>
            <li>Growth Mindset</li>
            <li>The story of Te Houtaewa</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <p>Enspiral Dev Academy 2021</p>
      </div>
    </div>
  )
}

export default App
