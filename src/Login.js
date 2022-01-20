import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Login extends React.Component {

    constructor(props){
        super(props)
        this.state={
            data: {},
            picture: {},
            loggedIn: false,
        }
    }

    responseFacebook = (response) => {
        console.log(response);

        if (response.accessToken) {
            this.setState({
                data: response,
                picture: response.picture.data,
                loggedIn: true,
            })
        }
    }
      
    render() {

        const { data, picture, loggedIn } = this.state;

        if (!loggedIn) {
            return( 
                <>
                    <div>
                        <FacebookLogin
                            appId="470923207936372"
                            autoLoad={true}
                            fields="first_name, email, picture, gender"
                            scope="public_profile, email"
                            callback={this.responseFacebook}
                        />
                    </div>
                </>
            )
        }
        else{
            return(
                <>
                    <img src={picture.url} alt={data.name}/>
                    <h2>{data.first_name}</h2>
                </>
            )
        }

        
    }
}