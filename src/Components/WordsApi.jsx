import React, { useState, useEffect } from 'react';

export default function WordsApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const[words, setWords] =useState()
  const[word,setWord] =useState('')
  
  const handleSubmit=(e) =>{
    e.preventDefault();
    
    const getDefinition = async () => {
      
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      
          const data = await response.json();
          setWords(data[0]);
  
      }
      getDefinition()
      setWord("")
      
    };
    
  
 /*useEffect(()=>{
  setIsLoading(true)
  setIsError(true)

 },[]
 )*/

   

  
  return (
    <div className='container mx-w-lg mx-auto '>
  
    
    <nav className='nav flex flex-row p-4 items-center ' /*className='head my-2 h-14 flex flex-row items-center justify-between'*/>
      <div className='icons flex flex-row  space-x-80 '>
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" fill="none">
  <path d="M0.25 33C0.25 33.4142 0.585786 33.75 1 33.75C1.41421 33.75 1.75 33.4142 1.75 33H0.25ZM2.17157 2.17157L1.64124 1.64124L1.64124 1.64124L2.17157 2.17157ZM32.6485 1.35147L32.1181 1.88175L32.1182 1.88186L32.6485 1.35147ZM32.25 28.428C32.25 28.8422 32.5858 29.178 33 29.178C33.4142 29.178 33.75 28.8422 33.75 28.428H32.25ZM5 28.25C4.58579 28.25 4.25 28.5858 4.25 29C4.25 29.4142 4.58579 29.75 5 29.75V28.25ZM33 29.75C33.4142 29.75 33.75 29.4142 33.75 29C33.75 28.5858 33.4142 28.25 33 28.25V29.75ZM5 36.25C4.58579 36.25 4.25 36.5858 4.25 37C4.25 37.4142 4.58579 37.75 5 37.75V36.25ZM33 37.75C33.4142 37.75 33.75 37.4142 33.75 37C33.75 36.5858 33.4142 36.25 33 36.25V37.75ZM1.75 33V5H0.25V33H1.75ZM1.75 5C1.75 4.13804 2.09241 3.3114 2.7019 2.7019L1.64124 1.64124C0.750449 2.53204 0.25 3.74022 0.25 5H1.75ZM2.7019 2.7019C3.3114 2.09241 4.13802 1.75 5 1.75V0.25C3.74018 0.25 2.53204 0.750451 1.64124 1.64124L2.7019 2.7019ZM5 1.75H31.8V0.25H5V1.75ZM31.8 1.75C31.9194 1.75 32.0338 1.79742 32.1181 1.88175L33.1789 0.821187C32.8132 0.455444 32.3172 0.25 31.8 0.25V1.75ZM32.1182 1.88186C32.2026 1.96621 32.25 2.08062 32.25 2.2H33.75C33.75 1.68286 33.5446 1.18683 33.1788 0.821081L32.1182 1.88186ZM32.25 2.2V28.428H33.75V2.2H32.25ZM5 29.75H33V28.25H5V29.75ZM5 37.75H33V36.25H5V37.75Z" fill="#757575"/>
  <path d="M5 37C3.9391 37 2.92172 36.5786 2.17157 35.8284C1.42143 35.0783 1 34.0609 1 33C1 31.9391 1.42143 30.9217 2.17157 30.1716C2.92172 29.4214 3.9391 29 5 29" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 9H23" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
</svg>


<form>
    <select>
        <option value='serif'>Serif</option>
        <option value='sans serif'>Sans-serif</option>
        <option value='monospace'>Monospace</option>
    </select>
</form>

</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="81" height="22" viewBox="0 0 81 22" fill="none">
  <rect y="1" width="40" height="20" rx="10" fill="#757575"/>
  <circle cx="10" cy="11" r="7" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M60 10.449C59.9985 12.8283 60.8017 15.1383 62.2791 17.0033C63.7566 18.8683 65.8214 20.1788 68.138 20.7218C70.4545 21.2647 72.8866 21.0082 75.039 19.994C77.1912 18.9797 78.9373 17.2673 79.9931 15.1352C70.5442 15.1352 65.858 10.4479 65.858 1C64.0984 1.87311 62.6177 3.22033 61.5827 4.88981C60.5476 6.5593 59.9995 8.48469 60 10.449Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>

    </nav>
      <div className='relative'>
        <div>
           <form  className=' w-full bg-gray-100 outline-none border-none rounded-lg px-3 py-4 shadow sm' onSubmit={handleSubmit}>
            <div className='flex'>
        <input type='text' 
         className='flex-grow bg-gray-100 outline-none border-none'
         value={word}
         onChange={(e)=>setWord(e.target.value)}
         placeholder='Search' />
         
        
        <button  type='submit' /*className= ' mx-0 bg-gray-100 rounded-lg px-3 py-4 inline-block border-none outline-none transition-all duration-200 '*/>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M13.193 12.1323C12.9001 11.8394 12.4252 11.8394 12.1323 12.1323C11.8394 12.4252 11.8394 12.9001 12.1323 13.193L13.193 12.1323ZM16.0199 17.0806C16.3128 17.3734 16.7877 17.3734 17.0806 17.0806C17.3734 16.7877 17.3734 16.3128 17.0806 16.0199L16.0199 17.0806ZM2.95195 12.3768L3.48231 11.8465L3.48226 11.8464L2.95195 12.3768ZM5.11403 13.8215L4.82696 14.5144L4.82704 14.5144L5.11403 13.8215ZM10.2147 13.8215L10.5017 14.5144L10.5018 14.5144L10.2147 13.8215ZM12.3768 12.3768L11.8465 11.8464L11.8464 11.8465L12.3768 12.3768ZM13.8215 10.2147L14.5144 10.5018L14.5144 10.5017L13.8215 10.2147ZM12.3768 2.95195L11.8464 3.48228L11.8465 3.4823L12.3768 2.95195ZM12.1323 13.193L16.0199 17.0806L17.0806 16.0199L13.193 12.1323L12.1323 13.193ZM0.25 7.66438C0.25 8.63802 0.441775 9.60213 0.814377 10.5017L2.20021 9.92773C1.90297 9.2101 1.75 8.44103 1.75 7.66438H0.25ZM0.814377 10.5017C1.18699 11.4014 1.73315 12.2187 2.42165 12.9071L3.48226 11.8464C2.93307 11.2973 2.49743 10.6453 2.20021 9.92773L0.814377 10.5017ZM2.4216 12.9071C3.11012 13.5957 3.92748 14.1417 4.82696 14.5144L5.40111 13.1286C4.68347 12.8313 4.03147 12.3957 3.48231 11.8465L2.4216 12.9071ZM4.82704 14.5144C5.72658 14.887 6.69075 15.0788 7.66438 15.0788V13.5788C6.88773 13.5788 6.1186 13.4258 5.40102 13.1286L4.82704 14.5144ZM7.66438 15.0788C8.63803 15.0788 9.60213 14.887 10.5017 14.5144L9.92776 13.1286C9.2101 13.4258 8.44102 13.5788 7.66438 13.5788V15.0788ZM10.5018 14.5144C11.4013 14.1417 12.2187 13.5956 12.9071 12.907L11.8464 11.8465C11.2973 12.3957 10.6453 12.8313 9.92767 13.1286L10.5018 14.5144ZM12.907 12.9071C13.5956 12.2187 14.1417 11.4013 14.5144 10.5018L13.1286 9.92767C12.8313 10.6453 12.3957 11.2973 11.8465 11.8464L12.907 12.9071ZM14.5144 10.5017C14.887 9.60213 15.0788 8.63803 15.0788 7.66438H13.5788C13.5788 8.44102 13.4258 9.2101 13.1286 9.92776L14.5144 10.5017ZM15.0788 7.66438C15.0788 5.69797 14.2977 3.81209 12.9071 2.4216L11.8465 3.4823C12.9557 4.59145 13.5788 6.09578 13.5788 7.66438H15.0788ZM12.9071 2.42163C11.5167 1.03116 9.6308 0.25 7.66438 0.25V1.75C9.23297 1.75 10.7373 2.37312 11.8464 3.48228L12.9071 2.42163ZM7.66438 0.25C5.69796 0.25 3.81209 1.03115 2.42162 2.42162L3.48228 3.48228C4.59145 2.37312 6.09579 1.75 7.66438 1.75V0.25ZM2.42162 2.42162C1.03115 3.81209 0.25 5.69796 0.25 7.66438H1.75C1.75 6.09579 2.37312 4.59145 3.48228 3.48228L2.42162 2.42162Z" fill="#A445ED"/>
</svg>
        </button>
      </div>
        </form>
        
        {words && (
        <div className=' mt-20 flex flex-row justify-between font-bold'>
          <h2 className='lg:text-5xl md:text-3xl sm:text-2xl capitalize'>{words.word} {""} </h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
  <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M29 27V48L50 37.5L29 27Z" fill="#A445ED"/>

</svg>

       
        </div>
          )}
          {
            words && words.phonetic &&(
              <p className='text-purple-700'>{words.phonetic}</p>
            )
          }
         {
  words &&
  words.meanings.map((meaning, meaningIndex) => (
    <div key={meaningIndex} className="meaning">
      <h3 className='font-bold mt-8'>{meaning.partOfSpeech}</h3>
      <ul>
        {meaning.definitions.map((definition, definitionIndex) => (
          <li className='gap-4' key={definitionIndex}>
            <strong></strong> {definition.definition}
          </li>
        ))}
      </ul>
      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <div>
          <strong className=''>Synonyms:</strong>{" "}
          {meaning.synonyms.map((synonym, synonymIndex) => (
            <span className='text-purple-600' key={synonymIndex}>{synonym}, </span>
          ))}
        </div>
      )}
      
    </div>
  ))
}

        
        </div>
        </div>
      {isLoading && <h1 className='text-3xl font-bold '>Loading....</h1>}
      {isError && <h1 className='text -3xl font-bold'>Error</h1>}
      
      
    </div>
  );
}
