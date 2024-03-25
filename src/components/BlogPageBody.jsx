import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPageBody() {
  const [articles, setarticles] = useState({ test: 'Hellooo' });
  return (
    <div className="container w-[70%] text-[#65676b] ">
      {articles.test}
      <p className="mb-4">
        In today's digital world, using Information and Communication Technology
        (ICT) is crucial for small businesses to thrive. ICT includes computers,
        software, internet services, and other technology tools. Here are some
        essential ICT tools that can help improve your small business:
      </p>
      <h2 className="mb-2 text-xl font-semibold">Computers and Laptops</h2>
      <p className="mb-4">
        Invest in reliable computers or laptops for your business operations.
        These devices allow you to create documents, manage finances, and
        communicate with customers and suppliers efficiently.
      </p>
      <h2 className="mb-2 text-xl font-semibold">Internet Connection</h2>
      <p className="mb-4">
        A stable internet connection is essential for accessing online
        resources, communicating via email, conducting research, and marketing
        your products or services through social media and websites.
      </p>
      <h2 className="mb-2 text-xl font-semibold">Business Software</h2>
      <p className="mb-4">
        Utilize business software such as accounting tools, customer
        relationship management (CRM) systems, and project management software
        to streamline operations, manage data, and improve productivity.
      </p>

      <h2 className="mb-2 text-xl font-semibold">
        Website and Online Presence
      </h2>
      <p className="mb-4">
        Create a professional website to showcase your products or services,
        provide important business information, and attract potential customers.
        Having an online presence also helps with marketing and reaching a wider
        audience.
      </p>

      <h2 className="mb-2 text-xl font-semibold">Cybersecurity Measures</h2>
      <p className="mb-4">
        Protect your business data and sensitive information by implementing
        cybersecurity measures such as antivirus software, firewalls, regular
        data backups, and staff training on cybersecurity best practices.
      </p>

      <p>
        By leveraging these essential ICT tools, small business owners can
        enhance efficiency, reach more customers, and stay competitive in
        today's digital marketplace.
      </p>
    </div>
  );
}
