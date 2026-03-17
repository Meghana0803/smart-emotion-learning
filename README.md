# smart-emotion-learning
Smart Emotion-Based Learning Web Platform  An intelligent web-based learning system that detects student emotions (happy, confused, bored, or focused) using AI/ML techniques and adapts learning content dynamically to improve engagement and learning outcomes.

# Smart Emotion-Based Learning Web Platform

🎯 **Project Objective:**  
This project is an intelligent web-based learning system that detects student emotions (confused, focused, bored, happy) using AI/ML techniques and adapts learning content dynamically to improve engagement and learning outcomes.

---

## 🚀 Features

### 1. User Authentication
- Registration and Login using **Node.js + MongoDB**
- Passwords stored securely
- New users must register before logging in

### 2. Landing & Welcome Page
- Professional welcome message: *"Welcome to Smart Emotion-Based Learning Web Platform"*
- Options to **Register** or **Login**

### 3. Dashboard
- Personalized welcome: *"Welcome, <username>"*
- Displays **user analytics** (total users, recent scores, last emotion)

### 4. Webcam-based Emotion Detection
- Accesses webcam via **React Webcam**
- Sends snapshot to **Flask API**
- Returns detected emotion in real-time

### 5. Adaptive Learning Engine
- Shows content based on emotion:
  - **Confused:** Simplified learning with examples  
  - **Bored:** Interactive quizzes  
  - **Focused:** Advanced content  
  - **Happy:** Continue learning path  
- Users can **continue to quizzes** or play small games  
- Tracks **scores and progress**

### 6. Quiz Interaction
- Multiple-choice questions
- Score tracking and alert on completion
- Optional backend storage of scores and emotion history

### 7. Analytics
- Shows **total users**, **last emotion**, and **latest scores**
- Optional chart visualization using `react-chartjs-2` for emotion distribution

### 8. Full-Stack Integration
- **Frontend:** React.js  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **ML API:** Flask + OpenCV + Python  
- **Communication:** REST APIs with Axios  
- **Cross-Origin:** Handled with CORS  

---

## 📁 Folder Structure
