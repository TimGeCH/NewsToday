### Progress Report (Week 7)

#### Tasks Completed This Week

**Redux Integration, JWT Authentication, Google OAuth, and Dark Mode**

1. **Implement Redux for State Management**
   - Integrated Redux to manage the state of the sign-in process. This includes handling actions like `SignInStart`, `SignInSuccess`, and `SignInFailure`, which control the login flow's loading, success, and error states. This setup ensures that the sign-in page reacts appropriately to user actions and backend responses.

2. **Sign-In API with JWT Authentication**
   - Developed the sign-in API, which verifies user credentials and, upon successful authentication, generates a JWT. This JWT contains the user's unique database ID and is signed with a secret key (`JWT_SECRET`). The token is sent back to the client and used for maintaining authenticated sessions, allowing secure access to protected routes within the application. 

3. **Google OAuth Login**
   - Implemented Google OAuth as an additional login method, allowing users to authenticate using their Google accounts seamlessly.

4. **Dark and Light Modes**
   - Developed dark mode and light mode themes, providing users with a choice of visual styles for a more comfortable browsing experience.

5. **User Dashboard**
   - Built a comprehensive user dashboard that allows users to update their avatar, password, and email, as well as delete their account if needed.

#### Tasks Planned for Next Week

1. **Create Admin Dashboard**
   - Begin development of an admin dashboard, where administrators can manage various aspects of the website and its content.

2. **Develop Basic Home Page**
   - Build a foundational home page that allows news articles to be posted, establishing a central location for updates and content publication.