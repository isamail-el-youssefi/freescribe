export default function FileDisplay({ handleAudioReset, file, audio }) {
  return (
    <main className="flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 ">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Your<span className="text-blue-400 bold">File</span>
      </h1>
      <div className="mx-auto flex flex-col text-left">
        <h3 className="font-semibold">Name</h3>
        <p>{file.name}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button className="text-slate-400">Reset</button>
        <button className="  border-2 border-blue-400/25 px-3 py-2 rounded-xl shadow-lg shadow-blue-400/25">
          <p className="text-blue-400">Transcribe</p>
        </button>
      </div>
    </main>
  );
}
