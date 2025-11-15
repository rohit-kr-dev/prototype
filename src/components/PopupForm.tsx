import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeline: "",
    budget: ""
  });

  useEffect(() => {
    // Check if user has already submitted
    const userSubmitted = localStorage.getItem("userSubmitted");
    
    if (!userSubmitted) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send data to Hookdeck endpoint
      await fetch("https://hkdk.events/27glpl3vaimnoz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          submissionDate: new Date().toISOString()
        })
      });

      // Store in localStorage
      localStorage.setItem("userName", formData.name);
      localStorage.setItem("userPhone", formData.phone);
      localStorage.setItem("userTimeline", formData.timeline);
      localStorage.setItem("userBudget", formData.budget);
      localStorage.setItem("userSubmitted", "true");
      localStorage.setItem("submissionDate", new Date().toISOString());

      setIsSubmitted(true);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4 animate-in fade-in duration-300">
      <div className="bg-card rounded-2xl p-8 w-full max-w-md shadow-2xl relative animate-in zoom-in duration-500">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-primary text-center mb-2">
              Find Your Dream Home
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Please provide your details so we can assist you better
            </p>

            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full px-4 py-3 mb-4 border-2 border-input rounded-lg text-base focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            />

            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full px-4 py-3 mb-4 border-2 border-input rounded-lg text-base focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            />

            <label htmlFor="timeline" className="block text-sm font-bold text-primary mb-2">
              How soon are you looking to buy?
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mb-4 border-2 border-input rounded-lg text-base focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-card"
            >
              <option value="">Select Timeline</option>
              <option value="immediately">Immediately (within 1 month)</option>
              <option value="shortly">Shortly (1-3 months)</option>
              <option value="fewmonths">Few Months (3-6 months)</option>
              <option value="planning">Just Planning (6+ months)</option>
            </select>

            <label htmlFor="budget" className="block text-sm font-bold text-primary mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mb-6 border-2 border-input rounded-lg text-base focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-card"
            >
              <option value="">Select Budget Range</option>
              <option value="under50">Under ₹50,000</option>
              <option value="50to100">₹50,000 - ₹100,000</option>
              <option value="100to200">₹100,000 - ₹200,000</option>
              <option value="200to500">₹200,000 - ₹500,000</option>
              <option value="500to1m">₹500,000 - ₹1,000,000</option>
              <option value="above1m">Above ₹1,000,000</option>
            </select>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-accent to-[#e67e22] text-accent-foreground font-bold text-lg rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Show Properties
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Thank You, {formData.name}!
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Soon our person will contact you.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Have a great day!
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
