// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import RedwoodsImageUrl from "../assets/img/redwoods.jpg";
import FlyFishingJpg from "../assets/img/flyFishing.jpeg";
import RockClimbingJpg from "../assets/img/rockClimbing.jpeg";
import MountaineeringJpg from "../assets/img/mountaineering.jpeg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const homePagePhotos = [
    RedwoodsImageUrl,
    FlyFishingJpg,
    RockClimbingJpg,
    MountaineeringJpg,
  ];
  const [homePagePhotoIndex, setHomePagePhotoIndex] = useState(0);
  const nextHomePhoto = () => {
    setHomePagePhotoIndex(
      (previousPhoto) => (previousPhoto + 1) % homePagePhotos.length,
    );
  };
  const previousHomePhoto = () => {
    setHomePagePhotoIndex((previousPhoto) =>
      previousPhoto === 0 ? homePagePhotos.length - 1 : previousPhoto - 1,
    );
  };

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <div className="row position-relative homePagePhotoWrapper p-0 w-100 h-100">
        <img
          className="homePagePhotos p-0"
          src={homePagePhotos[homePagePhotoIndex]}
          alt="scenery"
        />
        {/* Overlay search bar */}
        <div className="overlay-searchbar d-flex">
          <input className="rounded" placeholder="Where to?" />
          <button
            type="button"
            className="searchBarButton btn btn-success ms-1"
          >
            Search
          </button>
        </div>
        {/* Overlay toggle buttons */}
        <div className="overlayPhotoButtons d-flex">
          <button
            type="button"
            onClick={previousHomePhoto}
            className="overlayBackButton btn btn-light ms-3 rounded-circle"
          >
            <strong>{`<`}</strong>
          </button>
          <button
            type="button"
            onClick={nextHomePhoto}
            className="overlayFrontButton btn btn-light me-3 rounded-circle "
          >
            <strong>{`>`}</strong>
          </button>
        </div>
        {/* Overlay slogan */}
        <div className="overlay-slogan text-white ps-5">
          <span>Teach. Learn. Connect. Become an Xplorr.</span>
        </div>
      </div>
      <div className="homePageDescription m-2 row">
        <div className="col-4 homePageWhat">
          <h1>
            <u>What we do</u>
          </h1>
          <h4>
            Xplorr is here to connect you with local people, experiences, and
            guides anywhere you go. Search your current area or somewhere you're
            heading soon.
          </h4>
        </div>
        <div className="col-4 homePagePlan">
          <h1>
            <u>Plan your next experience</u>
          </h1>
          <h4>
            Search Xplorr by location, interest, activity, or calendar
            availability. Check out reviews of local experts and guides, see
            pictures, and read descriptions of experinces to see what peaks your
            interest.
          </h4>
        </div>
        <div className="col-4 homePageEasy">
          <h1>
            <u>We make it easy</u>
          </h1>
          <h4>
            Find your local expert, check calendar availability, book your
            adventure, and pay all through the website and/or mobile
            application.
          </h4>
        </div>
      </div>
      <div className="row d-flex">
        <div className="card cardOne col-4">
          <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Example Local/Guide #1?</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-success">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card cardOne col-4">
          <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Example Local/Guide #2?</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-success">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card cardOne col-4">
          <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Example Local/Guide #3?</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-success">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
