💅 Blush Beauty Booking System
📌 Project Overview
Blush Beauty Booking System is a modern and elegant appointment scheduling platform designed for beauty salons. This web application allows customers to seamlessly book their preferred beauty treatments—such as manicures, pedicures, and combo packages—by selecting a date and time that suits them.

Admins can manage available booking dates, monitor customer bookings in real time, and control appointment slots from a clean dashboard interface.

🚀 Features
Customer Booking Flow:

Choose from a range of curated beauty packages.

Select a date and preferred time slot between salon hours (9:00 AM – 5:00 PM).

Submit personal information for confirmation.

Receive booking feedback and success notifications.

Admin Panel:

Add or remove available booking dates.

Monitor customer bookings with full details.

Delete unbooked slots directly from the dashboard.

Automatic syncing and status updates.

Responsive UI:

Built with a focus on clean design and mobile-first responsiveness.

Friendly interface powered by Tailwind CSS and ShadCN UI components.

🛠️ Tech Stack
Framework: React (with Vite)

Language: TypeScript

Styling: Tailwind CSS, ShadCN UI

Data Management: Google Sheets as a backend (via Google Apps Script)

🧪 Getting Started Locally
To run this project on your local machine:

bash
Copy
Edit
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd blush-beauty-booking

# Install dependencies
npm install

# Start the development server
npm run dev
🌐 Deployment
This project can be deployed to any modern static hosting platform (e.g., Vercel, Netlify). Make sure your connected Google Apps Script endpoint is accessible for the booking functionality.

📅 Admin Notes
Admins only need to set available dates—time slots are automatically handled in the frontend.

Slots marked as booked cannot be deleted to preserve data integrity.

Booking submissions automatically mark the selected date as booked.

✨ Credits
Developed with care to simplify and enhance the appointment booking experience for beauty salons and their clients.