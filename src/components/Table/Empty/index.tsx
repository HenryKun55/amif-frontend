export interface EmptyProps {
  message: string
}

export const Empty = ({ message }: EmptyProps) => {
  return <div>{message}</div>
}
