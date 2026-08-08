import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, addToNum } from '../store/modules/counterStore'
import { fetchChannels } from "../store/modules/channelStore"
import { useEffect } from "react"

function App() {
  // 拿到store-module的实例
  const { count } = useSelector(state => state.counter)
  const { channels } = useSelector(state => state.channel)
  const dispatch = useDispatch()

  /**
   * 使用useEffect调接口
   */
  useEffect(() => {
    dispatch(fetchChannels())
  }, [])
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}> - </button>
      {count}
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(addToNum(10))}>set to 10</button>
      <button onClick={() => dispatch(addToNum(20))}>set to 20</button>
      <ul>
        {channels.map(item => <li key={item.id}>{item.name}</li> )}
      </ul>
    </div>
  )
}
export default App