import React from "react";
import Header from "./component/Header";
import Profile from "./component/Profile.jsx";
import Post from "./component/Post.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <Profile />
      <button className="top-btn">134 Post</button>
      <Post
        heading="A Changing World Order"
        description="The world is changing at a feverish pace. Friends,	
        colleagues and everyone engaged in knowledge	
        work are beginning to sense this, including ...	"
        author="musing by Anuj Gosalia"
        timePublished="August 2 • 2 mins Read • 102 Views	"
        likes={12}
      />
      <Post
        heading="Indian v/s Australia	
        	"
        description="Think about it - this cricket series was akin to	
        therapy.	
        Laying our childhood trauma up top, working with	
        it slowly and surely over two m..."
        author="thought by John Doe"
        timePublished="August 2 • 2 mins Read • 10 Views	"
        likes={422}
      />
      <Post
        heading="Write To Build	
        "
        description="Writing is the first step to create:	
        - stories	
        - products	
        - companies	"
        author="thought by Anuj Gosalia"
        timePublished="August 2 • 20 mins Read • 12 Views	"
        likes={40}
      />
    </div>
  );
}
// export default App;
