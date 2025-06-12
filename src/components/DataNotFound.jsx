const DataNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Not Found"
        className="w-20 h-20 mb-4 opacity-70"
      />
      <p className="text-gray-200 mt-2 text-sm">
        Please try a different city or check your spelling.
      </p>
    </div>
  );
};

export default DataNotFound;
