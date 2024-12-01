import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import './CalendarCard.css'
import YTEmbed from './contentType/YTEmbed'
import { ContentType } from 'types/contentTypes'

interface ICalendarCardProps {
  type?: ContentType
  ctaImg: string
  color: string
  content?: string
  disabled?: boolean
  textColor: string
  date: number
}

const CalendarCard: React.FC<ICalendarCardProps> = ({
  ctaImg,
  color,
  textColor,
  type,
  content,
  date,
  disabled = true
}) => {
  const notOne = Math.floor(Math.random() * 2) + 1 > 1
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={`relative flex size-20 overflow-hidden rounded-2xl p-1 ${
            disabled && 'grayscale'
          }`}
          style={{
            backgroundColor: color
          }}
          disabled={disabled}
        >
          <img
            src={ctaImg}
            className={`absolute bottom-0 h-auto w-8/12 ${
              notOne ? 'bottom-1 left-1' : 'right-1 top-1'
            }`}
          />
          <span
            className={`absolute text-3xl font-bold ${
              notOne ? 'right-1 top-1' : 'bottom-1 left-1'
            }`}
            style={{ color: '#d53020' }}
          >
            {date}.
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay bg-black/60" />
        <Dialog.Content className="DialogContent flex min-h-[300px] items-center justify-center">
          {type === ContentType.VIDEO && <YTEmbed link={content} />}
          {type === ContentType.LINK && (
            <button className="rounded-md bg-[#658e8a] px-3 py-2 text-lg text-[#ede6dd]">
              <a href={content} rel="noopener noreferrer" target="_blank">
                CLICK ME
              </a>
            </button>
          )}
          {/* <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CalendarCard
