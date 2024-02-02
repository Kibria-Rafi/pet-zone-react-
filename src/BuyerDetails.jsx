

const BuyerDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-semibold text-gray-600">
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            rows="3"
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter your address"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter your phone number"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
        {/* Add Confirm Purchase Button */}
        <button
          type="button"
          className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          onClick={() => alert('Purchase confirmed!')} // You can replace this with your logic
        >
          Confirm Purchase
        </button>
      </form>
    </div>
  );
};

export default BuyerDetails;
