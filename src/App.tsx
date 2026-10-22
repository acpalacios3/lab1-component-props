import { useState } from 'react';
import AlertBox from './components/AlertBox/AlertBox';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import "./App.css"

const user1 = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109.jpg'

};

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://as1.ftcdn.net/jpg/00/44/36/76/1000_F_44367633_ef7Li8XTt3HDSJ3d2WEooPf3UAhvpKXK.jpg',

  inStock: true
};

export default function App() {

  //================================
  // STATE ALERTS 
  //=================================
  // Success  Alert when add item to cart
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  // Info Alert when Edit user profile and show email and role
  const [showInfoAlert, setShowInfoAlert] = useState(false);
  const [editedUserId, setEditedUserId] = useState("");
  const [showInfoUser, setShowInfoUser] = useState(false);


  // Error Alert 
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const stock = 10;

  //=========================================
  //handle alerts under certain conditions
  // =======================================

  // handleAddToCart function: adds a product to the cart and shows a confirmation alert.
  const handleAddToCart = (productId: string) => {
    // Check the stock limit before adding the product to the cart
    if (!product.inStock || cartItems.length >= stock) {
      setShowAlert(false);
      setShowErrorAlert(true);
      return;
    }

    // add product to the cart
    setCartItems([...cartItems, productId]);

    // show sucess alert
    setShowAlert(true);
    setShowErrorAlert(false);

    console.log("cartItems ===>:", cartItems);
    console.log("add product ===>:", productId);
  };

  //  ******************************************
  // Edit user profile and display Info Alert
  // ********************************************
  const handleEdit = (userId: string) => {
    // console.log("User Id:", userId);

    setEditedUserId(userId);
    // Displays the parent's Info alert when the function is called in onEdit
    setShowInfoAlert(true);
    //change the value that the parent passes to the child through showEmail and showRole.
    setShowInfoUser(true);
  };

  return (

    <div className="container">

      {/* ================= */}
      {/* user section */}
      {/* ================= */}

      <section>

        <h2> User Profile </h2>

        <UserProfileCard
          user={user1}
          showEmail={showInfoUser}
          showRole={showInfoUser}
          onEdit={handleEdit}
        />

        {/* Information user profile and Info Alert */}

        {showInfoAlert && (
          <div className='alert-container'>
            <AlertBox
              type="info"
              message={`Welcome to your profile, editing user ! ${editedUserId}`}
              onClose={() => setShowInfoAlert(false)}
            />
          </div>
        )}

        {/* Last login information and warning Alert*/}
        <div>
          <AlertBox type="warning" message="Last login: 2 hours ago!" />
        </div>
      </section>


      {/* ================= */}
      {/* product section */}
      {/* ================= */}

      <section>
        <h2> Product </h2>
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <div className="product-stock">
            {/* use the ternary operator (? :) */}
            {showErrorAlert
              ? "Out of stock"
              : "In stock"
            }
          </div>

          <p className="cart-info">
            add cart: {cartItems.length}
          </p>

        </ProductDisplay>

        {/* Successfully alert when product add*/}
        {showAlert && (
          <div>
            <AlertBox
              type="success"
              message="Product added to cart!"
              onClose={() => setShowAlert(false)}
            />
          </div>
        )}

        {/* Error Alert when limit stock cart*/}
        {showErrorAlert && (
          <div>
            <AlertBox
              type="error"
              message={`Error: You cannot add more than ${stock} items to the cart`}
              onClose={() => setShowErrorAlert(false)}
            />
          </div>
        )}
      </section>
    </div>

  );
}
