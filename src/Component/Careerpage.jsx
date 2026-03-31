import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const jobCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};
const textVariant = {
  hidden: { y: 80, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};
const title = "Career at Roots & Roofs".split("");

const Careerpage = () => {
  const jobs = [
    {
      title: "Real Estate Consultant",
      type: "Full-time / Part-time",
      location: "[City Name]",
      exp: "0–3 years",
      duties:
        "Assist clients in discovering suitable properties, facilitate site viewing, and oversee negotiations.",
    },
    {
      title: "Digital Marketing Executive",
      type: "Hybrid",
      location: "Hybrid",
      exp: "1–4 years",
      duties:
        "Execute social media campaigns, oversee listings, and create engaging online brand presence.",
    },
    {
      title: "Sales Associate – Property Sales",
      type: "On-Site",
      location: "On-Site",
      exp: "1+ years",
      duties:
        "Oversee end-to-end client interactions, from lead conversion to property closure.",
    },
    {
      title: "Telecalling Executive (Lead Generation)",
      type: "Remote / On-Site",
      location: "Remote / On-Site",
      exp: "0–2 years",
      duties:
        "Call on prospective clients, fix appointments, and follow up on property leads.",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);

  const careerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      setResume(file);
    } else {
      alert("Please upload PDF file only");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resume) {
      alert("Please upload your resume (PDF)");
      return;
    }

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("experience", formData.experience);
    data.append("message", formData.message);
    data.append("jobTitle", selectedJob.title);
    data.append("resume", resume);

    console.log("Submitting:", formData, selectedJob);

    // Example API call
    // fetch("/api/job-apply", {
    //   method: "POST",
    //   body: data,
    // });

    alert("Application Submitted Successfully!");

    setSelectedJob(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
    });

    setResume(null);
  };

   const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-white text-[#0e2338] min-h-screen font-sans">
      {/* Hero */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0e2338]">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e2338] via-[#132a45] to-[#1c3c59]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 mix-blend-overlay" />

        {/* Aurora Beams */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(72,178,255,0.15) 0%, transparent 70%)",
              "radial-gradient(ellipse at 80% 70%, rgba(28,140,255,0.15) 0%, transparent 70%)",
              "radial-gradient(ellipse at 50% 50%, rgba(72,178,255,0.15) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Glow Blobs */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-[#48b2ff]/20 rounded-full blur-[180px]"
          initial={{ x: -400, y: 200, opacity: 0 }}
          animate={{ x: [0, 150, -150, 0], y: [0, -80, 80, 0], opacity: 1 }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-[#1c8cff]/15 rounded-full blur-[150px] top-20 right-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Particle Stars */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="flex justify-center flex-wrap text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            {title.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textVariant}
                initial="hidden"
                animate="visible"
                className={letter === " " ? "mr-2" : ""}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 text-lg md:text-2xl max-w-2xl mx-auto text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Become a part of a team that’s{" "}
            <span className="text-white font-semibold">
              constructing dreams
            </span>
          </motion.p>

          <motion.div
            className="mt-12 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            <button className="relative px-10 py-4 text-lg font-semibold text-white rounded-full overflow-hidden group backdrop-blur-md border border-white/20 shadow-xl">
              <span className="absolute inset-0 bg-gradient-to-r from-[#48b2ff] to-[#1c8cff] transition-transform transform group-hover:scale-110 group-hover:rotate-2 duration-700 ease-out" />
              <button onClick={()=>scrollToSection(careerRef)} className="relative z-10">Join Our Team</button>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg font-[tinos] leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            At Roots and Roofs, we don’t just trade in properties — we help
            people find homes, secure investments, and build a brighter
            tomorrow. As one of the most reliable real estate consultancy
            companies, we are always looking for driven, curious, and passionate
            people.
          </motion.p>
          <motion.p
            className="text-lg font-[tinos] leading-relaxed text-gray-700 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Whether you're experienced or starting out, we offer a culture of
            growth, collaboration, and purpose. Join something bigger than just
            a job.
          </motion.p>
        </motion.div>

        {/* Why Work With Us */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#0e2338]">
            Why Work With Us?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
            <li className="bg-gray-50 font-[tinos] p-5 rounded-xl shadow-md border border-gray-100">
              <strong>Growth-Oriented Culture:</strong> Career advancement
              through continuous learning.
            </li>
            <li className="bg-gray-50 p-5 font-[tinos] rounded-xl shadow-md border border-gray-100">
              <strong>Client-First Approach:</strong> Help people make the most
              important decisions of their lives.
            </li>
            <li className="bg-gray-50 p-5 font-[tinos] rounded-xl shadow-md border border-gray-100">
              <strong>Innovative & Tech-Savvy:</strong> We lead with tools,
              data, and creativity.
            </li>
            <li className="bg-gray-50 p-5 font-[tinos] rounded-xl shadow-md border border-gray-100">
              <strong>Collaborative Environment:</strong> Team wins, shared
              success, open communication.
            </li>
          </ul>
        </div>

        {/* Job Listings */}
        <div ref={careerRef}>
          <h2 className="text-3xl font-bold mb-6 font-[tinos] text-[#0e2338]">
            Current Openings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                onClick={() => setSelectedJob(job)}
                className="cursor-pointer p-6 rounded-2xl shadow-lg border border-gray-200 backdrop-blur-md bg-white/70 hover:shadow-xl transition"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={jobCardVariants}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold font-[tinos] mb-1 text-[#0e2338]">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {job.type} • {job.location} • Experience: {job.exp}
                </p>
                <p className="text-gray-700">{job.duties}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-lg font-[tinos] text-gray-700">
            <strong>Not the right role?</strong> Email us at{" "}
            <a
              href="mailto:careers@rootsandroofs.in"
              className="text-orange-600 font-[tinos] underline hover:text-orange-800 transition"
            >
              careers@rootsandroofs.in
            </a>{" "}
            with your resume and a short note.
          </p>
        </div>

        {/* Perks */}
        <div>
          <h2 className="text-3xl font-bold mb-6 font-[tinos] text-[#0e2338]">
            Perks & Benefits
          </h2>
          <ul className="grid grid-cols-1  font-[tinos]md:grid-cols-2 gap-4 text-lg text-gray-700">
            <li>🎯 Performance-based incentives</li>
            <li>🎓 Ongoing mentorship & training</li>
            <li>🕒 Flexible work hours (selected roles)</li>
            <li>🌍 Diverse, inclusive team culture</li>
            <li>🤝 Real estate expo & networking invites</li>
          </ul>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold font-[tinos] mb-4 text-[#0e2338]">
            Grow with Roots and Roofs.
          </h3>
          <p className="text-lg mb-6 font-[tinos] text-gray-700 max-w-2xl mx-auto">
            We’re not just a team — we’re a family with a vision. If you’re
            ready to grow, learn, and create impact — we want you with us.
          </p>
          <button
            onClick={()=>scrollToSection(careerRef)}
            className="inline-flex items-center px-6 py-3 font-[tinos] bg-orange-500 text-white rounded-full hover:bg-orange-600 transition font-medium shadow-md"
          >
            Apply Now <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2">
  <div
    className="bg-white w-full max-w-2xl max-h-[95vh] overflow-y-auto no-scrollbar rounded-2xl shadow-2xl p-8 relative"
  >
    {/* Close Button */}
    <button
      onClick={() => setSelectedJob(null)}
      className="  absolute  top-4  right-4  text-gray-500  hover:text-black text-xl"
    >
      ✕
    </button>

    {/* Job Title */}
    <h2 className="text-2xl font-bold mb-6 text-[#0e2338]">
      Apply for {selectedJob.title}
    </h2>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name + Email */}
      <div className="grid md:grid-cols-2 gap-4">

        {/* Full Name */}
        <div>
          <label className="block mb-1 font-medium">
            Full Name <span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">
            Email Address <span className="text-red-600">*</span>
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      {/* Phone + Experience */}
      <div className="grid md:grid-cols-2 gap-4">

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">
            Phone Number <span className="text-red-600">*</span>
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block mb-1 font-medium">
            Years of Experience
          </label>

          <input
            type="text"
            name="experience"
            placeholder="Enter years of experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      {/* Message */}
      <div>
        <label className="block mb-1 font-medium">
          Why should we hire you?
        </label>

        <textarea
          name="message"
          placeholder="Write your message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Resume Upload */}
      <div>
        <label className="block mb-2 font-medium">
          Upload Resume (PDF)
          <span className="text-red-600"> *</span>
        </label>

        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          required
          className="w-full border rounded-lg p-2"
        />

        {resume && (
          <p className="text-sm text-green-600 mt-2">
            {resume.name}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="
          w-full
          bg-orange-500
          text-white
          py-3
          rounded-lg
          font-medium
          hover:bg-green-600
          transition
        "
      >
        Submit Application
      </button>

    </form>
  </div>
</div>
      )}
    </div>
  );
};

export default Careerpage;
