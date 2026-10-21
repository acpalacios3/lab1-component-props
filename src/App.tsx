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

export default function App() {

  const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://as1.ftcdn.net/jpg/00/44/36/76/1000_F_44367633_ef7Li8XTt3HDSJ3d2WEooPf3UAhvpKXK.jpg',
   
    inStock: true
  };
//  This state controls whether the alert appears or not.
// success  Alert when add item to cart
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

// Info Alert when Edit user profile
  const [showInfoAlert, setShowInfoAlert] = useState(false);
  const [editedUserId, setEditedUserId] = useState("");


// Error Alert 
const [showErrorAlert, setShowErrorAlert] = useState(false);
const stock = 10;

 
// handleAddToCart function: adds a product to the cart and shows a confirmation alert.
  const handleAddToCart = (productId: string) => {
      // Check the cart limit before adding the product
        if (!product.inStock || cartItems.length >= stock) {
          setShowAlert(false);
          setShowErrorAlert(true);
          return;
        }

      // add item to the cart
      setCartItems([...cartItems, productId]);
      // show sucess alert
      setShowAlert(true);
      setShowErrorAlert(false);

    console.log("cartItems ===>:", cartItems);
    console.log("add product ===>:", productId);
  };

  // When handleEdit is run, the user's ID will be shown in the console and the alert will be triggered.
  const handleEdit = (userId: string) => {
  console.log("Editing user profile:", userId);
  setShowInfoAlert(true);
};

 
   return (

    <div>
      {/* <h1> Alerts:</h1> */}
      {/* <AlertBox type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")} >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox> */}

      <div className="p-4">
      
    
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      {showInfoAlert && (
        <AlertBox
          type="info"
          message={`Welcome to your profile! ${editedUserId}`}
          onClose={() => setShowInfoAlert(false)}
        />
      )}

      <AlertBox type="warning" message="Last login: 2 hours ago!" />
      {/* <AlertBox type="error" message="Error alert!" /> */}
      {/* <AlertBox type="info" message="Info alert!" /> */}

      {showErrorAlert && (
  <AlertBox
    type="error"
    message={`Error: You cannot add more than ${stock} items to the cart`}
    onClose={() => setShowErrorAlert(false)}
  />
)}

      <h2> User Profile </h2>
      <UserProfileCard user={user1}
        showEmail={true}
        showRole={true}
        // onEdit={(userId) => alert(`Editing user ${userId}`)}
        onEdit={(userId) => {
        setEditedUserId(userId);
        setShowInfoAlert(true);
      }}

      >
        {/* <div className="text-sm text-gray-500">
          Last login: 2 hours ago
        </div> */}
        {/* <p>Welcome to your profile!</p> */}
      </UserProfileCard>


      <ProductDisplay
      
        product={product}
        showDescription={true}
        showStockStatus={true}
        // onAddToCart={(productId) =>
        //   alert(`Added product ${productId} to cart`)
        // }
        onAddToCart={handleAddToCart} 
      >
        <div className="text-sm text-gray-500">
            {showErrorAlert
              ? "Free shipping not available"
              : "Free shipping available"
            }
        </div>
        <p>Items add cart: {cartItems.length}</p>  
       
      </ProductDisplay>
 </div>
    </div>

  );
}
