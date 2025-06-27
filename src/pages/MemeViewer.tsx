import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import memesData from "../api/halalMemes.json"

const MemeViewer = () => {
  const navigate = useNavigate();
  const {category} = useParams<{category: string}>();
  const memes = memesData.filter((meme) => meme.category === category);
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

  const handleNext = () => {
    setCurrentMemeIndex((prevIndex) => (prevIndex + 1) % memes.length);
  };

  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = memes[currentMemeIndex].image ?? "";
    link.download = `halal-meme-${category}-${currentMemeIndex + 1}.jpg`;
    link.click();
  };


  const handlePrevious = () => {
    setCurrentMemeIndex((prev) => (prev - 1 + memes.length) % memes.length);
  };

  return (
    <div className="flex flex-col items-center h-screen p-4 bg-[#b7acf1]">

      {memes[currentMemeIndex].image && (
      <img src={memes[currentMemeIndex].image} alt={`Meme ${currentMemeIndex + 1}`} 
      className="w-[400px] h-[300px] rounded-xl"/>
      )}
        {memes[currentMemeIndex].text && (

       <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-md max-w-md mx-auto text-center mt-20">
      <p className=" text-sm whitespace-pre-line font-semibold text-slate-600">
        {memes[currentMemeIndex].text}
      </p>
      
    </div>
    )}
       <div className="flex gap-4 mt-4">
       <button onClick={handleNext} className="bg-[#a2e4ac] mt-5 text-slate-600 font-bold px-4 py-2 rounded-lg">
          Next Meme 🔁
        </button>
      <button onClick={handleDownload} className="bg-[#e0b0f8] mt-5 text-slate-600 font-bold px-4 py-2 rounded-lg">
          Download ⬇️
        </button>
        </div>
 <div className="flex gap-4 mt-4">
      <button  onClick={handlePrevious} className="bg-[#e0b0f8] mt-5 text-slate-600 font-bold px-4 py-2 rounded-lg">
         ⬅️ Previous
        </button>

         <button className="bg-[#ecc7c7] mt-5 text-slate-600 font-bold px-2 py-2 rounded-lg"
        onClick={() => navigate("/")}
       
      >
        🔙 to Categories
      </button> 
</div>
        

    </div>
  )
}

export default MemeViewer


