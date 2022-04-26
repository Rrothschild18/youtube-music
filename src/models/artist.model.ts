export interface Artist {
  external_urls: { spotify: string }
  followers: { href: string, total: number }
  genres: Array<string>
  href: string
  id: string
  images: Array<{ url:string, height: number, width: number }>
  name: string
  popularity: number
  type: string
  uri: string,
}