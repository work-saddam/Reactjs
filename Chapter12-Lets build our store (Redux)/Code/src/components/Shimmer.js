const CardShimmer = () => {
  return (
    <div className="shimmer-card w-64 h-80 bg-white rounded-lg shadow-md overflow-hidden relative">
      {/* Shimmer background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer"></div>

      <div className="shimmer-img w-full h-48 bg-gray-200"></div>
      <div className="p-4">
        <div className="shimmer-title h-6 bg-gray-200 w-3/4 mb-2"></div>
        <div className="shimmer-tags h-4 bg-gray-200 w-1/2 mb-4"></div>
        <div className="shimmer-details h-4 bg-gray-200 w-full"></div>
        <div className="shimmer-details h-4 bg-gray-200 w-2/3 mt-2"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap justify-center gap-10 mt-12">
      {new Array(8).fill(0).map((element, index) => {
        return <CardShimmer key={index.toString() + 1} />;
      })}
    </div>
  );
};

export default Shimmer;
