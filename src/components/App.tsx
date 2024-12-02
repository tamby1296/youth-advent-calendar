import { CalendarDescription } from 'config/CalendarDescription'
import CalendarCard from './CalendarCard'
import './index.css'
import { CalendarContent } from 'config/CalendarContent'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#658e8a] p-4 py-10">
      <h1 className="mb-6 text-center text-[60px] italic leading-[45px] text-[#ede6dd]">
        ADVENT <br /> CALENDAR
      </h1>
      <p className='max-w-[450px] mb-6 text-center text-[16px] italic leading-[18px] text-[#ede6dd]'>{CalendarDescription[Math.floor(Math.random() * CalendarDescription.length) + 1]}</p>

      <div className="flex w-full max-w-[450px] flex-wrap items-center justify-center gap-2">
        {CalendarContent.map((content, i) => (
          <CalendarCard
            disabled={i >= 6}
            key={`${content.name} ${i}`}
            ctaImg={content.src}
            color={content.color}
            date={i + 1}
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
