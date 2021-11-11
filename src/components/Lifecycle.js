import { Component } from "react";
export default class Lifecycle extends Component {
  render() {
    console.log("1-Render");
    return (
      <>
        <p>1.2 - UI Rendered</p>
        <p>Is component updating?</p>
      </>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("2componentDidUpdate", prevProps, prevState);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("3shouldComponentUpdate", this.props, this.state);
  }
  constructor(props) {
    super(props);
    console.log("4-Constructor" + props);
  }
  componentWillUnmount() {
    console.log("5-componentWillUnmount");
  }

  componentDidMount() {
    console.log("6-Component Mounted!");
  }

  static getDerivedStateFromProps(props) {
    console.log("7-getDerivedStateFromProps" + props);
  }
}
