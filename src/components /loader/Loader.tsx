import { RotatingLines } from "react-loader-spinner"

const Loader = ({title}:any) => {
  return (
      <>
            <RotatingLines
        visible={true}
        height="200"
        width="200"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <div>
              <h3 className="text-[50px]">{title}</h3>
      </div>
      </>
  )
}

export default Loader