Travel Genesis

Your travel begins with us

A modern, responsive travel booking application that allows users to discover destinations, book flights, manage trips, and explore travel packages.

📋 Table of Contents

Overview
Features
Technologies Used
Project Structure
Installation
Usage
Pages & Functionality
Navigation Flow
Contributing
License


🌍 Overview
Travel Genesis is a web-based travel application designed to provide users with a seamless experience for discovering popular destinations, booking flights, managing their trips, and exploring special travel packages. The app features an intuitive interface with smooth navigation and modern design aesthetics.

✨ Features
Core Features

🏠 Home Dashboard - Browse popular destinations and special packages
🔍 Search Functionality - Find flights and destinations easily
🎫 Ticket Management - View and manage booked tickets
🌐 Explore Destinations - Discover travel locations worldwide
👤 User Profile - Manage account settings and preferences
✈️ Trip Planning - Organize and track your travel itinerary
🔔 Notifications - Stay updated with booking confirmations and alerts
⚙️ Settings - Customize app preferences and notifications

User Experience

Responsive design for mobile, tablet, and desktop
Smooth page transitions and animations
Interactive destination cards with booking capabilities
Bottom navigation for easy mobile access
Modal-based confirmations for important actions
Real-time form validation


🛠 Technologies Used
Frontend

HTML5 - Semantic markup and structure
CSS3 - Styling with modern features (Flexbox, Grid, Animations)
JavaScript (ES6+) - Interactive functionality and DOM manipulation

Libraries & Tools

Font Awesome 6.5.0 - Icon library for UI elements
Google Fonts - Typography (if applicable)
SVG Graphics - Scalable vector graphics for logos and icons

Development Practices

Modular JavaScript architecture
CSS custom properties for theming
Event-driven programming
Responsive design patterns
Accessibility considerations

📁 Project Structure

travel-genesis/
│
├── Home-screen/
│   ├── home.html
│   ├── home.css
│   └── home.js
│
├── Profile/
│   ├── profile.html
│   ├── profile.css
│   └── profile.js
│
├── settings/
│   ├── settings.html
│   ├── settings.css
│   └── settings.js
│
├── notification/
│   ├── notification.html
│   ├── notification.css
│   └── notification.js
│
├── E-ticket/
│   ├── e_tickect.html
│   ├── e_ticket.css
│   └── e_ticket.js
│
├── Explore/
│   ├── explore.html
│   ├── explore.css
│   └── explore.js
│
├── Trip/
│   ├── trip.html
│   ├── trip.css
│   └── trip.js
│
├── Search screen/
│   ├── search.html
│   ├── search.css
│   └── search.js
│
├── flightdetails/
│   ├── flight.html
│   ├── flight.css
│   └── flight.js
│
├── City-images/
│   ├── London.png
│   ├── Sydney.png
│   ├── Tokyo.png
│   └── [other destination images]
│
├── icons/
│   └── [various SVG and PNG icons]
│
└── README.md 
Note other pages followos as well.......

🚀 Installation
Prerequisites

A modern web browser (Chrome, Firefox, Safari, Edge)
A local web server (optional but recommended)

Live Server (VS Code extension)
Python HTTP Server
XAMPP/WAMP



Steps

Clone the repository
git clone https://github.com/yourusername/travel-genesis.git
   cd travel-genesis
   Open with a local server
Option A: Using VS Code Live Server

Install Live Server extension
Right-click on index.html in Home-screen folder
Select "Open with Live Server"

Navigate the app

Start at the home page
Use bottom navigation to explore different sections

💻 Usage
For End Users

Browsing Destinations

Open the home page to view popular destinations
Scroll through destination cards
Click "Book Now" to view flight details


Searching

Click the search icon in the header
Enter destination or flight details
View search results


Booking Flights

Select a destination from home page
Click "Book Now" button
Fill in flight details
Confirm booking


Managing Profile

Navigate to Profile tab
View account information
Access settings, notifications, and tickets
Logout when finished


Viewing Trips

Click on "My Trip" in bottom navigation
View upcoming and past trips
Manage trip details

📱 Pages & Functionality
1. Home Screen (/Home-screen/home.html)

Features:

User greeting with location
Popular destinations carousel
Special packages section
Bottom navigation
Search and notification access



2. Profile (/Profile/profile.html)

Features:

User avatar and information
Navigation to:

Notifications
My Tickets
Explore
Settings


Logout functionality with modal confirmation
Delete account option



3. Settings (/settings/settings.html)

Features:

Language selection
Push notification toggle
Back navigation to profile



4. Notifications (/notification/notification.html)

Features:

View all notifications
Notification filtering
Mark as read functionality



5. My Tickets (/E-ticket/e_tickect.html)

Features:

View booked tickets
E-ticket details
QR code for boarding



6. Explore (/Explore/explore.html)

Features:

Browse destinations
Filter by region/category
Destination details



7. My Trip (/Trip/trip.html)

Features:

View upcoming trips
Trip itinerary
Trip management



8. Search (/Search screen/search.html)

Features:

Search destinations
Search flights
Filter results

Filter results



9. Flight Details (/flightdetails/flight.html)

Features:

Flight information
Booking form
Price details
Confirmation
🔄 Navigation Flow

┌─────────────┐
│    Home     │ ◄─── Starting Point
└──────┬──────┘
       │
       ├──► Search Screen
       │
       ├──► Popular Destinations ──► Flight Details ──► Booking
       │
       ├──► My Trip
       │
       ├──► Explore
       │
       └──► Profile ──┬──► Notifications
                      │
                      ├──► My Tickets
                      │
                      ├──► Explore
                      │
                      ├──► Settings ──► Back to Profile
                      │
                      ├──► Logout ──► Modal ──► Home
                      │
                      └──► Delete Account ──► Confirmation ──► Home


 🎨 Design Principles
Color Scheme

Primary Color: #007A8C (Teal)
Secondary Color: #E0B8FF (Light Purple)
Text Color: #1F1F1F (Dark Gray)
Background: #F8F8F8 (Light Gray)
Error Color: #ff4444 (Red)

Typography

Headings: Sans-serif, Bold
Body Text: Sans-serif, Regular
Font Sizes: Responsive (16px base)

Layout

Mobile-first approach
Flexbox and CSS Grid for layouts
Smooth transitions and animations
Consistent spacing and padding


Git Workflow
# Create a new branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add: new feature description"

# Push to remote
git push origin feature/new-feature

# Create pull request on GitHub

🧪 Testing
Manual Testing Checklist

 Home page loads correctly
 All navigation links work
 Search functionality works
 Booking flow completes
 Profile page displays user info
 Settings can be changed
 Logout modal appears and functions
 Delete account confirmation works
 Responsive on mobile, tablet, desktop
 No console errors

 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

MIT License

Copyright (c) 2025 Travel Genesis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

👥 Authors

Team bezao
