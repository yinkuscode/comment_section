import "./App.css";
import ramsesmiron from "./assets/avatars/image-ramsesmiron.png";
import Data from "./components/Data";
import Data2 from "./components/Data2";
import Input from "./components/Input";
// import Textarea from "./components/Textarea";
import Textarea from "./components/textarea";

function App() {
  return (
    <main className=" min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center font-rubik text-sm  ">
      <Data />
      <Data2 />
      <div className=" hidden md:bg-white md:flex md:justify-between md:min-h-150px md:rounded md:shadow-sm md:shadow-gray-500 md:mt-3 md:py-2 md:px-7 ">
        <img
          src={ramsesmiron}
          alt="User Avatar"
          className=" md:visible md:w-11 md:rounded-full md:mr-4 md:self-start"
        />

        <Textarea />
        <button className="ml-4 px-3 py-1 self-start bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          SEND
        </button>
      </div>
      {/* <div className="md:hidden mt-3 bg-white  min-h-150px md:rounded shadow-sm shadow-gray-500  py-3 px-5 x ">
        <textarea
          type="text"
          placeholder="Add a comment..."
          className="border-2 border-lightGray w-[20rem] h-24 "
        ></textarea>
        <div className=" pt-3 flex justify-between items-center">
          <img src={ramsesmiron} alt="User Avatar" className=" " />
          <button className=" px-3 py-1  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            SEND
          </button>
        </div>
      </div> */}
    </main>
  );
}

export default App;
