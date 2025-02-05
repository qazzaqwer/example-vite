import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    if (password.length < 6) {
      setError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }

    console.log("Logging in with", { email, password });
    // TODO: เชื่อมต่อ API สำหรับ login ที่นี่
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">เข้าสู่ระบบ</h2>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">อีเมล</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              เข้าสู่ระบบ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}