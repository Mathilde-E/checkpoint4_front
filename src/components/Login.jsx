// import { useState } from 'react';
// import '../styles/login.css';
// import axios from 'axios';

// export const Login = ({ visible, setVisible }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     const body = { email, password };
//     const response = await axios.post(
//       'http://localhost:5000/security/login',
//       body
//     );
//     if (response.data.token) {
//       localStorage.setItem('token', response.data.token);
//       window.location.reload();
//     } else setError(response.data.error);
//   };

//   return (
//     <div className={visible ? 'login-window' : 'login-hidden'}>
//       <div
//         className="login-close"
//         role="button"
//         tabIndex={0}
//         onClick={() => setVisible(false)}
//       ></div>
//       <h2 className="login-title">Connexion</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         {error && <p className="text-danger">{error}</p>}
//         <div className="login-line">
//           <label htmlFor="email">Adresse Email</label>
//           <input
//             className="login-input"
//             type="email"
//             name="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="login-line-password">
//           <label htmlFor="password">Mot de passe</label>
//           <input
//             className="login-input"
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button className="login-button" type="submit">
//           Se connecter
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
