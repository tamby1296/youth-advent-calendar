import { ContentType } from 'types/contentTypes'
import CalendarCard from './CalendarCard'
import './index.css'

const App = () => {
  const confs = [
    {
      name: 'bell',
      src: '/images/bell.png',
      color: '#ede6dd',
      type: ContentType.VIDEO,
      content: 'https://www.youtube.com/embed/_U9sEax4AoM'
    },
    {
      name: 'candy-cane',
      src: '/images/candy-cane.png',
      color: '#2b2b2b',
      type: ContentType.LINK,
      content: 'https://snd.click/xzd5'
    },
    {
      name: 'chimney',
      src: '/images/chimney.png',
      color: '#ed9474',
      type: ContentType.TEXT,
      content: ''
    },
    {
      name: 'christmas-candy',
      src: '/images/christmas-candy.png',
      color: '#97c9c4',
      type: ContentType.TEXT,
      content: ''
    },
    { name: 'chimney', src: '/images/chimney.png', color: '#ede6dd' },
    {
      name: 'christmas-decor',
      src: '/images/christmas-decor.png',
      color: '#ad251e'
    },
    {
      name: 'christmas-gift',
      src: '/images/christmas-gift.png',
      color: '#97c9c4'
    },
    {
      name: 'christmas-tree',
      src: '/images/christmas-tree.png',
      color: '#194a60'
    },
    { name: 'crystal-ball', src: '/images/crystal-ball.png', color: '#ede6dd' },
    {
      name: 'decoration-lamp',
      src: '/images/decoration-lamp.png',
      color: '#2b2b2b'
    },
    {
      name: 'decoration-lamps',
      src: '/images/decoration-lamps.png',
      color: '#ede6dd'
    },
    { name: 'fireplace', src: '/images/fireplace.png', color: '#194a60' },
    {
      name: 'christmas-gift',
      src: '/images/christmas-gift.png',
      color: '#ad251e'
    },
    { name: 'gift-sledge', src: '/images/gift-sledge.png', color: '#97c9c4' },
    { name: 'santa-clous', src: '/images/santa-clous.png', color: '#ede6dd' },
    { name: 'sledge', src: '/images/sledge.png', color: '#2b2b2b' },
    { name: 'snowflake', src: '/images/snowflake.png', color: '#ed9474' },
    { name: 'santa-clous', src: '/images/santa-clous.png', color: '#ede6dd' },
    { name: 'snowman', src: '/images/snowman.png', color: '#2b2b2b' },
    { name: 'winter-glove', src: '/images/winter-glove.png', color: '#ad251e' },
    { name: 'winter-glove', src: '/images/winter-glove.png', color: '#97c9c4' },
    { name: 'winter-hat', src: '/images/winter-hat.png', color: '#ede6dd' },
    { name: 'winter-sock', src: '/images/winter-sock.png', color: '#ad251e' },
    { name: 'wreath', src: '/images/wreath.png', color: '#97c9c4' }
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#658e8a] p-4">
      <h1 className="mb-6 text-center text-[60px] italic leading-[45px] text-[#ede6dd]">
        ADVENT <br /> CALENDAR
      </h1>

      <div className="flex w-full max-w-[450px] flex-wrap items-center justify-center gap-2">
        {confs.map((conf, i) => (
          <CalendarCard
            disabled={i >= 5}
            key={`${conf.name} ${i}`}
            ctaImg={conf.src}
            color={conf.color}
            date={i + 1}
            type={conf.type}
            content={conf.content}
          />
        ))}
      </div>
    </div>
  )
}

export default App
