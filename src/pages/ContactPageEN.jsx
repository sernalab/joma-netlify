function ContactEN() {
  return (
    <>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 bg-gray-300">
                  <h3 className="text-xl font-semibold mb-4">
                    We are here to help
                  </h3>
                  <p>
                    If you have any questions, feel free to send us a message.
                  </p>
                  <div className="mt-8">
                    <ul className="list-none space-y-2">
                      <li>
                        <strong>Call us: </strong> 93 6834840
                      </li>
                      <li>
                        <strong>Fax: </strong> 93 6831869
                      </li>
                      <li>
                        <strong>Address: </strong> C/ Bages, 3 Nave 24 - Pol.
                        Can Prunera 08759 - Vallirana (Barcelona)
                      </li>
                      <li>
                        <strong>GPS Position: </strong> Latitude 41º 22’ 22” N
                        Longitude 1º 54’ 31” E
                      </li>
                      <li>
                        <strong>Location: </strong>
                        <a
                          href="https://maps.app.goo.gl/hhLtDgh9KLDiuUJLA"
                          target="_blank"
                          className="font-black underline"
                        >
                          Map
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-gray-600">
                    <h3 className="font-semibold mb-2">
                      Send us a direct message
                    </h3>
                    <form action="mailto:youremail@example.com" method="GET">
                      <div className="mb-4">
                        <label className="block text-sm">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline mt-1"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="youremail@example.com"
                          required
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline mt-1"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-sm">Message</label>
                        <textarea
                          name="body"
                          rows="4"
                          placeholder="Write your message here"
                          required
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline mt-1"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactEN;
