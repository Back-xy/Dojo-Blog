import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <center>
      <h1>404 PAGE NOT FOUND</h1>
      <br />
      <Link to='/'>Go back</Link>
    </center>
  );
}

export default NotFound;
