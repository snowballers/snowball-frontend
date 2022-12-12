import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <span className="font-bold text-2xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-bold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-bold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed font-bold">
          <span>Total</span>
          <span>$38</span>
        </div>
        <button
          className="flex justify-center w-2/4 mt-5 mx-auto bg-blue-500
              rounded-2xl p-3 text-white
              hover:bg-blue-400  active:bg-teal-500  disabled:bg-blue-200"
          type="button"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Home;
