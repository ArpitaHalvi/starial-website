import { useState } from "react";

const initialData = {
  img: null,
  title: "",
};
export default function AddRoles({ openRoles, setRole }) {
  const [newRole, setNewRole] = useState(initialData);
  const handleChange = (e) => {
    const [name, value, files] = e.target;
    setNewRole((prev) => {
      return {
        ...prev,
        [name]: files ? files[0] : value,
      };
    });
  };
  const uploadToCloudinary = async () => {
    const formData = new FormData();
    formData.append("image", newRole.img);
    formData.append("upload_preset", "mxbngjny");
    formData.append("folder", "uploads/roles-images");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dgkv2gft7/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (res.ok) {
        const data = res.json();
        console.log("Data from cloudinary", data);
        console.log("CLoudinary url for image: ", data.secure_url);
        setNewRole({ title: newRole.title, img: data.secure_url });
      }
    } catch (e) {
      console.error("Unable to upload image to cloudinary.", e);
    }
  };
  const addRole = async (e) => {
    e.preventDefault();
    const uploaded = await uploadToCloudinary();
    if (uploaded) setRole([...openRoles, newRole]);
  };
  return (
    <section className="add-roles-section">
      <form className="add-roles-form" onSubmit={addRole}>
        <div>
          <label htmlFor="img">Add an image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            id="img"
          />
        </div>
        <div>
          <label htmlFor="title">Add a title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={newRole.title}
            onChange={handleChange}
            required
            aria-required
          />
        </div>
        <button type="submit" className="add-role-btn">
          Add
        </button>
      </form>
    </section>
  );
}
