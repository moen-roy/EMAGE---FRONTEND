# EMAGE – Emotional Awareness and Guided Expression (MVP)

Project Title: EMAGE – Emotional Awareness and Guided Expression
Team: Paul Karime, Roy Mwenda, Angel Lucy, Bettson Kiptoo

Frontend: React + Tailwind CSS
Backend: Flask-RESTful API
Database: PostgreSQL
Deployment: Vercel (Frontend), Render (Backend)

## 1. Overview

In today’s fast-paced world, many individuals struggle with self-awareness and mental well-being. EMAGE (Emotional Awareness and Guided Expression) is designed to help users pause, reflect, and understand their emotional patterns through daily mood tracking, guided reflections, and private journaling.

The system aims to provide a simple, private, and accessible digital space for emotional check-ins, while laying a solid foundation for future expansion into therapy connections and behavioral analysis.

## 2. Problem Statement

Millions of people silently deal with depression, anxiety, stress, and addictive behaviors without access to immediate support or reflection tools. Existing mental health solutions are often complex, expensive, or lack personalization.

EMAGE seeks to solve this by creating an easy-to-use web platform where users can log their moods, write personal reflections, chat with buddies in the community, and optionally connect with mental health professionals.

## 3. MVP Objectives

- Help users build a daily self-awareness habit through mood tracking and guided reflections.
- Create a community portal to help users meet people facing similar issues.
- Store and visualize users' mood patterns to help identify emotional trends.
- Offer a basic channel for connecting users with certified therapists.
- Implement a scalable, modular full-stack architecture following modern best practices.

## 4. Core Features

See full spec in the project planning document. Main features include authentication, mood logging, guided reflections, private journaling, community features, therapist directory, and a personalized dashboard.

## 5. System Architecture

Frontend: React + Tailwind CSS, React Router v6, React Hook Form, Axios.

Backend: Flask-RESTful, SQLAlchemy, Marshmallow, flask-jwt-extended, Cloudinary, SendGrid, Swagger/OpenAPI.

Database: PostgreSQL.

## 6. Database Design

Main entities: Users, Moods, Reflections, Notes, Therapists, ChatSessions. Relationships follow standard one-to-many patterns.

## 7. API Documentation

Document endpoints using Swagger. Example endpoints:

- POST /auth/register
- POST /auth/login
- GET /moods?page=1
- POST /moods
- GET /reflections
- POST /notes
- GET /therapists

## 8. Deployment Plan

Frontend: Vercel or Netlify. Backend: Render or Railway. Database: Render managed Postgres or Supabase.

## 9. Timeline & Deliverables

See full spec in the project planning document for weekly milestones.

## 10. Contributing

Follow the Gitflow workflow. Create feature branches from `develop`, open PRs to `develop`, and merge to `main` when ready.

---

For a full spec and more detailed requirements, see the project planning notes and JIRA board in the team workspace.
