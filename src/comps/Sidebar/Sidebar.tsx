
type SideBarProps = {
    setSelectSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

function SideBar({setSelectSidebar}:SideBarProps) {
    return (  
        //select classnames on boolean
        <div className="absolute bg-slate-200 transition-all duration-300 
        ease-in-out w-screen h-screen z-10" onClick={() => setSelectSidebar(false)}>
        </div>
    );
}

export default SideBar;