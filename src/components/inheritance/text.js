import Emoji from "./emoji";

class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const decorateText = this.addemoji("I am Hemel", "OK");
    return super.render(decorateText);
  }
}
export default Text;
