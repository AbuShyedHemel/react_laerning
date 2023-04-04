import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    text: "Script",
    library: "React",
    isChecked: true,
    title2: "",
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title1: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        //library: e.target.value,
        library: alert(e.target.value),
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        //library: e.target.value,
        isChecked: e.target.checked,
      });
    } else {
      console.log("Nothing Here");
    }
  };

  fromHandeler = (e) => {
    const { title, text, library, isChecked } = this.state;
    e.preventDefault();
    console.log(title, text, library, isChecked);
  };
  render() {
    const { title1, title2, text, library, isChecked } = this.state;
    return (
      <div>
        <form onSubmit={this.fromHandeler}>
          <input type="text" value={title1} onChange={this.handleChange} />
          <input type="text" value={title2} onChange={this.handleChange} />

          <br></br>
          <textarea
            name="text"
            value={text}
            onChange={this.handleChange}></textarea>
          <br></br>
          <select value={library} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="anguler">Anguler</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleChange}></input>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Form;
