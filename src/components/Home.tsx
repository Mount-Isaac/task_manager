const Home = () => {
    return (
        <div className="container mt-3 col-lg-6 col-md-6 col-sm-12 text-center">
        <h2>Task Manager App</h2>
        <ul style={{listStyleType:'square', borderRadius:5}} className="d-flex justify-content-around bg-info p-3">
          <li>ReactJS</li>
          <li>TypeScript</li>
          <li>Reducers-dispatch-action</li>
          <li>Context Management</li>
        </ul>

        <div className="row">
            <div className="col-lg-12">
                <p className="h5">The Simplest & Easiest Task Management Tool. </p>
                <small>&copy; Isaac 2024</small><hr/>
            </div>
        </div>
      </div>
    )
}

export default Home