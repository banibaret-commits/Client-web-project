 The Lady's Market
 is a frontend-only e-commerce web application built using React and Vite. 
  The project fulfills the Capstone requirements for the Client Web Applications course
  The application provides a complete simulated shopping experience, fetching product data from the DummyJSON API and utilizing localStorage for data persistence.
  Course: Client Web ApplicationsSemester: 2025Data 
  Source: DummyJSON API Deployment & RepositoryComponentLinkLive Vercel 
  Deployment https://web-project-dusky-omega.vercel.app 
  Repository https://github.com/banibaret-commits/Client-web-project.git Implemented Functional Requirements1.
   Product Listings & Detail PagesAPI Integration: Fetches and displays product data from the DummyJSON API.
   Product Card Data: Displays Image, Title, Price, Discount, Category, and Rating.
   Detail Page: Shows high-resolution image, full description, and integrated reviews.
   2. Cart Management & PersistenceCore Functionality: Users can Add/Remove products and adjust quantities.
   Totals: Dynamically calculates Subtotal and Total Item Count.Persistence: The entire cart state is saved to and loaded from localStorage, surviving page refreshes.
   3. Search, Filtering, & SortingSearch: Filters products dynamically by product name/title.Filters: Includes filtering by Category and Price Range.Sorting: Implemented sorting by [Specify the sorting option implemented, e.g., Price: Low to High].
   4. Reviews & Dynamic RatingsUsers can submit new reviews (rating + text + optional name).User-submitted reviews are persisted in localStorage.Dynamic Update: Average ratings are updated across the application upon submission.
   5. Full Checkout & Tax Simulation (Mandatory)Shipping Form: Collects necessary address information.Tax Calculation: Correctly calculates 5% GST (Canada) and an additional 9.975% QST if Quebec is selected as the shipping province/state.Payment: Simulates payment method selection (Credit Card, PayPal, etc.).Order Confirmation: Displays the full order summary, final total, taxes paid, and shipping details.
   6. Architecture & RoutingResponsive UI: Fully responsive design for mobile and desktop screens.Routes: Utilizes React Router for dedicated views: /, /products/:id, /cart, /checkout, and /confirmation. Local Development SetupPrerequisitesNode.js (LTS recommended)npm or yarnInstallation and Run StepsClone the repository:Bashgit clone https://github.com/banibaret-commits/Client-web-project.git
cd Client-web-project
Install dependencies:Bashnpm install
# or
yarn install
Start the development server:Bashnpm run dev
# or
yarn dev
Open your browser to the local development URL (typically http://localhost:5173/).
 Team Members
 [Elisha ] -  [components , main.jsx, context]
 [Nelly ]  - [pages, service , style]
 [both] - [app.jsx]