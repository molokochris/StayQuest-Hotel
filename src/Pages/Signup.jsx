import React from 'react'

export default function Signup() {
  return (
    <div>
      <form>
        <div className="email">
          <input type="text" name="Email" placeholder="Email" />
        </div>
        <div className="password">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button className="button">Sign Up</button>
        <p>
            Forgot Password? <span>click here</span>
        </p>
      </form>
    </div>
  )
}
