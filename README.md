# 💰 Personal Finance Visualizer – Stage 1

A simple full-stack web application to track personal finances. Built with **Next.js**, **React**, **MongoDB**, **Recharts**, and **shadcn/ui**, this app helps users manage their expenses by adding, editing, deleting, and visualizing transactions.

---

## 🚀 Features

✅ Add, edit, and delete transactions
✅ Monthly expenses bar chart (Recharts)
✅ Animated form reveal using Framer Motion
✅ Toast notifications using `react-toastify`
✅ Responsive design with Tailwind CSS
✅ Error handling and form validation

---

## 🛠 Tech Stack

* **Frontend**: Next.js App Router, React, Tailwind CSS, shadcn/ui
* **Backend**: API Routes in Next.js
* **Database**: MongoDB (via Mongoose)
* **UI & Charts**: Recharts, Framer Motion
* **Notifications**: react-toastify

---

## 📂 Folder Structure

```
/ (root)
├── app/
│   ├── layout.tsx      // Navigation + layout wrapper
├── pages/
│   ├── index.tsx       // Home + transaction manager
├── components/
│   ├── TransactionForm.tsx
│   ├── TransactionList.tsx
│   ├── ExpensesChart.tsx
├── lib/
│   ├── db.ts           // MongoDB connection
│   ├── models/Transaction.ts
├── api/
│   ├── /transactions   // CRUD routes
```

---

## 🧪 How to Run Locally

```bash
# 1. Clone the repo
https://github.com/your-username/finance-tracker

# 2. Install dependencies
npm install

# 3. Add your environment variables
Create a `.env.local` file:
MONGODB_URI=your-mongo-uri

# 4. Run the development server
npm run dev
```

---

## 🔗 Live Demo

[Live Project on Vercel](https://your-vercel-url.vercel.app)

---

## 📌 Notes

* **No login/signup**: as per assignment requirements
* Focused on **clarity**, **creativity**, and **UI responsiveness**
* Clean and modular code, structured for future scalability

---

## 📞 Contact

Lepaksha Swamy K M
📧 [lepakshaswamy60@gmail.com](mailto:lepakshaswamy60@gmail.com)
