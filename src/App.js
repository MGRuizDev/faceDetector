import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import key from './config.js';

const app = new Clarifai.App({
 apiKey: key
});

const particle_options = {
                        particles: {
                        number: {
                            value: 100,
                            density:{
                                enable: true,
                                value_area: 800
                            }
                        }
            		}
                    }

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            input: "",
            inputUrl:"",
            box:{},
            route: 'signin',
            isSignedin: false
        }
    }


    calculateFaceLocation = (data) => {
        const clarifaiImage = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = image.width;
        const height = image.height;
        return {
            leftCol: clarifaiImage.left_col * width,
            topRow: clarifaiImage.top_row * height,
            rightCol: width - (clarifaiImage.right_col * width),
            bottomRow: height - (clarifaiImage.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        this.setState({
            box: box
        });
    }

    onInputChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    }

    onDetectClick = (e) => {
        e.preventDefault();
        this.setState({
            inputUrl: this.state.input,
        });
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
              //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    }

    signinChange = (route) => {
        if(route === 'home'){
            this.setState({isSignedin: true});
        } else if (route === 'signout'){
            this.setState({isSignedin: false});
        }
        this.setState({
            route: route
        });
    }

    render(){
      return (
        <div className="App">
            <Particles className="particles"
                        params={particle_options} />

            <Navigation signinChange={this.signinChange} isSignedin={this.state.isSignedin}/>
            {this.state.route === 'home'
            ?  <div>
                  <Logo />
                  <Rank />
                  <ImageLinkForm onInputChange={this.onInputChange} onDetectClick={this.onDetectClick}/>
                  <FaceRecognition inputUrl={this.state.inputUrl} boxRecognition={this.state.box}/>
               </div>
            :(
            this.state.route === 'signin'
                ? <Signin signinChange={this.signinChange}/>
                : <Register signinChange={this.signinChange}/>
             )
            }
        </div>
      );
    }
}

export default App;
