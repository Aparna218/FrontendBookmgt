import React from "react";
import axios from "axios";

class CreateBook extends React.Component {
  constructor() {
    super();
    this.state = {
        title:"",
         excerpt:"",
         userId:"",
         ISBN:"",
         category:"",
          subcategory:"",
           releasedAt:"",
            isDeleted:"",
             reviews:"",
              bookCover:"",
      formDisabled: false,
    };
  }
  //title, excerpt, userId, ISBN, category, subcategory, releasedAt, isDeleted, reviews, bookCover
  handleFormSubmit(event) {
    const { title, excerpt, userId, ISBN, category, subcategory, releasedAt, isDeleted, reviews, bookCover} = this.state;
    event.preventDefault();
    
    this.setState({
      formDisabled: true,
    });
    axios
      .post("http://localhost:3001/books", {
        title, excerpt, userId, ISBN, category, subcategory, releasedAt, isDeleted, reviews, bookCover
      })
      .then((response) => {
        console.log("response", response);
        this.setState({
          formDisabled: false,
        });
        this.setState({
            title:"",
            excerpt:"",
            userId:"",
            ISBN:"",
            category:"",
             subcategory:"",
              releasedAt:"",
               isDeleted:"",
                reviews:"",
                 bookCover:"",
        });
        alert("Registration Successful!");
      });
  }
  render() {
    return (
      <div>
        <h2>CreateBook </h2>
        <form
          onSubmit={(event) => this.handleFormSubmit(event)}
          style={{
            padding: "40px",
            backgroundColor: "#eee",
          }}
        >
            <div className="mb-3">
            <label for="title" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="your title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="excerpt" className="form-label">
            excerpt
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="your excerpt"
              value={this.state.excerpt}
              onChange={(e) => {
                this.setState({
                    excerpt: e.target.value,
                });
              }}
            />
          </div>
          

          <div className="mb-3">
            <label for="userId" className="form-label">
            userId
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              placeholder="your userId"
              value={this.state.userId}
              onChange={(e) => {
                this.setState({
                    userId: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="ISBN" className="form-label">
            ISBN
            </label>
            <input
              type="text"
              className="form-control"
              id="ISBN"
              placeholder="your ISBN"
              value={this.state.ISBN}
              onChange={(e) => {
                this.setState({
                    ISBN: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="category" className="form-label">
            category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="your category"
              value={this.state.category}
              onChange={(e) => {
                this.setState({
                    category: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="subcategory" className="form-label">
            subcategory
            </label>
            <input
              type="text"
              className="form-control"
              id="subcategory"
              placeholder="your subcategory"
              value={this.state.subcategory}
              onChange={(e) => {
                this.setState({
                    subcategory: e.target.value,
                });
              }}
            />
          </div>




          <div className="mb-3">
            <label for="reviews" className="form-label">
            reviews
            </label>
            <input
              type="reviews"
              className="form-control"
              id="reviews"
              placeholder="your reviews"
              value={this.state.reviews}
              onChange={(e) => {
                this.setState({
                    reviews: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="releasedAt" className="form-label">
            releasedAt
            </label>
            <input
              type="text"
              className="form-control"
              id="releasedAt"
              placeholder="your releasedAt"
              value={this.state.releasedAt}
              onChange={(e) => {
                this.setState({
                    releasedAt: e.target.value,
                });
              }}
            />
          </div>

          <button
            disabled={this.state.formDisabled}
            type="submit"
            class="btn btn-primary mb-3"
          >
            Submit
          </button>

          {this.state.formDisabled && (
            <p> Form is being submitted please wait.</p>
          )}
        </form>
        <br />
        <br />
        <div
          style={{
            padding: "40px",
          }}
        >
           Book Details - <br />
          title - {this.state.title}
          <br />
          excerpt - {this.state.excerpt}
          <br />
          category - {this.state.category}
          <br />
          subcategory - {this.state.subcategory}
          <br />
          ISBN - {this.state.ISBN}
          <br />
          userId - {this.state.userId}
        </div>
      </div>
    );
  }
}

export default CreateBook;