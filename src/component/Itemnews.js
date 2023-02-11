import React, { Component } from 'react'

export class Itemnews extends Component {
   

  render() {
    let {title,detail,imgUrl,newsurl,author,date}=this.props;
    return (
      <div>
           <div className="card my-3" style={{width: "18rem"}}>
  <img src={!imgUrl?"https:www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/Tesla_Model_357.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> {detail}</p>
    <p className="card-text"><small className="text-muted">by {!author?"unknown":author} on {date}</small></p>
    <a rel="noreferrer" href={newsurl} target='_blank' className="btn-sm btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Itemnews