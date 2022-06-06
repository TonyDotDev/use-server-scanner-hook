type Player = {
  name: string
  raw: {
    score: number
    time: number
  }
}

export type ServerScannerData = {
  bots: []
  connect: string
  map: string
  maxplayers: number
  name: string
  password: boolean
  ping: number
  players: Player[]
  message: string
}

export type ServerScannerResponse = {
  data: ServerScannerData | null
  error: string | null
}