const ProgramDetails = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
        
        {/* LEFT SIDE: Text and Buttons */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#593A08] mb-6">Intro to AI Program Details:</h2>

          <ul className="space-y-4 text-gray-800">
            <li>✔️ The Intro to AI programs have a very nominal fee (free for several schools and with financial support available for students who need it).</li>
            <li>✔️ Free for Punjab Government Schools, SGPC Schools, Akal Academies, GNDEC College, and SBSSTC University.</li>
            <li>✔️ Register to attend live classes.</li>
            <li>✔️ Designed for students in 8th grade and above. Introduces real-world AI skills and projects.</li>
            <li>✔️ Bachelor’s and Master’s students are welcome to apply, especially those seeking real-world AI applications.</li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#593A08] hover:bg-[#7c5310] text-white font-medium py-2 px-4 rounded">
              Register for practical AI course
            </button>
            <button className="bg-[#D9D2C0] text-black font-medium py-2 px-4 rounded">
              Class Recoding (AI sessions)
            </button>
            <button className="border border-[#593A08] text-[#593A08] hover:bg-[#f8f1e7] font-medium py-2 px-4 rounded">
              Join Live Events
            </button>
            <button className="border border-[#593A08] text-[#593A08] hover:bg-[#f8f1e7] font-medium py-2 px-4 rounded">
              Internship Opportunities
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Video */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mt-6 md:mt-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/WEmcjN655Bw" title="ਬੱਚਿਆਂ ਨੂੰ ਭਵਿੱਖ ਲਈ ਤਿਆਰ ਕਰੋ – Practical AI Classes"// Replace with your actual video ID
            
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
