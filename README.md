# UAlberta CourseLens

UAlberta CourseLens is a centralized platform designed to streamline the process of finding and evaluating courses at the University of Alberta. It aggregates course and professor information from multiple sources, giving students one easy-to-use interface to make informed academic decisions.

## Table of Contents
- [Inspiration](#inspiration)
- [Problem Statement](#problem-statement)
- [Key Issues](#key-issues)
- [Our Solution](#our-solution)
- [Features](#features)
- [How We Built It](#how-we-built-it)
- [Challenges](#challenges)
- [Accomplishments](#accomplishments)
- [What We Learned](#what-we-learned)
- [What's Next](#whats-next)
- [Built With](#built-with)

## Inspiration

UofA students were wasting valuable time searching across multiple platforms for course and professor information. We saw an opportunity to consolidate this fragmented data into a single, accessible resource.

## Problem Statement

Students face significant challenges when trying to gather all the necessary course and professor details due to:
- **Fragmented Information:** Details are scattered across platforms like Reddit, BearTracks, and RateMyProf.
- **Disorganized Discussions:** Reddit discussions on courses are hard to navigate.
- **Lack of Quality Assessments:** BearTracks does not offer detailed quality evaluations.
- **Limited Accessibility Data:** There is very little information on course-specific accessibility accommodations available online.

## Key Issues

- **Inefficiency:** Students miss out on opportunities to engage with high-quality instructors.
- **Inadequate Assessment:** It is difficult for students to gauge overall course difficulty.
- **Accessibility Barriers:** Students requiring accessibility accommodations struggle to find courses that meet their needs.

## Our Solution

**UAlberta CourseLens** addresses these issues by offering a unified platform that:
- Aggregates course information from multiple sources.
- Provides detailed professor reviews and ratings.
- Highlights course-specific accessibility features.
- Offers insights into course difficulty levels based on student feedback.

## UI Mockup
![WhatsApp Image 2025-05-14 at 7 01 53 AM](https://github.com/user-attachments/assets/4a883f9f-6cd4-402a-ae6d-2441b2e51f50)
![WhatsApp Image 2025-05-14 at 6 59 54 AM](https://github.com/user-attachments/assets/ae779d9e-1f17-4513-aa63-903b7bfdda48)
![WhatsApp Image 2025-05-14 at 6 58 53 AM](https://github.com/user-attachments/assets/1a610e34-499e-4bf9-bf94-38754d9684f9)
![WhatsApp Image 2025-05-14 at 6 59 19 AM](https://github.com/user-attachments/assets/cb112271-7c4d-4afc-aa5d-e1facdb275f6)

## Features

- **Unified Course Information:** Combines details from RateMyProf, Reddit, BearTracks, and other sources.
- **Professor Reviews & Ratings:** Organizes student feedback to help evaluate teaching quality.
- **Accessibility Accommodations:** Displays course-specific accessibility features such as lecture recordings, flexible deadlines, and physical accessibility options.
- **Course Difficulty Insights:** Uses aggregated student feedback to inform users about overall course difficulty.

## How We Built It

- **Data Collection:** Aggregated course and professor data from multiple sources using a mix of scraping tools and API integrations.
- **Data Processing Pipeline:** Cleaned, normalized, and structured data to ensure accuracy.
- **Logical Calculations:** Developed custom algorithms to analyze data, including course difficulty ratings and accessibility features.
- **Web Development:** Built a fast, responsive frontend using Next.js.
- **Client-Server Architecture:** Implemented a scalable backend to process user requests in real-time.
- **AWS Lambda Functions:** Deployed microservices for tasks like data aggregation and authentication.
- **User Authentication:** Implemented a secure signup/login system to provide personalized experiences.
- **Online Database:** Stored user preferences and saved courses securely for a seamless cross-device experience.
- **Deployment:** The platform is fully deployed and ready to scale with its growing user base.

## Challenges

- **Data Aggregation:** Combining data from sources with inconsistent structures.
- **Scraping Limitations:** Navigating Reddit’s API rate limits and unstructured data.
- **Accessibility Information:** Collecting accurate and up-to-date course-specific accessibility details required extensive manual effort and collaboration with UofA services.
- **Time Constraints:** Balancing feature development with the limited timeframe of the hackathon.

## Accomplishments

- **AWS Integration:** Successfully integrated AWS Lambda functions for a scalable and efficient backend.
- **Operational Online Database:** Securely stores user data and enables personalized recommendations.
- **Personalized User Experience:** Tailors course recommendations based on individual preferences.
- **User-Centric Design:** Designed every feature with students in mind to ensure an intuitive and seamless experience.
- **Overcoming Technical Challenges:** Effectively addressed complex challenges from data aggregation to deployment.

## What We Learned

- **Data Aggregation & Processing:** Techniques for collecting, cleaning, and structuring diverse data sources.
- **Scalable Architectures:** Building and deploying microservices using AWS Lambda.
- **User Authentication:** Implementing secure systems to protect user data.
- **Personalization Algorithms:** Crafting algorithms that deliver tailored course recommendations.
- **Full-Stack Development:** Gaining experience with Next.js, backend logic, and database management.
- **Team Collaboration:** Working effectively as a team under tight deadlines.
- **User-Centric Design:** Focusing on accessibility and usability to create a better student experience.
- **Deployment & DevOps:** Successfully launching and maintaining a live web app.

## What's Next

- **Expand Data Sources:** Integrate additional platforms like RateMyProfessors and UofA forums for richer insights.
- **AI-Powered Recommendations:** Implement machine learning to deliver personalized course suggestions.
- **Mobile App Development:** Create a mobile version for on-the-go access.
- **Enhanced Accessibility:** Collaborate with UofA to include even more detailed accessibility information.
- **User Accounts:** Allow students to save courses and track academic progress.
- **Community Features:** Add discussion forums and peer reviews to foster student interaction.
- **Partnerships:** Work with UofA to integrate CourseLens into official student resources.
- **Gamification:** Introduce badges and challenges to enhance student engagement.
- **Scaling to Other Universities:** Adapt the platform for use at other institutions.

## Built With

- **Amazon Web Services (AWS)**
- **Azure**
- **Beautiful Soup**
- **Next.js**
- **PostgreSQL**
- **Python**
- **Requests**
- **Tailwind CSS**


