import './globals.css'

export interface IRootLayout {
  children  : React.ReactNode
}

export default function RootLayout(props : IRootLayout) {
  return (
    <html lang="en">
      <head />
      <body>
        {props.children}
      </body>
    </html>
  )
}
