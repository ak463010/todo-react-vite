import logo from '../assets/vite.svg'


export default function Header() {
  return (
    <header className='mb-10'>
      <div className="logo">
        <img src={ logo } alt="" />
      </div>
    </header>
  )
}
