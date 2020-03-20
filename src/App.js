import React from "react";
import "./app.scss";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";

const tempArr = [
  {
    fName: "Joe",
    lName: "Biden",
    email: "joe.biden@us.com",
    age: 624,
    onlineStatus: true
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Some sample blogs"
            desc="These are some filler text in a sort of filler structure"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 ? (
            <div>
              {posts.map((post, index) => {
                const { title, desc } = post;
                const configListitem = {
                  title,
                  desc
                };
                return <ListItem {...configListitem} key={index} />;
              })}
            </div>
          ) : null}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.Posts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
