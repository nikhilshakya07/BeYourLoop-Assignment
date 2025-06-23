import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await API.get("/user/getMe");
      setUser(res.data);
    } catch (err) {
      console.error("Unauthorized or failed to fetch user");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <p className="text-center mt-10">Loading user info...</p>;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Welcome, {user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined:</strong> {new Date(user.createdAt).toDateString()}</p>
      </div>
    </section>
  );
};

export default Dashboard;
