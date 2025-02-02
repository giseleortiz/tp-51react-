export const LastMovieInDb = () => {
  return (
    
    <div className="col-lg-6 mb-4">
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Últimas series en la base de datos.</h5>
      </div>
      <div className="card-body">
        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{width: "40rem"}} src="assets/images/mandalorian.jpg" alt=" Star Wars - Mandalorian "/>
        </div>
        <p>La primera temporada contó con nueve capítulos y esta segunda temporada, estrenada recientemente este jueves 8 de febrero en Paramount+, tendrá uno menos. Serán en total 8 los capítulos de la serie de Halo, dos de los cuales ya se estrenaron en el primer día.</p>
        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de la series</a>
    
      </div>
    </div>
  </div>
  
  )
}
