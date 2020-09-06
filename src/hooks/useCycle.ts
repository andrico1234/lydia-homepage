import { useState } from "react"

function useCycle<T>(vals: T[]) {
  const [indexOfCurrentValue, setIndexOfCurrentValue] = useState(0)
  const totalItems = vals.length

  const currentValue = vals[indexOfCurrentValue]

  function setNextValue() {
    const indexOfNextValue = indexOfCurrentValue + (1 % totalItems)

    if (indexOfNextValue >= totalItems) {
      setIndexOfCurrentValue(0)
      return vals[0]
    }

    setIndexOfCurrentValue(indexOfNextValue)
    return vals[indexOfNextValue]
  }

  function setValue(index: number) {
    console.log(index)

    setIndexOfCurrentValue(index)
  }

  console.log(currentValue)

  return { currentValue, setNextValue, setValue }
}

export default useCycle
