import React, { Component } from "react";
import Itemnews from "./Itemnews";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResult: 0,
    };
  }
  async updatenews(pageno) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.category}&apiKey=10ca35e11af4444caabc2c600ebf1992&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResult: parseData.totalResult,
      loading: false,
    });
  }

  componentDidMount = async (props) => {
    this.updatenews();
  };
  fetchMoreData = async () => {
 this.setState({page:this.state.page+1})
 const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.category}&apiKey=10ca35e11af4444caabc2c600ebf1992&page=${this.state.page}&pageSize=${this.props.pageSize}`;
 this.setState({ loading: true });
 let data = await fetch(url);
 let parseData = await data.json();
 this.setState({
   articles:this.state.articles.concat( parseData.articles),
   totalResult: parseData.totalResult,
   loading: false
 
 });
};

  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center">NewsMonkey-Top Headlines</h1>
        {/* {this.state.loading && <Spiner />} */}
        <div className="row">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResult}
            loader={<Spiner></Spiner>}
          >
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Itemnews
                    title={element.title ? element.title.slice(0, 46) : " "}
                    detail={
                      element.description
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    newsUrl={element.url}
                    imgUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
       
      </div>
    );
  }
}

export default News;
