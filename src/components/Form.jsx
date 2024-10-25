import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailError = '',
      passwordError = '';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) emailError = 'Invalid email';
    if (password.length < 6) passwordError = 'Password too short';

    if (!emailError && !passwordError) alert('Form Submitted');

    setErrors({ email: emailError, password: passwordError });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {errors.password && <p>{errors.password}</p>}
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
