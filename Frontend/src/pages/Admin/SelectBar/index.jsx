function SelectBar({ options, filterValueSelected }) {

  const onFilterValueChanged = (e) => {
    filterValueSelected(e.target.value);
  }

  return (
    <select name="" id="" className="flex-1 border-2 border-black p-2 font-semibold" onChange={onFilterValueChanged}>
      <option value="all">Todos los productos</option>
      {
        options.map((option) => (
          <option key={option._id} value={option._id}>{option.name}</option>
        ))
      }
    </select>
  )
}

export default SelectBar;
