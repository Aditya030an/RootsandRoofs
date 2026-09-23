/* eslint-disable react/prop-types -- prop-types isn't a dependency of this project */
import { motion } from "framer-motion";

/**
 * Shared shell for the Privacy Policy and Terms pages.
 *
 * `sections` is a list of { heading, body }, where each body entry is either a
 * string (rendered as a paragraph) or an array of strings (a bullet list).
 */
const LegalPage = ({ title, updated, intro, sections }) => (
  <div className="bg-white text-[#1B2A3D] font-sans">
    {/* Title block */}
    <section className="bg-[#1B2A3D] text-white py-14 md:py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold"
        >
          {title}
        </motion.h1>
        <p className="mt-3 text-sm text-gray-400">Last updated: {updated}</p>
        {intro && (
          <p className="mt-6 text-gray-200 leading-relaxed max-w-3xl">{intro}</p>
        )}
      </div>
    </section>

    {/* Body */}
    <section className="py-12 md:py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-10">
        {sections.map(({ heading, body }, i) => (
          <article key={i}>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              {heading}
            </h2>
            {body.map((item, j) =>
              Array.isArray(item) ? (
                <ul
                  key={j}
                  className="list-disc pl-5 space-y-1.5 text-gray-700 leading-relaxed mb-4 last:mb-0"
                >
                  {item.map((li, k) => (
                    <li key={k}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p
                  key={j}
                  className="text-gray-700 leading-relaxed mb-4 last:mb-0"
                >
                  {item}
                </p>
              )
            )}
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default LegalPage;
