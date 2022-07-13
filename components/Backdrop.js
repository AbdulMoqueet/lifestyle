
const Backdrop = ({openNav, handleSidebar}) => {

  return (
    <div onClick={handleSidebar} style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
        display: openNav?"block":"none"
    }}>

    </div>
  )
}

export default Backdrop