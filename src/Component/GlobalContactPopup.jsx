"use client";
import React, { useEffect, useState } from "react";
import ContactFormModal from "./ContactSection";

export default function GlobalContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
const [loading , setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message:"",
  });

  // const GOOGLE_SHEET_URL =
  // "https://script.google.com/macros/s/AKfycbxG1QObuvp4PQUoVfysygo5Kn5Tho_AUlJWKxwrzAnMdWnkyziHdI-EqphokuY4gOsd/exec";


  // Flag for permanently hiding popup after submit
  const FORM_KEY = "contact_form_filled";
   const validateForm = () => {
    let temp = {};

    if (!formData.name.trim()) temp.name = "Name is required";

    if (!formData.phone.trim()) temp.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      temp.phone = "Phone must be 10 digits";

    if (!formData.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Invalid email format";

    if (!formData.message.trim()) temp.message = "Message is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Submit Handler → Save completed form
  const handleSubmit =async (e) => {
    e.preventDefault();
     if (!validateForm()) return;
    setLoading(true);

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEET_ID, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      alert("Thanks! Our team will contact you shortly.");
      localStorage.setItem(FORM_KEY, "true");
    } catch (err) {
      alert("Error occured. Please try again.");
      console.log(err);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }

    // TODO: send formData to backend
    console.log("Form Submitted:", formData);

    // Save so popup stops forever

  };

  // 🔁 Auto popup logic — show every 7 seconds UNTIL form is submitted
  const startAutoPopup = () => {
    const interval = setInterval(() => {
      const filled = localStorage.getItem(FORM_KEY) || localStorage.getItem("showAllForm");
      if (!filled) {
        setIsOpen(true);
      } else {
        clearInterval(interval); // stop permanently after submit
      }
    }, 7000); // ⏳ show every 7 seconds

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const filled = localStorage.getItem(FORM_KEY) || localStorage.getItem("showAllForm");

    if (!filled) {
      // first popup after page load
      const timeout = setTimeout(() => {
        setIsOpen(true);
      }, 7000);

      // continue showing repeatedly every 7 sec
      const stop = startAutoPopup();

      return () => {
        clearTimeout(timeout);
        stop();
      };
    }
  }, []);

  return (
    <>
      <ContactFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)} // Close ONLY hides temporarily
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        errors={errors}
        loading={loading}
      />
    </>
  );
}
