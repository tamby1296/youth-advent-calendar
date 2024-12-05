import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import './CalendarCard.css'
import YTEmbed from './contentType/YTEmbed'
import { ContentType } from 'types/contentTypes'
import Confetti from 'react-confetti-boom'

interface ICalendarCardProps {
  type?: ContentType
  ctaImg: string
  color: string
  date: Date
  content?: string
  disabled?: boolean
  ctaText?: string
  ctaTarget?: string
  active?: boolean
}

const CalendarCard: React.FC<ICalendarCardProps> = ({
  ctaImg,
  color,
  type,
  content,
  date,
  disabled = true,
  ctaText,
  ctaTarget,
  active = false
}) => {
  const [openCount, setOpenCount] = useState(0);
  const handleOpen = (open: boolean) => {
    if(open) setOpenCount(prevCount => prevCount + 1);
  };  

  const notOne = Math.floor(Math.random() * 2) + 1 > 1
  return (
    <Dialog.Root onOpenChange={handleOpen}>
      <Dialog.Trigger asChild>
        <button
          className={`relative flex size-16 sm:size-20 overflow-hidden rounded-2xl p-1 ${disabled && 'grayscale'
            }`}
          style={{
            backgroundColor: color
          }}
          disabled={disabled}
        >
          <img
            src={ctaImg}
            alt='cta-img'
            className={`absolute bottom-0 h-auto w-8/12 ${notOne ? 'bottom-1 left-1' : 'right-1 top-1'
            }`}
            />
          <span
            className={`absolute text-3xl font-bold ${notOne ? 'right-1 top-1' : 'bottom-1 left-1'
              }`}
              style={{ color: '#d53020' }}
              >
            {date.getDate()}.
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay bg-black/60" />
        {active && openCount <= 1 && <Confetti particleCount={200} mode='fall' />}
        <Dialog.Content className="DialogContent flex min-h-[300px] items-center justify-center">
          {type === ContentType.VIDEO && content && <YTEmbed link={content} />}
          {type === ContentType.LINK && content && (
            <a href={content} rel="noopener noreferrer" target="_blank" className='w-full'>
              <button className="w-full rounded-md bg-[#658e8a] px-3 py-2 text-lg text-[#ede6dd]">
                CLICK ME
              </button>
            </a>
          )}
          {type === ContentType.TEXT && content && (
            <div className='flex flex-col'>
              <p className='text-[20px] text-center mb-6 italic'>{content}</p>
              {ctaText && ctaTarget &&
                <a href={ctaTarget} rel="noopener noreferrer" target="_blank" className='w-full'>
                  <button className='w-full rounded-md bg-[#658e8a] px-3 py-2 text-lg text-[#ede6dd]'>
                    {ctaText}
                  </button>
                </a>
              }
            </div>
          )}
          {
            type !== ContentType.VIDEO &&
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          }
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CalendarCard
