import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/nzkYY4T/cody-scott-milewski-56q-QITw-L-Fs-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold text-white ">Welcome to <span className="text-yellow-400">PETZONE</span></h1>
      <p className="mb-5 text-white">We provide pet food, cloths, medicine, toy etc. If you need to some product simply click to Our Product button</p>
      <NavLink to="/products" className="px-3 py-2 bg-yellow-400 rounded-lg text-black font-bold">See Products</NavLink>
    </div>
  </div>
</div>
    );
};

export default Home;