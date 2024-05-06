export default function Home({ setFile, setAudio }) {
  return (
    <main className="flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4  justify-center pb-20">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Free<span className="text-blue-400 bold">Scribe</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record <span className="text-blue-400">&rarr;</span> Transcribe{" "}
        <span className="text-blue-400">&rarr;</span> Translate
      </h3>
      <button className="bg-white px-5 py-4 rounded-2xl shadow-lg shadow-blue-400/25 flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4">
        <p className="text-blue-400">Record</p>
        <i className="fa-solid duration-200 fa-microphone"></i>
      </button>
      <p className="text-base">
        Or{" "}
        <label className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200">
          Upload
          <input
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            className="hidden"
            type="file"
            accept=".mp3,.wave"
          />
          a mp3 file
        </label>
      </p>
    </main>
  );
}
