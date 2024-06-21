import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/searchSlice';

const SearchBar = () => {
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  return (
    <div className="p-4 flex justify-end">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        placeholder="Search Cars"
        className="p-2 border"
      />
    </div>
  );
};

export default SearchBar;
