export default function Home() {
  return (
    <main>
      <section className="pt-32 p-6">
        <div className="max-w-md mb-6">
          <h1 className="font-bold text-5xl">One link to everything</h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social media profiles and more.
          </h2>
        </div>

        <form className="inline-flex items-center shadow-lg shadow-gray-500/20">
          <span className="bg-white py-4 pl-4">linklist.to/</span>
          <input type="text" className="py-4" placeholder="username" />
          <button className="bg-blue-700 text-white py-4 px-6" type="submit">
            Join For Free
          </button>
        </form>
      </section>
    </main>
  );
}
