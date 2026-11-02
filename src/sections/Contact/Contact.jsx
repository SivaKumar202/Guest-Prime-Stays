// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";

// export default function Contact() {
//   const [propertyType, setPropertyType] = useState("Vacation rental");
//   const [propertyUrl, setPropertyUrl] = useState("");
//   const [service, setService] = useState("Revenue management");

//   function handleSubmit(event) {
//     event.preventDefault();

//     const subject = `${propertyType} — property review request`;
//     const body =
//       "Hello Guest Prime Stays,\n\n" +
//       `I would like to discuss ${service.toLowerCase()} for my ${propertyType.toLowerCase()}.\n` +
//       `Property/listing: ${propertyUrl}\n\n` +
//       "Please let me know a convenient time to connect.";

//     const mailto = `mailto:info@guestprimestays.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailto;
//   }

//   const fieldClass =
//     "mt-2 min-h-12 w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/70 focus:ring-2 focus:ring-white/15";

//   return (
//     <section
//       id="contact"
//       className="bg-[#d90b27] px-6 py-20 text-white sm:px-8 sm:py-22 lg:px-10 lg:py-22"
//     >
//       <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
//         <div>
//           <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-white">
//             For owners · Partner with Guest Prime Stays
//           </span>
//           <h2 className="mt-5 text-4xl font-normal leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[clamp(3rem,4.6vw,4.5rem)]">
//             Let&apos;s make more
//             <br />
//             of your property.
//           </h2>
//           <p className="mt-6 max-w-lg text-sm leading-[1.9] text-white/85 sm:text-base">
//             One home. A growing portfolio. An independent hotel.
//             <br className="hidden sm:block" />
//             Tell us what you&apos;re working toward.
//           </p>
//           <div className="mt-10 hidden border-t border-white/30 pt-5 text-sm text-white sm:block">
//             Thoughtful stays. Memorable moments.
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5 w-9/12 h-auto">
//           <label className="block text-sm font-semibold tracking-wide">
//             Your property type
//             <select
//               value={propertyType}
//               onChange={(event) => setPropertyType(event.target.value)}
//               className={fieldClass}
//             >
//               <option className="text-neutral-900">Vacation rental</option>
//               <option className="text-neutral-900">Independent hotel</option>
//               <option className="text-neutral-900">Boutique hotel</option>
//               <option className="text-neutral-900">Multiple properties</option>
//             </select>
//           </label>

//           <label className="block text-sm font-semibold tracking-wide">
//             Property or listing URL
//             <input
//               type="url"
//               required
//               value={propertyUrl}
//               onChange={(event) => setPropertyUrl(event.target.value)}
//               placeholder="https://"
//               className={fieldClass}
//             />
//           </label>

//           <label className="block text-sm font-semibold tracking-wide">
//             What would you like help with?
//             <select
//               value={service}
//               onChange={(event) => setService(event.target.value)}
//               className={fieldClass}
//             >
//               <option className="text-neutral-900">Revenue management</option>
//               <option className="text-neutral-900">Full-service co-hosting</option>
//               <option className="text-neutral-900">Let's discuss the best fit</option>
//             </select>
//           </label>

//           <button
//             type="submit"
//             className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-base font-bold text-[#c80924] sm:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.03]"
//           >
//             Start the conversation <ArrowUpRight size={16} />
//           </button>
//           <p className="text-base leading-relaxed text-white">
//             Opens an email draft for you to review and send.
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [propertyType, setPropertyType] = useState("Vacation rental");
  const [propertyUrl, setPropertyUrl] = useState("");
  const [service, setService] = useState("Revenue management");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "1184800e-0d49-4e72-a738-9f0a8ee878cf"
    );

    // Optional: Customize the email subject
    formData.append(
      "subject",
      `${propertyType} — Property Review Request`
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success(
          "Thank you for your inquiry! Our team will get back to you soon."
        );

        event.target.reset();
        setPropertyType("Vacation rental");
        setPropertyUrl("");
        setService("Revenue management");
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("Network Error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "mt-2 min-h-12 w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/70 focus:ring-2 focus:ring-white/15";

  return (
    <section
      id="contact"
      className="bg-[#d90b27] px-6 py-20 text-white sm:px-8 sm:py-22 lg:px-10 lg:py-22"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-24">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-white">
            For owners · Partner with Guest Prime Stays
          </span>

          <h2 className="mt-5 text-4xl font-normal leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[clamp(3rem,4.6vw,4.5rem)]">
            Let&apos;s make more
            <br />
            of your property.
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-[1.9] text-white/85 sm:text-base">
            One home. A growing portfolio. An independent hotel.
            <br className="hidden sm:block" />
            Tell us what you&apos;re working toward.
          </p>

          <div className="mt-10 hidden border-t border-white/30 pt-5 text-sm text-white sm:block">
            Thoughtful stays. Memorable moments.
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-9/12 h-auto space-y-5"
        >
          {/* PROPERTY TYPE */}
          <label className="block text-sm font-semibold tracking-wide">
            Your property type

            <select
              name="property_type"
              value={propertyType}
              onChange={(event) =>
                setPropertyType(event.target.value)
              }
              className={fieldClass}
            >
              <option className="text-neutral-900">
                Vacation rental
              </option>
              <option className="text-neutral-900">
                Independent hotel
              </option>
              <option className="text-neutral-900">
                Boutique hotel
              </option>
              <option className="text-neutral-900">
                Multiple properties
              </option>
            </select>
          </label>

          {/* PROPERTY URL */}
          <label className="block text-sm font-semibold tracking-wide">
            Property or listing URL

            <input
              type="url"
              name="property_url"
              required
              value={propertyUrl}
              onChange={(event) =>
                setPropertyUrl(event.target.value)
              }
              placeholder="https://"
              className={fieldClass}
            />
          </label>

          {/* SERVICE */}
          <label className="block text-sm font-semibold tracking-wide">
            What would you like help with?

            <select
              name="service"
              value={service}
              onChange={(event) =>
                setService(event.target.value)
              }
              className={fieldClass}
            >
              <option className="text-neutral-900">
                Revenue management
              </option>
              <option className="text-neutral-900">
                Full-service co-hosting
              </option>
              <option className="text-neutral-900">
                Let's discuss the best fit
              </option>
            </select>
          </label>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-base font-bold text-[#c80924] sm:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.03] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Start the conversation"}

            {!loading && <ArrowUpRight size={16} />}
          </button>

          <p className="text-base leading-relaxed text-white">
            {loading
              ? "Sending your inquiry..."
              : "Your inquiry will be sent directly to our team."}
          </p>
        </form>
      </div>
    </section>
  );
}
