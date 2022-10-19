import { CardEvent } from '@/components/CardEvent'

export function Playground() {
  const events = [
    {
      startDate: new Date().toString(),
      startHour: '19:30',
      canSubscribe: true,
      title: 'Distribuição de Dolar',
      images: [
        {
          id: 'any',
          url: 'https://img.freepik.com/free-photo/diverse-business-people-with-masks-new-normal_53876-102662.jpg?w=900&t=st=1666138980~exp=1666139580~hmac=aee17053ef4ffced5715c2e8496554220d1dc9abbbcf8811723f1ce1d3ef04b1',
        },
      ],
      address: {
        state: 'PE',
        city: 'Caruaru',
      },
    },
    {
      startDate: new Date().toString(),
      startHour: '19:30',
      canSubscribe: true,
      title: 'Distribuição de Dolar',
      images: [
        {
          id: 'any',
          url: 'https://img.freepik.com/free-photo/diverse-business-people-with-masks-new-normal_53876-102662.jpg?w=900&t=st=1666138980~exp=1666139580~hmac=aee17053ef4ffced5715c2e8496554220d1dc9abbbcf8811723f1ce1d3ef04b1',
        },
      ],
      address: {
        state: 'PE',
        city: 'Caruaru',
      },
    },
    {
      startDate: new Date().toString(),
      startHour: '19:30',
      canSubscribe: true,
      title: 'Distribuição de Dolar',
      images: [
        {
          id: 'any',
          url: 'https://img.freepik.com/free-photo/diverse-business-people-with-masks-new-normal_53876-102662.jpg?w=900&t=st=1666138980~exp=1666139580~hmac=aee17053ef4ffced5715c2e8496554220d1dc9abbbcf8811723f1ce1d3ef04b1',
        },
      ],
      address: {
        state: 'PE',
        city: 'Caruaru',
      },
    },
    {
      startDate: new Date().toString(),
      startHour: '19:30',
      canSubscribe: true,
      title: 'Distribuição de Dolar',
      images: [
        {
          id: 'any',
          url: 'https://img.freepik.com/free-photo/diverse-business-people-with-masks-new-normal_53876-102662.jpg?w=900&t=st=1666138980~exp=1666139580~hmac=aee17053ef4ffced5715c2e8496554220d1dc9abbbcf8811723f1ce1d3ef04b1',
        },
      ],
      address: {
        state: 'PE',
        city: 'Caruaru',
      },
    },
  ]
  return (
    <div style={{ display: 'flex', padding: '20px', flexWrap: 'wrap' }}>
      {events.map((event, key) => {
        return <CardEvent event={event} key={key} />
      })}
    </div>
  )
}
