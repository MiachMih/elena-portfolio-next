import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useToasts } from "react-toast-notifications";

function ToastForm() {
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
    addToast("Ваше сообщение было отправлено!", {
      appearance: "success",
      autoDismiss: true,
    });
    e.currentTarget.reset();
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Полное имя" required />
      <input type="email" name="email" placeholder="Емейл" required />
      <textarea name="message" rows={7} placeholder="Сообщение" required />
      <button type="submit" className="btn btn-primary">
        Отправить Сообщение
      </button>
    </form>
  );
}

export default ToastForm;
