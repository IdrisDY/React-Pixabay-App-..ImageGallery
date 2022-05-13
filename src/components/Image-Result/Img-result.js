import React, { Component } from 'react'
import  PropTypes from  'prop-types'
import  {GridList, GridTile} from 'material-ui'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import  Dialog from 'material-ui/Dialog'
import  FlatButton from 'material-ui/FlatButton'

export class ImageResults extends Component {
  render() {

    let ImageListContent;
    const {images} = this.props
    if(images){
       ImageListContent = (
          <GridList cols={3}>
          {images.map(img => 
{          const{largeImageURL, user, id, tags} = img
return(
  
  <GridTile title={tags} key={id} subtitle ={<span> by <strong> {user} </strong> </span>} actionIcon={<IconButton> <ZoomIn color = 'white'/> </IconButton>}>
<img src={largeImageURL} alt=''/>
             </GridTile>
)          })}
      </GridList>
 
       )
    }
    else{
      ImageListContent = null;

    }
    return (
      <div>{ImageListContent}</div>
    )
  }
}
ImageResults.ropTypes={

 images :PropTypes.array.isRequired

}
export default ImageResults

{/* 

<div className='pix' title={tags} key= {id}> <img src={largeImageURL} alt=''/> {likes}</div> 
*/}
