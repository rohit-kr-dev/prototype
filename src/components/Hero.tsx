const Hero = () => {
  return (
    <header className="relative h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')",
        }}
      />
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide drop-shadow-lg">
          STONECORE CAPITAL
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Your Trusted Real Estate Investment Partner
        </p>
      </div>
    </header>
  );
};

export default Hero;
