import { useRef, useEffect } from 'react'
import Trash from '../icons/Trash'

const NoteCard = ({ note }) => {
  const position = JSON.parse(note.position)
  const colors = JSON.parse(note.colors)
  const body = JSON.parse(note.body)

  const textareaRef = useRef(null)

  const Autogrow = () => {
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
  }

  useEffect(() => {
    Autogrow()
  }, [])

  return (
    <div
      className='card'
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className='card-header'
        style={{ backgroundColor: colors.colorHeader }}
      >
        <Trash />
      </div>
      <div className='card-body'>
        <textarea
          ref={textareaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={() => Autogrow()}
        ></textarea>
      </div>
    </div>
  )
}

export default NoteCard
