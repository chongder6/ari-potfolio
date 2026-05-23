export default function Particles() {

  const particles = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      {particles.map((_, index) => (

        <div
          key={index}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />

      ))}

    </div>
  );
}