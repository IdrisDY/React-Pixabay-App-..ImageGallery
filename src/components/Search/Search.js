import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem/MenuItem'
import axios from 'axios'
import ImageResults from '../Image-Result/Img-result'

 class Search extends Component {
    state ={
       searchText: '',
       amount:15,
       apiurl:'https://pixabay.com/api',
       apikey: '27357333-02306d421441ee805367dd9af',
         images:[]
    }
/* A function that is called when the text field is changed. */
    onTextChange= e =>{
       const val  = e.target.value
       if (val === ''){
          this.setState({images :[]})
       }
       else{
          this.setState({[e.target.name  ] : e.target.value}, ()=>{
/* Making a request to the API and setting the state of the images to the response. */
   axios.get(`${this.state.apiurl}/?key=${this.state.apikey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
.then(res =>this.setState({images:res.data.hits }), console.log('working'))
.catch(err=> 
   console.log(err.response)
)
    })

       }

    }

    onAmountChange = (e,index,value) =>{ this.setState({amount:value})

    }

  render() {
     console.log(this.state.images)
    return (
      <div>
         <TextField name='searchText' value={this.state.searchText} onChange={this.onTextChange} floatingLabelText='Search for Images' fullWidth= {true}/>
         <SelectField
         name='amount'
          onChange={this.onAmountChange}
          inputProps={{ 'aria-label': 'Without label' }}
          value={this.state.amount}
          floatingLabelText= 'Amount'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} primaryText={'Ten'}></MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectField>
     
     { 
        this.state.images.length > 0 ? ( <ImageResults images = {this.state.images} />):null
     }
      </div> 
    )
  }
}
export default Search