import React from 'react'
import Avatar from 'react-avatar-edit'

 
class AvatarUpload extends React.Component {
 
  constructor(props) {
    super(props)
    // const src = "../../../public/images/avatar.png";
    // const src="https://www.history.com/.image/t_share/MTU3ODc5MDg3NTA5MDg3NTYx/taj-mahal-2.jpg" ;
    let src = "./images/avatar-male.png" 
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }
  
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({src:preview})
  }
 
  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 7168000){
      alert("File is too big!");
      elem.target.value = "";
    };
  }
  onFileLoad(elem){
    if(elem){
      // this.src= `./images/${elem.name}`;
      console.log(elem);

      // console.log(elem.target)
    }
  }
  onClose(elem){
    console.log(elem)
    let src = "./images/avatar-male.png" 
  }
  onImageLoad(elem){
    if(elem){
      // this.src=elem.name;
      console.log(elem);
      // console.log(elem.target)
    }
  }
  render () {
    return (
      <div className="avatar-img">
               
               <div  className="avatar-edit">
               <Avatar
          width={1}
          height={1}
          lineWidth={1}
          onCrop={this.onCrop}
          onClose={this.onClose}
          onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.preview}
          label={<p className="avtar-upload"> <i className="fas fa-edit"></i></p> }
          onFileLoad={this.onFileLoad}
          onImageLoad ={this.onImageLoad}
          imageWidth ={0.2}
        />

               </div>
               <img className="avatar-img" src={this.state.src} alt="Preview" width="100%" height="100%"/>
   
      </div>
    )
  }
}
 
export default AvatarUpload;