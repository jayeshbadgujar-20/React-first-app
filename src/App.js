// import logo from './logo.svg';
import './App.css';
// import EventBinding from './components/Event_component/EventBinding';
// import EventClass from './components/Event_component/EventClass';
// import EventClick from './components/Event_component/EventClick';
import Parentcomponent from './components/Methodasprops/Parentcomponent';
// import UserCondition from './components/UserCondition';
// import Counter from './components/Counter';
// import Greet from './components/Greet';
// import Details from './components/Details';
// import Message from './components/Message';
// import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <h2>This is First REACT app</h2>
      {/*<Counter />
      <Greet name="Jayesh"  city ="Fagne"/>
      <Message /> 
      <Welcome name="Jayesh" courseName="MERN "/>
      <Details />
      <UserCondition />
      <EventBinding />
      <EventClass />
      <EventClick />*/}
      <Parentcomponent />
    </div>
  );
}

export default App;
