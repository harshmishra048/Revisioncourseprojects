import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ServicesData } from "../Data/ServicesData";
import { motion, AnimatePresence } from "framer-motion";

const ServiceDetail = () => {
  const { slug } = useParams();

  const [showPayment, setShowPayment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const service = ServicesData.find((item) => item.slug === slug);

  if (!service) {
    return <div className="p-10 text-center">Service not found</div>;
  }

  // 🔥 Fake Payment Handler
  const handlePayment = () => {
    setShowPayment(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        setShowPayment(false);
        setSuccess(false);
      }, 2000);
    }, 2500);
  };

  return (
    <div className="px-6 md:px-20 py-20 max-w-6xl mx-auto text-gray-800 dark:text-white">
      {/* 🔥 Hero Image */}
      <motion.img
        src={service.image}
        alt={service.title}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-150 object-contain rounded-2xl shadow-lg mb-10"
      />

      {/* 🔥 Title + Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="max-w-3xl mx-auto opacity-80 text-lg">
          {service.fullDescription}
        </p>
      </motion.div>

      {/* 🔥 Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">✨ Features</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {service.features.map((f, i) => (
            <li
              key={i}
              className="bg-gray-100 dark:bg-neutral-800 p-3 rounded-lg"
            >
              ✔ {f}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 🔥 Tools */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">🛠 Tools & Tech</h2>
        <div className="flex flex-wrap gap-3">
          {service.tools.map((t, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm shadow"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 🔥 Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-4">🚀 Process</h2>
        <ol className="space-y-4">
          {service.process.map((p, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                {i + 1}
              </span>
              <p className="opacity-80">{p}</p>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* 🔥 Pricing Section */}
      <motion.div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          💰 Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic */}
          <div className="p-6 rounded-2xl border shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-3xl font-bold mb-4">₹4,999</p>
            <ul className="text-sm opacity-80 mb-6 space-y-2">
              <li>✔ Basic features</li>
              <li>✔ 3 revisions</li>
              <li>✔ Email support</li>
            </ul>
            <button
              onClick={handlePayment}
              className="w-full py-2 rounded-lg bg-black text-white"
            >
              Choose Plan
            </button>
          </div>

          {/* Standard */}
          <div className="p-6 rounded-2xl border shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Standard</h3>
            <p className="text-3xl font-bold mb-4">₹9,999</p>
            <ul className="text-sm opacity-80 mb-6 space-y-2">
              <li>✔ All Basic features</li>
              <li>✔ Advanced design</li>
              <li>✔ Priority support</li>
            </ul>
            <button
              onClick={handlePayment}
              className="w-full py-2 rounded-lg bg-black text-white"
            >
              Most Popular
            </button>
          </div>

          {/* Premium */}
          <div className="p-6 rounded-2xl border shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-3xl font-bold mb-4">₹19,999</p>
            <ul className="text-sm opacity-80 mb-6 space-y-2">
              <li>✔ Everything included</li>
              <li>✔ Unlimited revisions</li>
              <li>✔ Dedicated support</li>
            </ul>
            <button
              onClick={handlePayment}
              className="w-full py-2 rounded-lg bg-black text-white"
            >
              Choose Plan
            </button>
          </div>
        </div>
      </motion.div>

      {/* 🔥 CTA */}
      <motion.div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Let’s build something amazing 🚀
        </h2>

        <Link to="/contact-us">
          <button className="px-8 py-3 bg-primary text-white rounded-full">
            Contact Now
          </button>
        </Link>
      </motion.div>

      {/* 🔥 PAYMENT POPUP */}
      <AnimatePresence>
        {showPayment && (
          <motion.div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <motion.div className="bg-white text-black p-8 rounded-2xl w-[90%] max-w-md text-center">
              {!success && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Razorpay Payment</h2>

                  {loading ? (
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <p>Processing Payment...</p>
                    </div>
                  ) : (
                    <button
                      onClick={handlePayment}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      Pay Now
                    </button>
                  )}
                </>
              )}

              {success && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white text-3xl rounded-full">
                    ✔
                  </div>
                  <h3 className="text-xl font-semibold">Payment Successful!</h3>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceDetail;
