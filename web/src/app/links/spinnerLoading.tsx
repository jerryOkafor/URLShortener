import { Spinner } from "../components/providers";

export default function SpinnerLoading() {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          <Spinner color="red" className="h-12 w-12 justify-self-center" />
        </div>
      </div>
    </>
  );
}
