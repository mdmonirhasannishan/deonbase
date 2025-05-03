
const BgEffect = () => {

  return (
    <>
      {/* Visual connection component */}
      <div className="w-full h-full flex items-center justify-center relative">
        {/* Decorative elements */}
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 w-full h-full max-w-2xl"></div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`bg-particle-${i}`}
          className="absolute rounded-full bg-blue-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            animation: `float ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 25}s`,
          }}
        />
      ))}
    </>
  );
}


export default BgEffect;
