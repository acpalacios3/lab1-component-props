## Reflection Questions:

1. How did you handle optional props in your components?
I handled optional props by using the ? symbol in my TypeScript interfaces. For example, I made showEmail, showRole, showDescription, showStockStatus, and callback functions such as onEdit and onAddToCart optional. I also used the optional children prop to allow custom content inside my components. This approach made my components more flexible and reusable, allowing them to work with or without certain props.

2. What considerations did you make when designing the component interfaces?
I used TypeScript interfaces to define the props and data types required by each component. I focused on making my components clear, easy to maintain, and reusable.

3. How did you ensure type safety across your components?
I defined the interfaces in a separate types file and imported them into my components. This helped ensure that each component received the expected props and data types.

4. What challenges did you face when implementing component composition?
One challenge was connecting components through props and callback functions. For example, I used onAddToCart to connect the ProductDisplay component to the cart logic. I also used AlertBox to display success or error messages.

