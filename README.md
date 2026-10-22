**"LAB 1 Component Creation & Props - TypeScript React"**

Description

***This project contains reusable React components built with React and TypeScript. Each component has a specific purpose and can be customized through props.***

**Components:**

1. AlertBox
The AlertBox component displays messages with different types: success, error, warning, and info.

This project uses TypeScript interfaces to define the structure and types of the data and props required by each component.
The interfaces are defined in a separate types file and reused in the React components to ensure type safety, consistency, and code reusability.

For example, the AlertBoxProps, UserProfileCardProps, and ProductDisplayProps interfaces define the properties that each component can receive.

Example:

import type { AlertBoxProps } from '../../types';

export default function AlertBox(props: AlertBoxProps) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

2. UserProfileCard
The UserProfileCard component displays user information.
The user object must contain the properties required by the component's TypeScript interface. Check the project's type definitions for the exact fields.

3. ProductDisplay
The ProductDisplay component displays product information, including its price and optional description. It can also provide an action to add a product to the cart, if supported by its props.

example:
<p className="price-product">
  ${props.product.price.toFixed(2)}
</p>


**Notes:**

* useState was used to control the visibility of alert messages in the React application.
When the user clicks a button, the state changes and displays the appropriate alert component.
The alert can be closed by updating the state, allowing React to hide it automatically.

* I defined cartItems and setCartItems using const [cartItems, setCartItems] = useState<string[]>([]). The cartItems variable stores the product IDs in an array, setCartItems updates the state, and useState<string[]>([]) initializes an empty array of strings. When a user adds a product, I used setCartItems([...cartItems, productId]) with the spread operator (...) to preserve existing items and append the new product ID. React then automatically updates the interface when the state changes.

* A global variable was defined to control the product stock limit. When the number of items in the shopping cart exceeds the allowed limit, a React error alert appears, informing the user that no more products can be added to the cart.

* The ternary operator (? :) was used to display "In stock" or "Out of stock" depending on product availability. 

* Using Logical AND (&&) – Short-Circuiting: The logical AND operator (&&) was used to conditionally display alerts, for example on the shopping cart's stock limit. When the condition is true, the error alert is displayed; otherwise, it remains hidden.




