import React from 'react';
import './index.css';
import Navbar from './Components/LandingPage/Navbar'
import Hero from './Components/LandingPage/hero';
import Analytic from './Components/LandingPage/Analytic';
import Reminder from './Components/LandingPage/Reminder';
import Cards from './Components/LandingPage/Cards';
import Footer from './Components/LandingPage/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

import { Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
// import LandingJson from './Components/LandingPage/LandingJson';
import Sidebar from './Components/Dashboard/Sidebar';
import { AuthProvider } from './Components/Auth/Auth';
import Forgot from './Components/Auth/Forgot';
import ResetPassword from './Components/Auth/ResetPassword';
import IncomeForm from './Components/Income/IncomeForm';
import ExpenseForm from './Components/Expense/ExpenseForm';
import Income from './Components/Income/Income';
import Expense from './Components/Expense/Expense';
import UpdateForm from './Components/Element/updateForm';
import Table from './Components/Element/Table';
import Retrive from './Components/Element/Retrive';
import AddForm from './Components/Element/AddForm';
import Home from './Components/Dashboard/Home';
import Analysis from './Components/Analysis/Analysis';
import Formula from './Components/Formulas/Formula';
import Calculator from './Components/Formulas/Calculator';
import Todo from './Components/Todo/Todo';
import AddTodo from './Components/Todo/AddTodo';
import UpdateTodo from './Components/Todo/UpdateTodo';
import Profile from './Components/Profile/Profile';
import Reset from './Components/Profile/Reset';
import { RequireAuth } from './Components/Auth/RequireAuth';

function App() {
  
  return (
  
    
    <AuthProvider>
    <div>
    
      {/* <Sidebar/> */}
    
      
      <Routes>
        <Route path='/' element={<LandingPage/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/api/user/set_password/:uid/:token/' element={<ResetPassword/>}/>

       
        <Route path='/home' element={<RequireAuth>    <Sidebar ><Home/></Sidebar>     </RequireAuth>}/>
        <Route path='/home' element={<RequireAuth>    <Sidebar ><Home/></Sidebar>     </RequireAuth>}/>
        <Route path='/income' element={<RequireAuth>    <Sidebar><Income/></Sidebar>    </RequireAuth>}/>
        <Route path='/income/add' element={<RequireAuth>    <Sidebar> <AddForm isIncome={"income"} /> </Sidebar>    </RequireAuth>}/>
        <Route path='/income/update' element={<RequireAuth>    <Sidebar><UpdateForm/></Sidebar>    </RequireAuth>}/>
        <Route path='/income/:id' element={<RequireAuth>    <Sidebar><Retrive isIncome={"income"}/></Sidebar>    </RequireAuth>}/>

        <Route path='/expense' element={<RequireAuth>    <Sidebar><Expense/></Sidebar>    </RequireAuth>}/>
        <Route path='/expense/add' element={<RequireAuth>    <Sidebar> <AddForm isIncome={"expense"} /> </Sidebar>    </RequireAuth>}/>
        <Route path='/expense/update' element={<RequireAuth>    <Sidebar><UpdateForm/></Sidebar>    </RequireAuth>}/>
        <Route path='/expense/:id' element={<RequireAuth>    <Sidebar><Retrive isIncome={"expense"}/></Sidebar>     </RequireAuth>}/>



        <Route path='/analysis' element={<RequireAuth><Sidebar><Analysis/></Sidebar> </RequireAuth>}/>
        <Route path='/formula' element={<RequireAuth><Sidebar><Formula/></Sidebar> </RequireAuth>}/>
        <Route path='/formula/:id' element={<RequireAuth><Sidebar><Calculator/></Sidebar> </RequireAuth>}/>


        <Route path='/todo' element={<RequireAuth><Sidebar><Todo/></Sidebar> </RequireAuth>}/>
        <Route path='/todo/add' element={<RequireAuth><Sidebar><AddTodo/></Sidebar> </RequireAuth>}/>
        <Route path='/todo/update' element={<RequireAuth><Sidebar><UpdateTodo/></Sidebar> </RequireAuth>}/>

        <Route path='/profile' element={<RequireAuth><Sidebar><Profile/></Sidebar> </RequireAuth>}/>
        <Route path='/profile/resetpassword' element={<RequireAuth><Sidebar><Reset/></Sidebar> </RequireAuth>}/>



       
      
        

        <Route path='/rough' element={<Retrive/>}/>
      </Routes>
      
    </div>
  </AuthProvider>
  );
}

export default App;
