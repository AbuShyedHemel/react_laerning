import React from "react";

class Brackets extends React.Component {
  addbrackets = (text) =>`[ ${text} ]`
    render() {
    return this.props.children({addbrackets: this.addbrackets});
  }
}
export default Brackets;