import { useState } from "react";

const ContactModal = ({ isOpen, onClose, tyreModel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    quantity: 50,
    message: "",
    model: tyreModel || "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (e) => {
    let value = parseInt(e.target.value, 10) || 50;
    value = Math.max(50, value);
    setFormData((prev) => ({ ...prev, quantity: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://wheel-tyers-backend-main.vercel.app/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          address: "",
          quantity: 50,
          message: "",
          model: tyreModel || "",
        });
        setTimeout(() => {
          onClose();
          setStatus("");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50">
      <div className="bg-[#1A1A1A] rounded-lg p-4 max-w-md w-full">
        {" "}
        {/* Reduced padding */}
        <div className="flex justify-between items-center mb-3">
          {" "}
          {/* Reduced margin */}
          <h2 className="text-lg font-bold text-white">Contact Us</h2>{" "}
          {/* Smaller text */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl font-bold" /* Smaller close button */
          >
            &times;
          </button>
        </div>
        {status === "success" ? (
          <div className="p-2 bg-green-900 text-green-400 rounded mb-3 text-sm">
            {" "}
            {/* Compact success */}
            Message sent successfully!
          </div>
        ) : status === "error" ? (
          <div className="p-2 bg-red-900 text-red-400 rounded mb-3 text-sm">
            {" "}
            {/* Compact error */}
            Failed to send message. Please try again.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {" "}
            {/* Reduced spacing */}
            <input
              type="text"
              name="model"
              value={formData.model}
              readOnly
              className="w-full p-2 text-sm bg-[#333] text-white rounded border border-gray-600 focus:border-orange-500 focus:outline-none cursor-not-allowed opacity-70"
            />
            <div className="grid grid-cols-2 gap-3">
              {" "}
              {/* Name and Email in one row */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full p-2 text-sm bg-[#333] text-white rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-2 text-sm bg-[#333] text-white rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {" "}
              {/* Phone and Company in one row */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full p-2 text-sm bg-[#333] text-white rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (optional)"
                className="w-full p-2 text-sm bg-[#333] text-white rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full p-2 text-sm bg-[#333] text-white rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
            />
            <div className="flex items-center justify-between">
              <label htmlFor="quantity" className="text-sm text-gray-300">
                Quantity (min 50):
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min="50"
                value={formData.quantity}
                onChange={handleQuantityChange}
                className="w-20 p-2 text-sm bg-[#333] text-white rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="3" /* Reduced rows */
              className="w-full p-2 text-sm bg-[#333] text-white rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
            ></textarea>
            <div className="flex justify-end space-x-2 pt-2">
              {" "}
              {/* Tighter button spacing */}
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-sm text-gray-300 bg-[#333] rounded-md hover:bg-[#444]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-3 py-1.5 text-sm text-white bg-orange-600 rounded-md hover:bg-orange-700 disabled:bg-gray-600"
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
