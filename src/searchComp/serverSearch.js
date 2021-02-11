import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./style/serverSearch.scss";

class Serversearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: "",
    };
  }
  componentDidMount() {
    this.props.serverSearch("");
  }
  render() {
    return (
      <div className="server-search">
        <h5>Name</h5>
        <input
          value={this.state.searchString}
          onChange={(e) => {
            this.setState({ searchString: e.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.props.serverSearch(this.state.searchString);
          }}
        >
          Search
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      serverSearch: (data) => {
        return {
          type: "serverSearch",
          payload: data,
        };
      },
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Serversearch);
