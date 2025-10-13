import NavLink from "./nav-link";
export default function Header() {
  return <>
    <div className="w-full py-[18px] border-b border-[#000000]">
      <div className="">
        <div className="w-full flex justify-center">
          <NavLink href="/home">Home</NavLink>
          <NavLink href="/post">Posts</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>
      </div>
    </div>
  </>
}
