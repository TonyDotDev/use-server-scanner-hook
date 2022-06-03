type Player = {
  name: string
  raw: {
    score: number
    time: number
  }
}

type ServerScannerData = {
  bots: []
  connect: string
  map: string
  maxplayers: number
  name: string
  password: boolean
  ping: number
  players: Player[]
}

export type ServerScannerResponse = {
  data: ServerScannerData | null
  error: string | null
}