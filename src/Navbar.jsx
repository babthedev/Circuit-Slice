import circuit from '/src/assets/circuitslice.png'
const Navbar = () => {
  return (
    <div className="flex mt-8 justify-between">
          <a href="https://babthedev.substack.com/" target='_blank'><img src={circuit} width='60px' className='rounded-3xl' alt="Circuit Slice Logo" /></a>
          <button className='border-2 border-content px-3 py-0 text-xl float-right rounded-lg  hover:bg-black hover:text-white hover:border-0 dark:hover:text-bg dark:hover:border-'> <a href="https://babthedev.substack.com/archive" target='_blank'>Check out the Archive</a></button>
          </div>
  )
}

export default Navbar