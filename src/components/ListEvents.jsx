import { useEffect, useState } from 'react'
import axios from 'axios'
import { ParseData } from '../Helpers/Sheets'
import Event from '@/components/Event'
import moment from 'moment'
import "./listevents.css"
export default function ListEvents() {
  //Data
  const [isLoading, setIsLoading] = useState(false)
  const [events, setEvents] = useState([])
  const [organizers, setOrganizers] = useState([])
  const [cities, setCities] = useState([])

  //Filters
  const [filterName, setFilterName] = useState(null)
  const [filterOrganizer, setFilterOrganizer] = useState(null)
  const [filterDate, setFilterDate] = useState(null)
  const [filterCity, setFilterCity] = useState(null)


  //Google Sheets
  const spreadsheetID = '1ZEMXCnbwTo0vrvKmQaIuaGC9QVGGRrRwKwGmM10Tx60'
  const tabName = '2024'
  // Select column names
  const SQL_QUERY = `SELECT A, B, C, D, G, J`
  const query = encodeURIComponent(SQL_QUERY)
  const base = `https://docs.google.com/spreadsheets/d/${spreadsheetID}/gviz/tq?`

  const getEvents = async () => {
    setIsLoading(true)
    let resp = await axios(`${base}&sheet=${tabName}&tq=${query}`)
    let respEvents = ParseData(resp.data)
    setEvents(respEvents)

    let organizersList = respEvents
      .reduce((acumulador, valorActual) => {
        let organizadores = acumulador.map(item => item.organizers)
        return organizadores.includes(valorActual.organizers)
          ? acumulador
          : [...acumulador, valorActual]
      }, [])
      .map(item => item.organizers)

    setOrganizers(organizersList)

    let cityList = respEvents
      .reduce((acumulador, valorActual) => {
        let cities = acumulador.map(item => item.city)
        return cities.includes(valorActual.city) ? acumulador : [...acumulador, valorActual]
      }, [])
      .map(item => item.city)

    setCities(cityList)
    setIsLoading(false)
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setFilterOrganizer(params.get('organizador'))

    getEvents().catch(error => console.log(error))
  }, [query, base, spreadsheetID, tabName])

  return (
    <div>
      {isLoading ? (
        <svg
          id="loading-spinnerlast"
          className="animate-spin m-auto mt-8 h-14 w-14 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <>
          <section className="flex flex-wrap justify-center gap-4 mt-4 w-full min-h-[16rem]">
            <div className="m-2 max-w-screen-lg">
              <div className="rounded-xl p-6">
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-white text-sm font-medium">
                      Evento
                    </label>
                    <input
                      type="text"
                      id="name"
                      onChange={item => {
                        setFilterName(item.target.value)
                      }}
                      placeholder="Desarrollo de una app...."
                      style={{ color: 'white' }}
                      className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none  bg-white/20"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="date" className="text-white text-sm font-medium">
                      Fecha
                    </label>
                    <input
                      type="date"
                      onChange={item => {
                        if (item.target.value != '') {
                          setFilterDate(moment(item.target.value).format('DD/MM/YYYY'))
                        } else {
                          setFilterDate(null)
                        }
                      }}
                      style={{ color: 'white' }}
                      className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 outline-none text-white focus:border-blue-500 bg-white/20"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="status" className="text-white text-sm font-medium">
                      Ciudad
                    </label>

                    <select
                      style={{ height: '100%', color: 'white' }}
                      id="status"
                      onChange={item => {
                        if (item.target.value === 'Todas' || item.target.value === 'No Confirmado' ) {
                          setFilterCity(null)
                        } else {
                          setFilterCity(item.target.value)
                        }
                      }}
                      defaultValue={'Todas'}
                      className=" mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 outline-none bg-white/20">
                      <option value={'Todas'} style={{ color: 'black' }}>
                        Todas
                      </option>
                      {cities
                      .filter(city=>city!=null)
                      .map((city, index) => (
                      <option value={city} style={{ color: 'black' }} key={index}>
                        {city}
                      </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="status" className="text-white text-sm font-medium">
                      Organizadores
                    </label>

                    <select
                      style={{ height: '100%', color: 'white' }}
                      onChange={item => {
                        if (item.target.value === 'Todos') {
                          setFilterOrganizer(null)
                        } else {
                          setFilterOrganizer(item.target.value)
                        }
                      }}
                      defaultValue={'Todos'}
                      id="status"
                      className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none bg-white/20">
                      <option value={'Todos'} style={{ color: 'black' }}>
                        Todos
                      </option>
                      {organizers.map((organizer, index) => (
                        <option value={organizer} style={{ color: 'black' }} key={index}>
                          {organizer}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                  <button className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">
                    Resetear
                  </button>
                  <button className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
                    Buscar
                  </button>
                </div> */}
              </div>
            </div>
          </section>

          <section className="flex flex-wrap justify-center gap-4 w-full min-h-[16rem]">
            {events
              .filter(event => event.dateComp >= new Date())
              .filter(event =>
                filterOrganizer != null ? event.organizers.includes(filterOrganizer) : event
              )
              .filter(event =>
                filterName != null && filterName != '' && filterName != ''
                  ? event.title.includes(filterName)
                  : event
              )
              .filter(event=>
                filterCity != null ? event.city.includes(filterCity) : event
              )
              .filter(
                event => !filterDate || moment(event.dateComp).format('DD/MM/YYYY') === filterDate
              )
              .map((event, index) => (
                <Event key={index} index={index} data={event}></Event>
              ))}
          </section>
          <div className="divide-y divide-neutral-200 w-full min-h-[10rem] mx-auto mt-8">
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span style={{ fontSize: '20px' }} className="text-white">
                    Eventos pasados
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <section className="flex flex-wrap justify-center gap-4 mt-4 w-full">
                  {events
                    .filter(event => event.dateComp < new Date())
                    .map((event, index) => (
                      <Event key={index} index={index} data={event}></Event>
                    ))}
                </section>
              </details>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
