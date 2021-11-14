import React from 'react'

function Footer () {
  return (
    <>
      <div className="Footer">
        <h5>© Danny Goulter 2021</h5>
        <div className ="socialmedia">
          <a href="https://twitter.com/dannyrambles"><img className="twitterpic"
            src="./images/twitter.png" alt="Twitter Profile"></img></a>
          <a href="https://www.facebook.com/dannygoulter"><img className="fbpic"
            src="./images/facebook.png" alt="Facebook Profile"></img></a>
          <a href="https://www.instagram.com/dannyrambles/"><img className="instapic"
            src="./images/insta.png" alt="Instagram Profile"></img></a>
        </div>
      </div>
    </>
  )
}

export default Footer
