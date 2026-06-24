import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleRegister = async () => {
    // Validation
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      toast.error("Name should contain only letters");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      toast.error("Phone number must contain 10 digits");
      return;
    }

    if (!location.trim()) {
      toast.error("Location is required");
      return;
    }

    try {
      console.log(import.meta.env.VITE_API_URL);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
          phone,
          location,
        }
      );

      toast.success("Registered Successfully 🎉");
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded-lg mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg mb-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full border p-3 rounded-lg mb-4"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-orange-500 text-white py-3 rounded-lg"
        >
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;