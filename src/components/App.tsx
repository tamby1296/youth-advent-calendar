import { CalendarDescription } from 'config/CalendarDescription'
import CalendarCard from './CalendarCard'
import './index.css'
import { CalendarContent } from 'config/CalendarContent'
import Snowfall from 'react-snowfall'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#658e8a] p-4 py-10">
      <Snowfall snowflakeCount={200} wind={[-0.5, 1.5]} speed={[0.5, 3]} color='#ede6dd' style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }} />
      <h1 className="mb-6 text-center text-[60px] italic leading-[45px] text-[#ede6dd]">
        ADVENT <br /> CALENDAR
      </h1>
      <p className='max-w-[450px] mb-6 text-center text-[16px] italic leading-[18px] text-[#ede6dd]'>{CalendarDescription[Math.floor(Math.random() * CalendarDescription.length) + 1]}</p>

      <div className="flex w-full max-w-[450px] flex-wrap items-center justify-center gap-2">
        <div className='relative leading-[40px] h-16 sm:h-20 flex items-center justify-center px-4 rounded-2xl bg-[#97c9c4] overflow-hidden'>
          <span className='text-[35px] sm:text-[44px] italic text-[#ad251e] whitespace-nowrap'>ST Thomas Youth</span>
        </div>
        {CalendarContent.map((content, i) => (
          <CalendarCard
            disabled={content.date.getDate() > new Date().getDate()}
            active={content.date.getDate() === new Date().getDate()}
            date={content.date}
            key={`${content.name} ${i}`}
            ctaImg={content.src}
            color={content.color}
            type={content.type}
            content={content.content}
            ctaText={content.ctaText}
            ctaTarget={content.ctaTarget}
          />
        ))}
      </div>
    </div>
  )
}

export default App
