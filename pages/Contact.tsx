

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4">
  {/* Heading and Paragraph */}
  <div className="text-center mb-10 max-w-2xl">
    <h2 className="text-4xl font-bold mb-4">CONTACT ME</h2>
    <p>
      I’m always excited to connect with fellow developers, potential collaborators, or anyone curious about web development. Whether you have a question, a project idea, or just want to say hello, feel free to reach out—I’d love to hear from you and explore how we can create something amazing together.
    </p>
  </div>

  {/* Form */}
  <form className="flex flex-col w-full max-w-lg gap-4 p-8 bg-gray-200 rounded-lg shadow-lg">
    <input
      className="w-full bg-white p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      placeholder="First name..."
      required
    />
    <input
      className="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      placeholder="Last name..."
    />
    <input
      className="w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 bg-white focus:ring-blue-500"
      type="email"
      placeholder="Email..."
      required
    />
    <input
      className="w-full p-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="tel"
      placeholder="Phone number..."
    />
    <button className="bg-blue-500 text-white p-3 rounded-md mt-2 hover:bg-blue-600 transition">
      Submit
    </button>
  </form>
</section>


  )
}

export default Contact