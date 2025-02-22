import AButtons from './components/atoms/AButtons/AButtons'
import Header from './components/molecules/Header/Header'
import Home from './components/pages/home/Home'
import Problem from './components/pages/problem/Problem'
import Solution from './components/pages/solution/Solution'
import AddedValue from './components/pages/addedValue/AddedValue'
import Plans from './components/pages/plans/Plans'
import Footer from './components/pages/footer/Footer'
function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Problem></Problem>
      <Solution></Solution>
      <AddedValue></AddedValue>
      <Plans></Plans>
      <Footer></Footer>
    </>
  )
}

export default App
