import MarkdownIt from "markdown-it";
import React, { Component } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { connect } from "react-redux";
const mdParser = new MarkdownIt();
// import "./MarkDown.scss";
class MarkDown extends Component {
  handleEditorChange({ html, text }) {
    console.log("handleEditorChange", html, text);
  }
  render() {
    return (
      <MdEditor
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={this.handleEditorChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkDown);
