import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleLogo from '../../public/google.png'
import FacebookLogo from '../../public/facebook.png'

function Login() {
  const history = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleClick = () => {
    const accessToken = ''; // Remplacez par l'accessToken approprié
    responseGoogle({ accessToken });
  };
  
  const handleFacebookClick = () => {
    const accessToken = ''; // Remplacez par l'accessToken approprié
    responseFacebook({ accessToken });
  };
  

  const responseGoogle = (response: {accessToken:string}) => {
    const { accessToken } = response;
    axios
      .post('/oauth2/callback/', accessToken)
      .then((res) => {
        // Gestion de la réponse réussie du backend après validation du token
        console.log(res.data);
        // Rediriger vers la page de paiement ou autre
        setIsLoggedIn(true);
        history('/payment');
      })
      .catch((error) => {
        // Gestion des erreurs
        console.error(error);
      });
  };

  const responseFacebook = (response: {accessToken:string}) => {
    const { accessToken } = response;
    axios
      .post('/oauth2/callback/', accessToken)
      .then((res) => {
        // Gestion de la réponse réussie du backend après validation du token
        console.log(res.data);
        // Rediriger vers la page de paiement ou autre
        setIsLoggedIn(true);
        history('/payment');
      })
      .catch((error) => {
        // Gestion des erreurs
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center pt-36 ">
    <div className="border border-black w-1/3 p-5 bg-slate-100">
      <h2 className="text-center text-2xl mb-10 mt-3 ">Login with Google and Facebook </h2>
      {!isLoggedIn && ( 
        <>
        <div className='flex justify-center '>
          <button
            onClick={handleGoogleClick}
            className="flex items-center border border-black bg-blue-200 px-4 p-2 mb-2"
          >
            <img src={GoogleLogo} alt="Google" className="w-8 mr-2" /> Google Login
          </button></div>
          <div className='flex justify-center mt-3 mb-10'>
          <button
            onClick={handleFacebookClick}
            className="flex items-center border border-black bg-blue-200 p-2 "
          >
            <img src={FacebookLogo} alt="Facebook" className="w-8 mr-2" /> Facebook Login
          </button>
          </div><br />
        </>
      )}
    </div>
  </div>
  )
}

export default Login;

//
//import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
//import { FacebookLoginWithButton } from 'facebook-login-react';
// {!isLoggedIn && (
//   <>
//     <GoogleOAuthProvider clientId="622609313112-fcj0ofbrgks5tubd8sgc8b4qgo9h07hn.apps.googleusercontent.com">
//       <GoogleLogin
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//         render={renderProps => (
//           <button onClick={renderProps.onClick}>Se connecter avec Google</button>
//         )}
//       />
//     </GoogleOAuthProvider>
//     <br />

//     <FacebookLoginWithButton
//       appId="1914233815616250"
//       fields="name,email,picture"
//       callback={responseFacebook}
//       render={renderProps => (
//         <button onClick={renderProps.onClick}>Se connecter avec Facebook</button>
//       )}
//     />
//   </>
// )}