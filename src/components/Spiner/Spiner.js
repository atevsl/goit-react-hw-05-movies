import { ColorRing } from 'react-loader-spinner';
const Spiner = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#525a69', '#898dda', '#7b81ec', '#898dda', '#7b81ec']}
    />
  );
};
export default Spiner;
