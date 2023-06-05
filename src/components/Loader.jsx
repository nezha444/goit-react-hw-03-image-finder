import PropTypes from 'prop-types';

import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.6)',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );
};
