import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import RedwoodsImageUrl from "../assets/img/redwoods.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <div className="row position-relative homePagePhotoWrapper p-0 w-100 h-100">
        <img
          className="homePagePhotos p-0"
          src={RedwoodsImageUrl}
          alt="Redwoods"
        />
        {/* Overlay 2 */}
        <div className="overlay-bottom text-white ps-5">
          <span>Teach. Learn. Connect. Become an Xplorr.</span>
        </div>
      </div>
    </div>
  );
};
