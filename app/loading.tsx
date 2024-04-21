'use client';
import { PulseLoader } from 'react-spinners';

const Loading = ({ loading }: { loading: boolean }) => {
  const override = {
    display: 'flex',
    justifyContent: 'center',
    margin: '150px auto',
  };
  return (
    <PulseLoader
      color="#1a87c7"
      loading={loading}
      cssOverride={override}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
      speedMultiplier={1}
    />
  );
};
export default Loading;
