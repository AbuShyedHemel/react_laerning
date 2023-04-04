import React from "react";

class Emoji extends React.Component {
  addemoji = (text, emoji) =>`${emoji} ${text} ${emoji}`
    render(overrider) {
   let text = ' I am the component';

   if(overrider) text = overrider;
   return <div>{text}</div>
    
  }
}
export default Emoji;
