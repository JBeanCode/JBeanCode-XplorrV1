import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import RedwoodsImageUrl from "../assets/img/redwoods.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="text-center d-flex flex-column align-items-center">
      {/* <h1>Hello Rigo!!</h1> */}
      <div className="row m-auto w-100 h-100">
        <img src={RedwoodsImageUrl} />
      </div>
    </div>
  );
};
