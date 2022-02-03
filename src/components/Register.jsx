// import '../styles/register.css';
// import { useState } from 'react';
// import axios from 'axios';
// export const Register = ({ visible, setVisible }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Vérifiez votre mot de passe');
//       return null;
//     }
//     const body = { firstname, lastname, email, password };
//     const response = await axios.post(
//       'http://localhost:5000/security/signup',
//       body
//     );
//     if (response.data.error) setError(response.data.error);
//     else window.location.href = '/';
//   };

//   return (
//     <div className={visible ? 'register-window' : 'register-hidden'}>
//       <div
//         className="register-close"
//         role="button"
//         tabIndex={0}
//         onClick={() => setVisible(false)}
//       ></div>
//       <h2 className="register-title">Inscription</h2>
//       <form className="register-form" onSubmit={handleSubmit}>
//         <div className="register-line">
//           <label htmlFor="password">Prénom</label>
//           <input
//             className="register-input"
//             type="text"
//             name="password"
//             id="password"
//             value={firstname}
//             required
//             onChange={(e) => setFirstname(e.target.value)}
//           />
//         </div>
//         <div className="register-line">
//           <label htmlFor="password">Nom</label>
//           <input
//             className="register-input"
//             type="text"
//             name="password"
//             id="password"
//             value={lastname}
//             required
//             onChange={(e) => setLastname(e.target.value)}
//           />
//         </div>
//         <div className="register-line">
//           <label htmlFor="email">Email</label>
//           <input
//             className="register-input"
//             type="text"
//             name="email"
//             id="email"
//             value={email}
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="register-line-password">
//           <label htmlFor="password">Mot de passe</label>
//           <input
//             className="register-input"
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="register-line-password">
//           <label htmlFor="password">Mot de passe</label>
//           <input
//             className="register-input"
//             type="password"
//             name="password"
//             id="password"
//             value={confirmPassword}
//             required
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button className="register-button" type="submit">
//           Register
//         </button>
//         {error && <p className="register-error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Register;
