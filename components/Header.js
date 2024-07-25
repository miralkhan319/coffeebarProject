import Link from 'next/link';
import Swal from 'sweetalert2';

const Header = () => {
  const handleLoginClick = (e) => {
    e.preventDefault(); 

    Swal.fire({
      title: 'Login',
      html: `
        <input type="text" id="username" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">
      `,
      confirmButtonText: 'Login',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const username = Swal.getPopup().querySelector('#username').value;
        const password = Swal.getPopup().querySelector('#password').value;
        if (!username || !password) {
          Swal.showValidationMessage('Please enter both username and password');
        }
        return { username, password };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the login action (e.g., send login request)
        console.log('Username:', result.value.username);
        console.log('Password:', result.value.password);
        Swal.fire('Logged in!', '', 'success');
      }
    });
  };

  return (
    <header className="relative bg-cover bg-center p-5" style={{ backgroundImage: "url('/bg1.jpg')" }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-2xl font-bold text-white">
            Coffee Shop
          </Link>
        </div>
        <nav className="nav">
          <ul className="flex space-x-5">
            <li><Link href="/" className="text-white hover:underline hover:font-bold hover:text-2xl hover:text-orange-500">Home</Link></li>
            <li><Link href="#coffee" className="text-white hover:underline hover:font-bold hover:text-2xl hover:text-orange-500">Coffee</Link></li>
            <li><Link href="#bakery" className="text-white hover:underline hover:font-bold hover:text-2xl hover:text-orange-500">Bakery</Link></li>
            <li><Link href="#shop" className="text-white hover:underline hover:font-bold hover:text-2xl hover:text-orange-500">Shop</Link></li>
            <li><Link href="#reviews" className="text-white hover:underline hover:font-bold hover:text-2xl hover:text-orange-500">About</Link></li>
            <li>
              <a href="#" onClick={handleLoginClick} className="text-white hover:underline hover:font-bold hover:text-2xl hover:text-orange-500">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-center py-20 bg-cover bg-center">
        <h1 className="text-white text-4xl font-bold">Welcome!</h1>
        <p className="text-white text-xl mt-4">We serve the richest coffee in the city!</p>
        <Link href="#coffee" className="mt-6 inline-block bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg">
          Order Now
        </Link>
      </div>
    </header>
  );
}

export default Header;
