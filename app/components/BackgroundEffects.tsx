export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full -z-10"></div>

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full -z-10"></div>
    </>
  );
}