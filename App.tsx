import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    KARMAX
                  </h3>
                  <p className="text-gray-400">
                    Your trusted online shopping destination for home, kitchen, tech, and toys.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Shop</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Home Decor</li>
                    <li>Kitchen</li>
                    <li>Tech</li>
                    <li>Toys</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Customer Service</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Contact Us</li>
                    <li>Shipping Info</li>
                    <li>Returns</li>
                    <li>FAQ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">About</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 Karmax. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
