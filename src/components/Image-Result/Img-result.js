import React, { Component } from 'react'
import  PropTypes from  'prop-types'
import  {GridList, GridTile} from 'material-ui'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import  Dialog from 'material-ui/Dialog'
import  FlatButton from 'material-ui/FlatButton'

export class ImageResults extends Component {
  state ={
    open:false,
    currentImg:''
  }
  handleOpen= img =>{
    this.setState({open:true, currentImg:img})
}
  handleClose= () =>{
    this.setState({open:false})
}
  render() {

    let ImageListContent;
    const {images} = this.props
    if(images){
       ImageListContent = (
          <GridList cols={3}>
          {images.map(img => 
{          const{largeImageURL, user, id, tags} = img
return(
  
  <GridTile title={tags} key={id} subtitle ={<span> by <strong> {user} </strong> </span>} actionIcon={<IconButton onClick={()=>this.handleOpen(largeImageURL)}> <ZoomIn color = 'white'/> </IconButton>}>
<img src={largeImageURL} alt=''/>
             </GridTile>
)          })}
      </GridList>
 
       )
    }
    else{
      ImageListContent = null;
    }

    const actions = [
      <FlatButton label='Close' primary={true} onClick={this.handleClose}/>
    ]
    return (
      <div>{ImageListContent}
     <Dialog actions={actions}
     modal = {false}
     open = {this.state.open}
     onRequestClose={this.handleClose} >
<img src={this.state.currentImg} alt='' style={{ width:'100%'}}/>

     </Dialog>
      </div>
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
