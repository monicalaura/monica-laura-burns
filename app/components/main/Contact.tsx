"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string }>({
    success: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setResult({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      setResult({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue to-lightBlue my-2">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities. If you have any questions
          or simply want to say hello, I'll do my best to get back to you
          quickly!
          <br />
          Or you can write me on{" "}
          <Link
            href="https://www.linkedin.com/in/monicalauraburns"
            target="_blank"
          >
            <span className="font-semibold text-lg text-blue max-w-md hover:text-lightBlue">
              Linkedin
            </span>
          </Link>
          .
        </p>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              value={subject}
              className="bg-darkBlue opacity-50 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hello"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              cols={10}
              rows={5}
              value={message}
              className="bg-darkBlue opacity-50 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue hover:bg-lightBlue text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {result.message && (
          <div className={result.success ? "text-lightBlue" : "text-red-500"}>
            {result.message}
          </div>
        )}
      </div>
    </section>
  );
}
