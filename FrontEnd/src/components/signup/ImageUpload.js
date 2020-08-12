import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ImageUpload extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: '' };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        
        this.setState({
            pictures: picture
        });
    }
 
    render() {
        return (
            <div className="img-upld">
            <ImageUploader className="img-upld"
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                label ={''}
                withIcon ={false}
                withPreview={this.state.pictures}
                singleImage={true}
               
                
            />
            {this.state.pictures.length!==0 &&  console.log(this.state.pictures)}
            {this.state.pictures.length!==0 && <button className="accept-img">SUBMIT</button>}
            </div>
        );
    }
}

export default ImageUpload;