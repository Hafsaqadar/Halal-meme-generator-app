import { useNavigate } from "react-router-dom"
const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div  className="flex flex-col items-center  h-screen  p-4 bg-[#d48cc8]">

        <h1 className=" font-bold text-2xl mt-20">🕌Generate halal memes</h1>
          <p className="text-center font-bold  mt-5">Choose your meme vibe 👇</p>

          {/* buttons */}
        
         <div className="flex space-x-1 mt-10  w-full justify-center ">
           {/* Funny 😂 */}
            <button
          onClick={() => navigate("/memes/funny")}
          className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors duration-300"
        >Funny 😂</button>

        <button
          onClick={() => navigate("/memes/reminder")}
          className="bg-blue-500 text-white rounded-full px-3"
        >
          Reminder 📿
        </button>
          <button
          onClick={() => navigate("/memes/inspo")}
          className="bg-purple-500 text-white px-6 py-2 rounded-full"
        >
          Inspo 🌟
        </button>
    </div> 

    </div>
  )
}

export default HomePage