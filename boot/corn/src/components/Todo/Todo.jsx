import './Todo.scss'

export default function Todo() {
  return (
    <div className=" container-fluid vw-100 vh-100 bg-color d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className=" mx-auto col-6 bg-color shadow-lg border-1 py-3 ">
          <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <button type='submit' className=' btn btn-color'>Add</button>
          </div>
          </form>
        </div>
      </div>

    </div>
  )
}
