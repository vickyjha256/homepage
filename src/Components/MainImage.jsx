const MainImage = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <div className="container text-center text-lg-start">
            <div className="row align-items-center">
              <div className="my-4 mx-4">
                <h1 className="display-4 text-white">The future of work is here</h1>
                <p className="lead text-white">
                  Memo is the first product to bring together the best parts of knowledge management,
                  collaboration, and project management into a single, unified space.
                </p>
                <a href="#" className="btn btn-primary btn-lg">Get started</a>
              </div>
            </div>
          </div>
        </div>
        <img src="https://www.brp.com/content/brp/en/careers/hiring-process/_jcr_content/root/heroblock.coreimg.jpeg/1707775117173/-ppd-21.jpeg?imwidth=2048" alt="FrontImage" className="img-fluid w-100 hero-image"/>
        </header>
    </>
  )
}

export default MainImage;