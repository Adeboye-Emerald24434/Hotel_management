import { useState } from "react";
import { Hotel, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { saveHotelifyUser } from "../auth";

const demoUser = {
  email: "superadmin@hotelify.com",
  password: "123456",
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (email.trim().toLowerCase() === demoUser.email && password === demoUser.password) {
      saveHotelifyUser({
        email: demoUser.email,
        name: "Super Admin",
        role: "super-admin",
      });
      navigate("/dashboard");
    } else {
      setError("Invalid Credentials. Please Try again");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#EEF4FA] p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        <div className="flex flex-col justify-between bg-[#EAF2FC] p-10">
          <div className="flex items-center gap-2">
            <Hotel size={28} className="text-blue-500" />
            <h1 className="text-2xl font-semibold text-gray-800">Hotelify</h1>
          </div>

          <div className="my-12">
            <h2 className="text-4xl font-bold leading-tight text-gray-800">
              Manage your hotel with confidence.
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Simplify reservations, manage rooms, and keep your hotel operations
              running smoothly.
            </p>
          </div>

          <p className="text-xs text-gray-400">Your hotel, under control.</p>
        </div>

        <div className="flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800">Welcome back!</h2>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to access your dashboard.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3">
                <Mail size={18} className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm outline-none"
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="flex item-center gap-3 rounded-lg border border-gray-200 px-4 py-3">
                <Lock size={18} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-sm outline-none"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>
        </div> 
      </div>
    </main>
  );
}

export default Login;
