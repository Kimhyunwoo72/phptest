import React, {useRef} from 'react'

function ScriptSearch({onSearch}) {
  const inputRef = useRef()

  const handleSearch = () => {
      const value = inputRef.current.value
      onSearch(value)
  }
  const onClick = () => {
      handleSearch()
  }
  const onKeyPress = (event) => {
      if (event.key === "Enter") {
          handleSearch()
      }
  }
return (
  <div className='bg'>
    <div className="script__search container">
        <h2>검색하기</h2>
        <input 
        ref={inputRef}
        type="search" 
        placeholder='검색하세요!' 
        onKeyPress={onKeyPress}
        />
      <button 
        type='submit' 
        onClick={onClick}>
            검색</button>
    </div>
  </div>
)
}

export default ScriptSearch