import { LoadingStyled } from './styles';

const Loading =()=> {
    return (
      <LoadingStyled>
        <div className="loading-spinner"></div>
        <p className="loading-message">Loading...</p>
      </LoadingStyled>
    );
  }

export default Loading;
