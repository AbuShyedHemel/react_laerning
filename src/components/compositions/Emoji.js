import React from "react";

class Emoji extends React.Component {
  addemoji = (text, emoji) =>`${emoji} ${text} ${emoji}`
    render() {
    return this.props.children({addemoji: this.addemoji});
  }
}
export default Emoji;