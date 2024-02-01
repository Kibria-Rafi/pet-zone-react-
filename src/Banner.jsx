

const Banner = () => {
    return (
        <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/nzkYY4T/cody-scott-milewski-56q-QITw-L-Fs-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-white ">Welcome to <span className="text-yellow-400">PET</span><span className="text-3xl">ZONE</span> </h1>
            
            <div>
              <input type="search" name="" id="" placeholder="search products" className="px-5 py-2 rounded-s-lg" />
              <button className="px-3 py-2 bg-yellow-400 rounded-e-lg text-black font-bold">Search Item</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;