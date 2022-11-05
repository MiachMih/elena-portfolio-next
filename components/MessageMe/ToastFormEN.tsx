import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useToasts } from "react-toast-notifications";

function ToastFormEN() {
  const { addToast } = useToasts();
  const form = useRef<HTMLFormElement | null>(null);
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form && form.current) {
      emailjs.sendForm(
        "service_mx9l8cb",
        "template_xs1x5hf",
        form.current,
        "kdfJVk0qoNE6CfdHD"
      );
    }
    addToast("Your email has been sent!", {
      appearance: "success",
      autoDismiss: true,
    });
    e.currentTarget.reset();
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Full Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows={7} placeholder="Your Message" required />
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}

export default ToastFormEN;
