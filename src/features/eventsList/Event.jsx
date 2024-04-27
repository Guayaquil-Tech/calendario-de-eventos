export default function Event({data,index}) {
    return(
        <article
              className="w-full max-w-[300px] rounded-md border text-slate-300 border-primary/40 bg-white/20 transition-all duration-150 hover:scale-105">
              <a
                className="relative inline-block w-full h-full p-4 space-y-4"
                href={data.url.includes('https://') ? data.url : `https://${data.url}`} 
                target="_blank"
                rel="noopener noreferrer">
                <header className="flex justify-between items-center">
                  <span className="text-4xl font-bold text-slate-300">#{index + 1}</span>
                  <div className="w-max border rounded-md border-primary/40 text-center">
                    <div className="bg-primary/40 text-sm rounded-t-md text-white backdrop-blur-sm px-4 py-1">{
                      data.monthAbbreviation
                    }</div>
                    <span className="block p-2 text-lg font-bold text-primary leading-tight">{data.date.getDate()}</span>
                  </div>
                </header>
                <h2 className="text-2xl text-left text-balance font-semibold text-primary">{
                  data.title
                }</h2>
                <section>
                  <span className="inline-block text-slate-300 font-medium text-sm mb-2">Organizadores:</span>
                  <ul className="text-white">
                    {(data.organizers.length > 25)?data.organizers.slice(0, 25) + '...':data.organizers}
                  </ul>
                </section>
                <svg
                  className="absolute bottom-4 right-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H12V5H5V19H19V12H21V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM9.7 15.7L8.3 14.3L17.6 5H14V3H21V10H19V6.4L9.7 15.7Z"
                    fill="currentColor"></path>
                </svg>
              </a>
            </article>
    )
}