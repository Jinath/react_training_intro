import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import { Fragment } from 'react';


function App() {
  const items = ['Colombo', 'Galle', 'Jaffna', 'Kandy'];
  const items2 = ['Sri Lanka', 'Pakistan'];

  const onSelectedCity=(item)=>{
    console.log(item);
  }
  return (
    <Fragment>
      <ItemList items={items} title={'City List'} onSelected={onSelectedCity}></ItemList>
      <ItemList items={items2}></ItemList>
    </Fragment>
  );
}

export default App;
