import { useState } from "react";

function ProfileForm() {
  const [form, setForm] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="age" value={form.age} onChange={handleChange} />
      <p>{form.name}（{form.age}才）</p>
    </div>
  );
}

export default ProfileForm;
