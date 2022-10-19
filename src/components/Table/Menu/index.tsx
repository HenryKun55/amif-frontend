import { ReactNode } from 'react'
import { MdOutlineMoreVert } from 'react-icons/md'
import * as S from './styles'

export type TableMenuProps = {
  actions: {
    title: ReactNode
    icon?: ReactNode
    onClick?: () => void
  }[]
}

export const TableMenu = ({ actions }: TableMenuProps) => {
  return (
    <S.Popover>
      <S.PopoverTrigger>
        <S.More>
          <MdOutlineMoreVert size={20} />
        </S.More>
      </S.PopoverTrigger>
      <S.PopoverContent>
        {actions.map((action, idx) => (
          <S.Action key={idx} onClick={action.onClick}>
            {action.icon && <div>{action.icon}</div>}
            <span>{action.title}</span>
          </S.Action>
        ))}
      </S.PopoverContent>
    </S.Popover>
  )
}
