// import { useContext, useEffect, useState } from 'react';
// import '../styles/band.css';
// import Login from './Login';
// import Register from './Register';
// import axios from 'axios';
// import UserContext from '../context/UserContext';

// const Band = ({
//   loginClicked,
//   setLoginClicked,
//   registerClicked,
//   setRegisterClicked,
// }) => {
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const [ready, setReady] = useState(false);
//   const { user, setUser } = useContext(UserContext);
//   useEffect( () => {
//      if (token) {
//        axios
//           .post('http://localhost:5000/security/check-token', {
//             token: token,
//           })
//           .then((response) => {
//             if (response.data.message === 'Loggedin') {
//               setUser(response.data.user);
//             }
//           })
//     }
//   setReady(true);
//   }, []);
//   if (ready) {
//     return (
//       <>
//         <div className="band">
//           <div className="band-users">
//             {token ? (
//               <>
//                 <p className="band-clickable">Profil</p>
//                 <p
//                   className="band-clickable"
//                   onClick={() => {
//                     localStorage.removeItem('token');
//                     setToken(null);
//                     window.location.reload();
//                   }}
//                 >
//                   Déconnexion
//                 </p>
//               </>
//             ) : (
//               <>
//                 <p
//                   className="band-clickable"
//                   onClick={() => {
//                     setLoginClicked(true);
//                     setRegisterClicked(false);
//                   }}
//                 >
//                   Connexion
//                 </p>
//                 <p
//                   className="band-clickable"
//                   onClick={() => {
//                     setRegisterClicked(true);
//                     setLoginClicked(false);
//                   }}
//                 >
//                   Inscription
//                 </p>
//               </>
//             )}
//           </div>
//           <Login visible={loginClicked} setVisible={setLoginClicked} />
//           <Register visible={registerClicked} setVisible={setRegisterClicked} />
//         </div>
//           {/* <div className="band-users">
//             {token ? (
//               <>
//                 <p className="band-clickable">Profil</p>
//                 <p
//                   className="band-clickable"
//                   onClick={() => {
//                     localStorage.removeItem('token');
//                     setToken(null);
//                     window.location.reload();
//                   }}
//                 >
//                   Déconnexion
//                 </p>
//               </>
//             ) : (
//               <>
//                 <p
//                   className="band-clickable"
//                   onClick={() => {
//                     setLoginClicked(true);
//                     setRegisterClicked(false);
//                   }}
//                 >
//                   Connexion
//                 </p>
//                 <p
//                   className="band-clickable"
//                   onClick={() => {
//                     setRegisterClicked(true);
//                     setLoginClicked(false);
//                   }}
//                 >
//                   Inscription
//                 </p>
//               </>
//             )}
//           </div>
//           <Login visible={loginClicked} setVisible={setLoginClicked} />
//           <Register visible={registerClicked} setVisible={setRegisterClicked} /> */}
//         {/* </div> */}
//       </>
//     );
//   } else return null;
// };

// export default Band;
