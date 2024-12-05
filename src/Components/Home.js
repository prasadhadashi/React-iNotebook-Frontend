import Notes from './Notes.js';

export const Home = (props) => {
  const {showAlert} = props;
  // props.showAlert("Welcome to iNotebook", "success");
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home
