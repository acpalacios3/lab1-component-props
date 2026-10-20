import AlertBox from './components/AlertBox/AlertBox';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import "./App.css"

const user1 = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  //  avatarUrl: 'https://example.com/avatar.jpg'
  avatarUrl: 'https://i.pravatar.cc/300'

};

export default function App() {

  return (

    <div>
      <h1> Alerts:</h1>
      <AlertBox type="success"
        message="Your profile has been update sucessfully!"
        onClose={() => alert("Alert closed")} >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>

      <AlertBox type="warning" message="Warning alert!" />
      <AlertBox type="error" message="Error alert!" />
      <AlertBox type="info" message="Info alert!" />

      <h2> User Profile </h2>
      <UserProfileCard user={user1}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}

      >
        <div className="text-sm text-gray-500">
          Last login: 2 hours ago
        </div>
        <p>Welcome to your profile!</p>
      </UserProfileCard>

    </div>

  );
}
